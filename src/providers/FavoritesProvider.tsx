import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Pokemon } from "../interfaces/Pokemon";
import type { Favorites } from "../interfaces/Favorites";
import { useAuth } from "./AuthProvider";
import apiFavorites from "../services/api-favorites";

const FavoriteContext = createContext<{
    favorites:Favorites | null,
    favorite:Pokemon[],
    setFavorite: (favorite:Pokemon[])=>void,
    favoriteAdd: (pokemon:Pokemon)=>void
}>({
    favorites: null,
    favorite: [],
    setFavorite: () => {},
    favoriteAdd: () => {}
})

export function FavoriteProvider({children}:{children:ReactNode}){

    const { user } = useAuth()

    const [favorites,setFavorites] = useState<Favorites | null>(null)

    useEffect(()=>{
        if(user){
            apiFavorites.getFavorites().then((res)=>{
                setFavorites(res)
            })
        }else{
            setFavorites(null)
        }
    },[user])

    const favoriteAdd = (pokemon:Pokemon) => {
        if(!favorites) return
        apiFavorites.setPokemonFavorite(pokemon.id).then((res)=>{
            setFavorites(res)
        })
    }

    const [favorite,setFavoriteState] = useState<Pokemon[]>(()=>{
        const savedFavorite : string | null = localStorage.getItem('favorite')
        if(savedFavorite){
            return JSON.parse(savedFavorite)
        }
        return []
    })

    const setFavorite = (newFavorite:Pokemon[]) =>{
        setFavoriteState(newFavorite)
        localStorage.setItem('favorite',JSON.stringify(newFavorite))
    }

    useEffect(()=>{
        document.documentElement.setAttribute('data-favorite',JSON.stringify(favorite))
    },[favorite])

    return(
        <FavoriteContext.Provider value={{favorites,favorite,setFavorite,favoriteAdd}}>
            {children}
        </FavoriteContext.Provider>
    )
}

export function useFavorites(){
    return useContext(FavoriteContext)
}
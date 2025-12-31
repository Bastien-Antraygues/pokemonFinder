import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Pokemon } from "../interfaces/Pokemon";

const FavoriteContext = createContext<{
    favorite:Pokemon[],
    setFavorite: (favorite:Pokemon[])=>void
}>({
    favorite: [],
    setFavorite: () => {}
})

export function FavoriteProvider({children}:{children:ReactNode}){

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
        <FavoriteContext.Provider value={{favorite,setFavorite}}>
            {children}
        </FavoriteContext.Provider>
    )
}

export function useFavorites(){
    return useContext(FavoriteContext)
}
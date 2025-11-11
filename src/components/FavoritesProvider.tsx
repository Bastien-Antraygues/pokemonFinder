import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const FavoriteContext = createContext<{
    favorite:string[],
    setFavorite: (favorite:string[])=>void
}>({
    favorite: [],
    setFavorite: () => {}
})

export function FavoriteProvider({children}:{children:ReactNode}){

    const [favorite,setFavoriteState] = useState(()=>{
        const savedFavorite : string | null = localStorage.getItem('favorite')
        if(savedFavorite){
            return JSON.parse(savedFavorite)
        }
        return []
    })

    const setFavorite = (newFavorite:string[]) =>{
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
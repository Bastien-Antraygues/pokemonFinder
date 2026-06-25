import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Pokemon } from "../interfaces/Pokemon";
import type { Favorites } from "../interfaces/Favorites";
import { useAuth } from "./AuthProvider";
import apiFavorites from "../services/api-favorites";

const FavoriteContext = createContext<{
    favorites: Favorites | null,
    setFavorites: (favorites: Favorites | null) => void,
    favoriteAdd: (pokemon: Pokemon) => void
}>({
    favorites: null,
    setFavorites: () => { },
    favoriteAdd: () => { }
})

export function FavoriteProvider({ children }: { children: ReactNode }) {

    const { user } = useAuth()

    const [favorites, setFavorites] = useState<Favorites | null>(null)

    useEffect(() => {
        if (user) {
            apiFavorites.getFavorites().then((res) => {
                setFavorites(res)
            })
        } else {
            setFavorites(null)
        }
    }, [user])
/*
    useEffect(() => {
        console.log("favorites changed", favorites)
    }, [favorites])
*/
    const favoriteAdd = (pokemon: Pokemon) => {
        if (!favorites) return
        apiFavorites.setPokemonFavorite(pokemon.id).then((res) => {
            setFavorites(res)
        })
    }

    

    return (
        <FavoriteContext.Provider value={{ favorites, setFavorites, favoriteAdd }}>
            {children}
        </FavoriteContext.Provider>
    )
}

export function useFavorites() {
    return useContext(FavoriteContext)
}
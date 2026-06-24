import fetch from "../config/fetch"
import type { Favorites } from "../interfaces/Favorites"

const apiFavorites = {
    getFavorites: async () => {
        return fetch.get<Favorites>("/favorites").then((res)=> res.data)
    },
    setPokemonFavorite: async (pokemonId:number)=> {
        return fetch.post("/favorites", {pokemonId}).then((res)=> res.data)
    }
}

export default apiFavorites
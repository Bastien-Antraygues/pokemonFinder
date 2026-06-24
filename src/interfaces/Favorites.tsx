import type { Pokemon } from "./Pokemon"

export interface Favorites{
    id: number,
    userId: number,
    pokemonFavorites: {
        pokemon: Pokemon,
        order: number
    } []
}
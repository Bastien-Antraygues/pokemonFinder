import { PokemonCard } from "../components/pokemonCard";

export function Search(){
    return(
        <>
            <h1>Page de recherche</h1>
            <PokemonCard url={"https://pokeapi.co/api/v2/pokemon/1"}/>
        </>
    )
}
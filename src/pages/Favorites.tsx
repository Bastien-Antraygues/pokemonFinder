import { useState } from "react";
import { useFavorites } from "../providers/FavoritesProvider"
import { PageableComponent } from "../components/PageableComponent";
import { PokemonCard } from "../components/PokemonCard";
import { getPokeSize } from "../components/PokemonList";
import type { PokeSize } from "../interfaces/PokeSize";
import type { Pokemon } from "../interfaces/Pokemon";

export function Favorites() {
     
    const [page,setPageable] = useState(1)
    const { favorites } = useFavorites()
    const [pokemonFavorites, setpokemonFavorites] =useState<{ pokemon:Pokemon, order:number }[]>(favorites?.pokemonFavorites ||[])
    let pageMax = Math.ceil(pokemonFavorites.length/20)
    const [pokeSize,setPokeSize] = useState<PokeSize>(getPokeSize(page))
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState("")
    if (loading) return <p>Chargement...</p>;
    if (pokemonFavorites.length==0) return <p className="mx-20">Aucun pokemon en favoris</p>
    if (error) return <p>Erreur serveur</p>;
    return (
        <>
                
            <ul className="flex justify-center">
                <li>{
                getPage(pageMax).map((value)=>{
                    return <PageableComponent key={value} pageNumber={value} isPage={page==value} onSelectPage={()=>{
                        setPageable(value)
                        setPokeSize(getPokeSize(value))
                    }}/>
                })
            }</li></ul>
            <div className="grid lg:grid-cols-2 xl:grid-cols-4">
                {
                    pokemonFavorites.slice(pokeSize.pStart, pokeSize.pEnd).map((value) => {
                        
                        return <PokemonCard key={value.pokemon.id} pokemon={value.pokemon} />
                    })
                }
            </div>
        </>
    )
}

function getPage(page:number) : number[]{
    let tab : number[] = []
    for(let i=1;i<=page;i++){
        tab.push(i)
    }
    return tab
}
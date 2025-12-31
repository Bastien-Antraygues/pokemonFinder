import { useState } from "react";
import { useFavorites } from "../components/FavoritesProvider"
import { PageableComponent } from "../components/PageableComponent";
import { PokemonCard } from "../components/PokemonCard";
import { getPokeSize } from "../components/PokemonList";
import type { PokeSize } from "../interfaces/PokeSize";
import type { Pokemon } from "../interfaces/Pokemon";

export function Favorites() {
     
    const [page,setPageable] = useState(1)
    const { favorite } = useFavorites()
    const [pokemons, setPokemons] =useState<Pokemon[]>(favorite)
    let pageMax = Math.ceil(favorite.length/20)
    const [pokeSize,setPokeSize] = useState<PokeSize>(getPokeSize(page))
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState("")
    if (loading) return <p>Chargement...</p>;
    if (pokemons.length==0) return <p className="mx-20">Aucun pokemon en favoris</p>
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
                    pokemons.slice(pokeSize.pStart, pokeSize.pEnd).map((value) => {
                        
                        return <PokemonCard key={value.id} pokemon={value} />
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
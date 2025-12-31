import { useEffect, useMemo, useState } from "react";
import { PokemonList } from "../components/PokemonList";
import api from "../services/api";
import type { Pokemon } from "../interfaces/Pokemon";
// 1328
export function Search() {
    const [search, setSearch] = useState("")
    const [data, setData] = useState<Pokemon[]>()
    useEffect(() => {
        api.getPokemons().then(page => {
            setData(page)
        })
    }, [])
    const filtered = useMemo(()=>{
        if(!data) return []
        if(search.length<3) return data
        return data.filter(result => result.name.toLowerCase().includes(search.toLowerCase()))
    },[search,data])

    return (
        <>

            <input type="text" value={search} onInput={onImput}
                className="ml-18 p-2 bg-pink-3 border-2 border-pink-6 w-80" placeholder="Recherche par nom de pokemon" />

            {
                data ? (
                    <>
                        <PokemonList pokeList={filtered} isPageable={search.length<3}/>
                    </>



                ) : (
                    <p>Chargement des Pokémon...</p>
                )
            }

        </>
    )

    function onImput(e: React.FormEvent<HTMLInputElement>) {
        setSearch(e.target.value)
    }

}


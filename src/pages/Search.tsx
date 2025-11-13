import { useEffect, useState } from "react";
import { PokemonCard } from "../components/pokemonCard";
import { useFetch } from "../customHooks/customHooks";
import type { Page } from "../interfaces/Page";

export function Search() {

    const [search, setSearch] = useState("")
    const [filterResults, setFilterResults] = useState<{ name: string; url: string }[]>([])
    let data: Page | null = useFetch<Page>("https://pokeapi.co/api/v2/pokemon/?limit=1328")
    useEffect(() => {
        if (data) {
            console.log(search)
            if (search && search.length > 2) {
                setFilterResults(data.results.filter(result => result.name.toLowerCase().includes(search.toLowerCase())))
                console.log(filterResults)
            } else {
                setFilterResults(data.results)
            }

        }
    }, [search, data])






    return (
        <>
            
            <input type="text" value={search} onInput={(e) => setSearch(e.target.value)} 
            className="ml-18 p-2 bg-pink-light-3 border-2 border-pink-light-6 w-80" placeholder="Recherche par nom de pokemon" />

            {
                data ? (
                    <div className="grid lg:grid-cols-2 xl:grid-cols-4">
                        {
                            filterResults.slice(0, 20).map((result) => {
                                const id = result.url.split("/").filter(Boolean).pop();
                                return <PokemonCard key={id} url={result.url} />
                            })
                        }
                    </div>
                ) : (
                    <p>Chargement des Pokémon...</p>
                )
            }

        </>
    )


    function inputChange() {
        console.log(search)
    }
}
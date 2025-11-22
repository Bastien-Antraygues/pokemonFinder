import { useEffect, useState } from "react";
import { useFetch } from "../customHooks/customHooks";
import type { Page } from "../interfaces/Page";
import { PokemonList } from "../components/PokemonList";
// 1328
export function Search() {
    const [search, setSearch] = useState("")
    const [filterResults, setFilterResults] = useState<{ name: string; url: string }[]>([])
    let data: Page | null = useFetch<Page>("/api/pokemon/?limit=1302")
    useEffect(() => {
        if (data) {
            console.log(search)
            if (search && search.length > 2) {
                
                setFilterResults(data.results.filter(result => result.name.toLowerCase().includes(search.toLowerCase())))
            } else {
                setFilterResults(data.results)
            }

        }
    }, [search, data])

    return (
        <>

            <input type="text" value={search} onInput={onImput}
                className="ml-18 p-2 bg-pink-3 border-2 border-pink-6 w-80" placeholder="Recherche par nom de pokemon" />

            {
                data ? (
                    <>
                        <PokemonList pokeList={filterResults} isPageable={search.length<3}/>
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


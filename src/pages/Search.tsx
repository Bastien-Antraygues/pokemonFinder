import { useEffect, useState } from "react";
import { useFetch } from "../customHooks/customHooks";
import type { Page } from "../interfaces/Page";
import { PokemonList } from "../components/PokemonList";
import type { PokeSize } from "../interfaces/PokeSize";
// 1328
export function Search() {
    const [pageable,setPageable] = useState<{pStart:number,pEnd:number}>(getPokeSize(1))
    const [search, setSearch] = useState("")
    const [filterResults, setFilterResults] = useState<{ name: string; url: string }[]>([])
    let data: Page | null = useFetch<Page>("https://pokeapi.co/api/v2/pokemon/?limit=1302")
    useEffect(() => {
        if (data) {
            console.log(search)
            if (search && search.length > 2) {
                if(pageable.pStart!=0) setPageable(getPage(1))
                setFilterResults(data.results.filter(result => result.name.toLowerCase().includes(search.toLowerCase())))
            } else {
                setFilterResults(data.results)
            }

        }
    }, [search, data])

    return (
        <>
            
            <input type="text" value={search} onInput={(e) => setSearch(e.target.value)} 
            className="ml-18 p-2 bg-pink-light-3 border-2 border-pink-light-6 dark:bg-pink-dark-3 dark:border-pink-dark-6 w-80" placeholder="Recherche par nom de pokemon" />

            {
                data ? (
                    <PokemonList pokeList={filterResults} pokeSize={pageable} />
                ) : (
                    <p>Chargement des Pokémon...</p>
                )
            }

        </>
    )

    function getPokeSize(page:number): PokeSize {
        let pEnd = page*20
        let pStart = pEnd-20
        return {pStart:pStart,pEnd:pEnd}
    }

    function getPage(page:number){
        let pageStart:number = page
        let pageEnd:number = page
        if(page<66){
            for (let i = page; i < page + 3; i++) {
                pageEnd = i
                if (i == 66) {
                    break
                }
            }
        }
        if(page>1){
            for(let i=page;i>page-3;i--){
                pageStart = i
                if (i == 1) {
                    break
                }
            }
        }
        let tab : number[] = []
        for(let i = pageStart;i<=pageEnd;i++){
            tab.push(i)
        }
        if(pageStart>1){
            tab = [1].concat(tab)
        }
        if(pageEnd<66){
            tab.push(66)
        }
        console.log(pageEnd)
        return tab
    }

}
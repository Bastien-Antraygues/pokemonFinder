import { useEffect, useState } from "react";
import { useFetch } from "../customHooks/customHooks";
import type { Page } from "../interfaces/Page";
import { PokemonList } from "../components/PokemonList";
import type { PokeSize } from "../interfaces/PokeSize";
import { PageableComponent } from "../components/PageableComponent";
// 1328
export function Search() {
    const [page,setPage] = useState<number>(1)
    const [pageable,setPageable] = useState<{pStart:number,pEnd:number}>(getPokeSize(page))
    const [search, setSearch] = useState("")
    const [filterResults, setFilterResults] = useState<{ name: string; url: string }[]>([])
    let data: Page | null = useFetch<Page>("https://pokeapi.co/api/v2/pokemon/?limit=1302")
    useEffect(() => {
        if (data) {
            console.log(search)
            if (search && search.length > 2) {
                if(page!=1){
                    setPage(1)
                    setPageable(getPokeSize(1))
                }
                setFilterResults(data.results.filter(result => result.name.toLowerCase().includes(search.toLowerCase())))
            } else {
                setFilterResults(data.results)
            }

        }
    }, [search, data])

    return (
        <>
            
            <input type="text" value={search} onInput={(e) => setSearch(e.target.value)} 
            className="ml-18 p-2 bg-pink-3 border-2 border-pink-6 w-80" placeholder="Recherche par nom de pokemon" />

            {
                data ? (
                    <>
                        <PokemonList pokeList={filterResults} pokeSize={pageable} />
                        {
                            search.length < 3 ? <ul className="flex justify-center">
                            <li>
                               {
                            getPage(page).map((pageNumber)=>{
                                return <PageableComponent key={pageNumber} pageNumber={pageNumber} isPage={page==pageNumber}
                                onSelectPage={onSelectPage}
                                />
                            })
                        }    
                            </li>
                         
                        </ul> : <></>
                        }
                        
                        
                    </>
                    
                    
                    
                ) : (
                    <p>Chargement des Pokémon...</p>
                )
            }

        </>
    )

    function onSelectPage(sPage:number){
        setPage(sPage)
        setPageable(getPokeSize(sPage))
    }

    function getPokeSize(pageNumber:number): PokeSize {
        let pEnd = pageNumber*20
        let pStart = pEnd-20
        return {pStart:pStart,pEnd:pEnd}
    }

    function getPage(pageNumber:number){
        let pageStart:number = pageNumber
        let pageEnd:number = pageNumber
        if(pageNumber<66){
            for (let i = pageNumber; i < pageNumber + 3; i++) {
                pageEnd = i
                if (i == 66) {
                    break
                }
            }
        }
        if(pageNumber>1){
            for(let i=pageNumber;i>pageNumber-3;i--){
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
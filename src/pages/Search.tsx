import { useEffect, useState } from "react";
import { PokemonCard } from "../components/pokemonCard";
import { useFetch } from "../customHooks/customHooks";
import type { Page } from "../interfaces/Page";

export function Search(){

    const [search,setSearch] = useState("")
    const [filterResults, setFilterResults] = useState<{name:string;url:string}[]>([])
    let data :Page |null = useFetch<Page>("https://pokeapi.co/api/v2/pokemon/?limit=1328")
    let nbPoke : number = 0
    useEffect(()=>{
        if(data){
            console.log(search)
            if(search && search.length>2){
                setFilterResults(data.results.filter(result=> result.name.toLowerCase().includes(search.toLowerCase())))
                console.log(filterResults)
            }else{
                setFilterResults(data.results)
            }

        }
    },[search,data])
    

    if(data){
        
        
        
        return(
            <>
                <h1>Page de recherche</h1>
                <input type="text" value={search} onInput={e => setSearch(e.target.value)} name="search" id="search" placeholder="Recherche par nom de pokemon" />
                <div className="grid lg:grid-cols-2 xl:grid-cols-4 bg-red-50">
                {
                    
                    filterResults.map((result,index)=>{
                        if(nbPoke<20){
                            nbPoke=nbPoke+1
                            return <PokemonCard key={index} url={result.url}/>
                        }
                        
                    })
                }
            </div>
            </>
        )
    }

    return(
        <>
            <h1>Page de recherche</h1>
            <input type="text" name="search" id="search" placeholder="Recherche par nom de pokemon" />
            <PokemonCard url={"https://pokeapi.co/api/v2/pokemon/1"}/>
        </>
    )

    function inputChange(){
        console.log(search)
    }
}
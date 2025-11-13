import { PokemonCard } from "../components/pokemonCard"
import { useFetch } from "../customHooks/customHooks"
import type { Page } from "../interfaces/Page"
import type { Pokemon } from "../interfaces/Pokemon"

export function Home(){

    let data : Page | null = useFetch<Page>("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
    
    if(data){
        return(
        <>
            <h1>Page d'Accueil</h1>
            <div className="grid lg:grid-cols-2 xl:grid-cols-4">
                {
                    data.results.map((result,index)=>{
                        
                        return <PokemonCard key={index} url={result.url}/>
                    })
                }
            </div>

        </>
    )
    }
    return(
        <>
            <h1>Page d'Accueil</h1>
            <p>pas de data</p>
        </>
    )
}
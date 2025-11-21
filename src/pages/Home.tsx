import { PokemonCard } from "../components/PokemonCard"
import { PokemonList } from "../components/PokemonList"
import { useFetch } from "../customHooks/customHooks"
import type { Page } from "../interfaces/Page"
import type { Pokemon } from "../interfaces/Pokemon"

export function Home(){
    const offset = getRandomInt(1299)

    console.log(offset+" ")
    const data : Page | null = useFetch<Page>("https://pokeapi.co/api/v2/pokemon/?limit=1302")
    if(data){
        return(
        <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
                data.results.slice(offset,offset+20).map((page)=>{
                    return <PokemonCard url={page.url} key={page.name}/>
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

function getRandomInt(max:number) {
  return Math.floor(Math.random() * max);
}
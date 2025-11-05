import { useState } from "react"
import { useFetch } from "../customHooks/customHooks"
import type { Pokemon } from "../interfaces/Pokemon"
import { Type } from "./Type"

export function PokemonCard(props:{url:string}){
    const data : Pokemon | null = useFetch<Pokemon>(props.url)
    const [isFavorite, setIsFavorite] = useState(false)
    if(data){
        return(
            <>
        
            <div className="m-4 p-4 border-1 text-center w-60 mx-auto bg-red-50">
                <div className="text-right">
                    <button
                        className=""
                        onClick={() => setIsFavorite(!isFavorite)}
                        aria-label="Ajouter ou retirer des favoris"
                    >
                    {isFavorite ? "❤️" : "🤍"}
                    </button>
                </div>
                <h1 className="">{data.name}</h1>
            
                <img className="mx-auto" src={data.sprites.front_default} alt="" />
                <p>N° {data.id}</p>
                <div className="flex">{data.types.map((element)=>{
                    return <Type  name={element.type.name} />
                })}</div>
            </div>
        </>
        )
    }
    return(
        <>
        
        <h1>Pokemon non trouvé</h1>
            
        </>
    )
}
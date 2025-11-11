import { useEffect, useState } from "react"
import { useFetch } from "../customHooks/customHooks"
import type { Pokemon } from "../interfaces/Pokemon"
import { Type } from "./Type"
import { useFavorites } from "./FavoritesProvider"

export function PokemonCard(props:{url:string}){
    const data : Pokemon | null = useFetch<Pokemon>(props.url)
    
    const {favorite, setFavorite} = useFavorites()
    const initialString : string = favorite.filter(value => value.startsWith(props.url)).toString()
    const inital : boolean = initialString ? true:false
    const [isFavorite, setIsFavorite] = useState(inital)
    
    useEffect(()=>{
        
        if(isFavorite && data){
            let tab :string[] = favorite
            tab.push(props.url)
            setFavorite(tab)
            console.log(favorite)
        }
    },[isFavorite])

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
                    return <Type key={element.type.name} name={element.type.name} />
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
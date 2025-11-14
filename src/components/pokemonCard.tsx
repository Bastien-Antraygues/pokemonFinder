import { useEffect, useState } from "react"
import { useFetch } from "../customHooks/customHooks"
import type { Pokemon } from "../interfaces/Pokemon"
import { Type } from "./Type"
import { useFavorites } from "./FavoritesProvider"
import { upperName } from "./FunctionSpecial"

export function PokemonCard(props:{url:string}){
    const data : Pokemon | null = useFetch<Pokemon>(props.url)
    
    const {favorite, setFavorite} = useFavorites()
    const initialString : string = favorite.filter(value => value.startsWith(props.url)).toString()
    const inital : boolean = initialString ? true:false
    const [isFavorite, setIsFavorite] = useState(inital)
    
    useEffect(()=>{
        
        if(isFavorite && data){
            if(!favorite.includes(props.url)){
                setFavorite([...favorite,props.url])
            }
            
        }else if(!isFavorite && data){
            if(favorite.includes(props.url)){
                
                setFavorite(favorite.filter((item)=>item!==props.url))
            }
        }
    },[isFavorite])

    if(data){
        return(
            <>
        
            <div className="m-4 p-4 border-2  text-center w-60 mx-auto border-pink-light-6 bg-pink-light-3 dark:border-pink-dark-6 dark:bg-pink-dark-3">
                <div className="text-right">
                    <button
                        className=""
                        onClick={() => setIsFavorite(!isFavorite)}
                        aria-label="Ajouter ou retirer des favoris"
                    >
                    {isFavorite ? "❤️" : "🤍"}
                    </button>
                </div>
                <h1 className="">{upperName(data.name)}</h1>
            
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
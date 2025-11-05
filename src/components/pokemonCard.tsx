import { useFetch } from "../customHooks/customHooks"
import type { Pokemon } from "../interfaces/Pokemon"

export function PokemonCard(props:{url:string}){
    const data : Pokemon | null = useFetch(props.url)
    if(data){
        console.log(data)
        return(
            <>
        
            <div><h1>{data.name}</h1>
            
            <img src={data.sprites.front_default} alt="" /></div>
            <p>N° {data.order}</p>
            <p>Type : {data.types.map((element)=>{
                return element.type.name+" "
            })}</p>
            
        </>
        )
    }
    return(
        <>
        
        <h1>Pokemon non trouvé</h1>
            
        </>
    )
}
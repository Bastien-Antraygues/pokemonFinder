import { useFetch } from "../customHooks/customHooks"
import type { Pokemon } from "../interfaces/Pokemon"

export function PokemonCard(props:{url:string}){
    const data : Pokemon | null = useFetch<Pokemon>(props.url)
    if(data){
        return(
            <>
        
            <div className=""><h1 className="">{data.name}</h1>
            
            <img src={data.sprites.front_default} alt="" />
            <p>N° {data.order}</p>
            <p>Type : {data.types.map((element)=>{
                return element.type.name+" "
            })}</p>
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
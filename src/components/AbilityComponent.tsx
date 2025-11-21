import { useFetch } from "../customHooks/customHooks"
import type { Ability } from "../interfaces/Ability"

export function AbilityComponent(props:{url:string}){
    const ability :Ability |null= useFetch(props.url)
    
    if(ability){
        let name = ability.names.find((name)=> name.language.name.includes("en"))
        let effect = ability.effect_entries.find((effect)=> effect.language.name.includes("en")) 
        || ability.flavor_text_entries.find((effect)=> effect.language.name.includes("en"))
        return(
            <>
             <p>- <strong>{name?.name}</strong> : {effect.effect ||  effect?.flavor_text}</p>
            </>
        )
    }
    return(
        <>
        Aucune abilité
        </>
    )
}
import type { Ability } from "../interfaces/Ability"

export function AbilityComponent({ability}: { ability: Ability }) {
    
    if (!ability) {
        return (
            <>
                Aucune abilité
            </>
        )
    }

    let name = ability.names.find((name) => name.language.name.includes("en"))
    let effect = ability.effect_entries.find((effect) => effect.language.name.includes("en"))
        || ability.flavor_text_entries.find((effect) => effect.language.name.includes("en"))
    return (
        <>
            <p>- <strong>{name?.name}</strong> : {effect.effect || effect?.flavor_text}</p>
        </>
    )


}
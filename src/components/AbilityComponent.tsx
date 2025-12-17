import { useEffect, useState } from "react"
import type { Ability } from "../interfaces/Ability"
import api from "../services/api"

export function AbilityComponent(props: { url: string }) {
    const [ability, setAbility] = useState<Ability>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        setLoading(true)
        api.getAbility(props.url).then((abi) => setAbility(abi))
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }, [])
    if (loading) {
        return (
            <p>Chargement en Cour ...</p>
        )
    }
    if(error){
        return(
            <p>Erreur {error}</p>
        )
    }
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
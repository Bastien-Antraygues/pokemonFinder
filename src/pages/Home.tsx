import { useEffect, useState } from "react"
import { PokemonCard } from "../components/PokemonCard"
import api from "../services/api"
import type { Pokemon } from "../interfaces/Pokemon"

export function Home() {
    const [offset, setOffset] = useState(0)
    const [data, setData] = useState<Pokemon[]>([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState("")


    useEffect(() => {
        setLoading(true)
        api.getPokemons().then(page => {
            setData(page)
            setOffset(getRandomInt(page.length - 20))
        }).catch((err)=>setError(err))
        .finally(()=> {
            console.log(data)
            setLoading(false)})
    }, [])
    
    useEffect(() => {
        console.log("Data mise à jour :", data)
    }, [data])

    if(loading){
        return(
            <p>Chargement En cours ...</p>
        )
    }
    if(error){
        return(
            <p>Erreur: {error}</p>
        )
    }
    if (data.length>0) {
        return (
            <>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {
                        data.slice(offset, offset + 20).map((pokemon) => {
                            return <PokemonCard pokemon={pokemon} key={pokemon.name} />
                        })
                    }
                </div>
            </>
        )
    }
    return (
        <>
            <h1>Page d'Accueil</h1>
            <p>pas de data</p>
        </>
    )
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}
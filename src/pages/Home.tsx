import { useEffect, useState } from "react"
import { PokemonCard } from "../components/PokemonCard"
import type { Page } from "../interfaces/Page"
import api from "../services/api"

export function Home() {
    const offset = getRandomInt(1299)
    const [data, setData] = useState<Page>()
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState("")

    useEffect(() => {
        setLoading(true)
        api.getPokemons().then(page => {
            setData(page)
        }).catch((err)=>setError(err))
        .finally(()=> setLoading(false))
    }, [])
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
    if (data) {
        return (
            <>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {
                        data.results.slice(offset, offset + 20).map((page) => {
                            return <PokemonCard url={page.url} key={page.name} />
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
import { useNavigate, useParams } from "react-router-dom"
import type { Pokemon } from "../interfaces/Pokemon"
import { Type } from "../components/Type"
import { AbilityComponent } from "../components/AbilityComponent"
import { PokemonStats } from "../components/PokemonStats"
import { upperName } from "../components/FunctionSpecial"
import { useEffect, useState } from "react"
import api from "../services/api"

export function PokemonDetail() {
    const params = useParams()
    const [pokemon,setPokemon] = useState<Pokemon>()
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState("")
    useEffect(()=>{
        setLoading(true)
        if(params.id){
            api.getPokemonById(params.id)
            .then((poke)=> setPokemon(poke))
            .catch((err)=> setError(err))
            .finally(()=> setLoading(false))
        }
        
    },[])
    const navigate = useNavigate()
    if(loading){
        return (
            <p>Chargement En cours...</p>
        )
    }
    if(error){
        return <p>Erreur {error}</p>
    }
    if (pokemon) {
        
        return (
            <>
                <div className="flex justify-between md:w-[80%]  lg:w-[60%] mx-auto">
                    <button onClick={()=>navigate(-1)}>{"<-"} Previus</button>
                    
                </div>
                <div className="mx-auto bg-pink-3 md:w-[80%] lg:w-[60%] p-10 md:rounded-2xl mt-5">
                    <div className="grid md:grid-cols-2 ">
                        <div className="text-center ">
                            <h1 className="font-bold text-lg">{upperName(pokemon.name)} </h1>
                            <img className="mx-auto" src={pokemon.sprites.front_default} alt="" />
                            <div className="flex w-[225px] mx-auto">{pokemon.types.map((element) => {
                                return <Type key={element.type.name} name={element.type.name} />
                            })}</div>
                            <p className="mt-2">N°{pokemon.id}  </p>
                        </div>
                        <div>
                            <PokemonStats stats={pokemon.stats} />
                        </div>

                    </div>
                    <div className="mt-2">
                        <h2 className="font-semibold text-lg">Talent : </h2>
                        {
                            pokemon.abilities.map((ability) => {
                                return <AbilityComponent key={ability.ability.name} url={ability.ability.url} />
                            })
                        }
                    </div>

                </div>
            </>

        )
    } else {
        return (
            <>
                <h1>Pokemon non trouve</h1>
            </>
        )
    }

}
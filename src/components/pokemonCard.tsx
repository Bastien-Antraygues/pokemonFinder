import React, { useEffect, useState } from "react"
import { useFetch } from "../customHooks/customHooks"
import type { Pokemon } from "../interfaces/Pokemon"
import { Type } from "./Type"
import { useFavorites } from "./FavoritesProvider"
import { upperName } from "./FunctionSpecial"
import { useNavigate } from "react-router-dom"

export const PokemonCard = React.memo(function (props: { url: string }) {
    const data: Pokemon | null = useFetch<Pokemon>(props.url)

    const { favorite, setFavorite } = useFavorites()
    const isFavorite = favorite.includes(props.url)
    const navigate = useNavigate()

    function toggleFavorite(){
        if(isFavorite){
            setFavorite(favorite.filter(item=>item!==props.url))
        }else{
            setFavorite([...favorite,props.url])
        }
    }

    if (!data) {
        return (
            <>

                <div className="m-4 p-4 border-2  text-center w-60 mx-auto border-pink-6 bg-pink-3 rounded-xl">
                <h1 className="mt-8">Pokemon not find</h1>

            </div>

            </>
        )
    }


    return (
        <>

            <div className="m-4 p-4 border-2  text-center w-60 mx-auto border-pink-6 bg-pink-3 rounded-xl">
                <div className="text-right">
                    <button
                        className=""
                        onClick={toggleFavorite}
                        aria-label="Ajouter ou retirer des favoris"
                    >
                        {isFavorite ? "❤️" : "🤍"}
                    </button>
                </div>
                <div onClick={() => navigate("/detail/" + data.id)} className=" p-2 border-pink-8 rounded-lg hover:shadow-2xl">
                    <h1 className="">{upperName(data.name)}</h1>

                    <img className="mx-auto" src={data.sprites.front_default} alt="" />
                    <p>N° {data.id}</p>
                    <div className="flex">{data.types.map((element) => {
                        return <Type key={element.type.name} name={element.type.name} />
                    })}</div>
                </div>

            </div>
        </>
    )


})


import React, { useEffect, useState } from "react"
import type { Pokemon } from "../interfaces/Pokemon"
import { Type } from "./Type"
import { useFavorites } from "../providers/FavoritesProvider"
import { upperName } from "./FunctionSpecial"
import { useNavigate } from "react-router-dom"
import api from "../services/api"
import { useAuth } from "../providers/AuthProvider"

export const PokemonCard = React.memo(function ({ pokemon }: { pokemon: Pokemon }) {
    const { user } = useAuth()
    const { favorites, favoriteAdd } = useFavorites()
    const isFavorite = favorites?.pokemonFavorites.some(f => f.pokemon.name == pokemon.name)
    const navigate = useNavigate()

    function toggleFavorite() {
        if (favorites){
            favoriteAdd(pokemon)
        }/*
        if (isFavorite) {
            setFavorite(favorite.filter(item => item.name !== pokemon.name))
        } else {
            setFavorite([...favorite, pokemon])
        }*/
    }

    if (!pokemon) {
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
                    {user && (
                        <>
                            <button
                                className=""
                                onClick={toggleFavorite}
                                aria-label="Ajouter ou retirer des favoris"
                            >
                                {isFavorite ? "❤️" : "🤍"}
                            </button>
                        </>

                    )}

                </div>
                <div onClick={() => navigate("/detail/" + pokemon.name)} className=" p-2 border-pink-8 rounded-lg hover:shadow-2xl">
                    <h1 className="">{upperName(pokemon.name)}</h1>

                    <img className="mx-auto" src={pokemon.sprites.front_default} alt="" />
                    <p>N° {pokemon.order}</p>
                    <div className="flex">{pokemon.types.map((element) => {
                        return element?.type?.name ? <Type key={element.type.name} name={element.type.name} /> : null
                    })}</div>
                </div>

            </div>
        </>
    )


})


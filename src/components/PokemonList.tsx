import { useState } from "react";
import type { PokeSize } from "../interfaces/PokeSize";
import { PokemonCard } from "./PokemonCard";
// max page 66
export function PokemonList(props: { pokeList: { name: string, url: string }[],pokeSize:PokeSize }) {
    
    return (
        <>
            <div className="grid lg:grid-cols-2 xl:grid-cols-4">
                {
                    props.pokeList.slice(props.pokeSize.pStart, props.pokeSize.pEnd).map((result) => {
                        const id = result.url.split("/").filter(Boolean).pop();
                        return <PokemonCard key={id} url={result.url} />
                    })
                }
            </div>
        </>

    )

    
}

import { useFavorites } from "../components/FavoritesProvider"
import { PokemonCard } from "../components/pokemonCard";

export function Favorites() {
    const { favorite } = useFavorites()
    return (
        <>
            
            <div className="grid lg:grid-cols-2 xl:grid-cols-4">
                {
                    favorite.slice(0, 20).map((result) => {
                        const id = result.split("/").filter(Boolean).pop();
                        return <PokemonCard key={id} url={result} />
                    })
                }
            </div>
        </>
    )
}
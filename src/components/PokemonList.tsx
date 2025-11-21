import { useEffect, useState } from "react";
import type { PokeSize } from "../interfaces/PokeSize";
import { PokemonCard } from "./PokemonCard";
import { PageableComponent } from "./PageableComponent";
// max page 66
export function PokemonList(props: { pokeList: { name: string, url: string }[], isPageable:boolean }) {

    const [page, setPage] = useState<number>(1)
    const [pageable, setPageable] = useState<{ pStart: number, pEnd: number }>(getPokeSize(page))

    useEffect(()=>{
        setPage(1)
        setPageable(getPokeSize(1))
    },[props.pokeList])

    return (
        <>
        {
            props.isPageable ?
            <ul className="flex justify-center">
                <li>
                    {
                        getPage(page).map((pageNumber) => {
                            return <PageableComponent key={pageNumber} pageNumber={pageNumber} isPage={page == pageNumber}
                                onSelectPage={onSelectPage}
                            />
                        })
                    }
                </li>

            </ul> : <></>
        }
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    props.pokeList.slice(pageable.pStart, pageable.pEnd).map((result) => {
                        const id = result.url.split("/").filter(Boolean).pop();
                        return <PokemonCard key={id} url={result.url} />
                    })
                }
            </div>
        </>

    )

    function onSelectPage(sPage: number) {
        setPage(sPage)
        setPageable(getPokeSize(sPage))
    }
}

function getPage(pageNumber: number) {
    let pageStart: number = pageNumber
    let pageEnd: number = pageNumber
    if (pageNumber < 66) {
        for (let i = pageNumber; i < pageNumber + 3; i++) {
            pageEnd = i
            if (i == 66) {
                break
            }
        }
    }
    if (pageNumber > 1) {
        for (let i = pageNumber; i > pageNumber - 3; i--) {
            pageStart = i
            if (i == 1) {
                break
            }
        }
    }
    let tab: number[] = []
    for (let i = pageStart; i <= pageEnd; i++) {
        tab.push(i)
    }
    if (pageStart > 1) {
        tab = [1].concat(tab)
    }
    if (pageEnd < 66) {
        tab.push(66)
    }
    return tab
}

export function getPokeSize(pageNumber: number): PokeSize {
    let pEnd = pageNumber * 20
    let pStart = pEnd - 20
    return { pStart: pStart, pEnd: pEnd }
}
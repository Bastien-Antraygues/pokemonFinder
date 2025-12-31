import type { Ability } from "./Ability"
import type { Types } from "./Types"

export interface Pokemon {
    id: number,
    name: string,
    abilities: {
        ability: Ability
    }[],
    sprites: {
        front_default: string,
        back_default: string
    },
    stats: {
        base_stat: number,
        effort: number,
        stat: {
            name: string,
            url: string
        }
    }[],
    types: [{
        type: {
            name: string,
            url: string,
        }
    }],
    order: number
}
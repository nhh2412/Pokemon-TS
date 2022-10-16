export interface Pokemon {
    id: number
    name: string
    sprites: {
        front_default: string
    }
}

export interface PokemonDetail extends Pokemon {
    abilities?: {
        ability: string
        name: string
    }[]
}

export interface Detail {
    id: number
    isOpened: boolean
}

export interface pokemonList {
    name: string
    url: string
}

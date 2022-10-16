import React from 'react'
import { PokemonDetail } from '../interface'
import PokemonList from './PokemonList'
import './pokemon.css'
import { Detail } from '../interface'

interface Props {
    pokemonList: PokemonDetail[]
    viewDetail: Detail
    setDetail: React.Dispatch<React.SetStateAction<Detail>>
}

function PokemonCollection(props: Props) {
    const { pokemonList, viewDetail, setDetail } = props
    const selectPokemon = (id: number) => {
        if (!viewDetail.isOpened) {
            setDetail({
                id: id,
                isOpened: true,
            })
        }
    }
    return (
        <section className={viewDetail.isOpened ? 'collection-container-active' : 'collection-container'}>
            {viewDetail.isOpened ? <div className="overlay"></div> : <div className=""></div>}
            {pokemonList.map((pokemon) => {
                return (
                    <div onClick={() => selectPokemon(pokemon.id)}>
                        <PokemonList
                            viewDetail={viewDetail}
                            setDetail={setDetail}
                            key={pokemon.id}
                            name={pokemon.name}
                            id={pokemon.id}
                            abilities={pokemon.abilities}
                            image={pokemon.sprites.front_default}
                        />
                    </div>
                )
            })}
        </section>
    )
}

export default PokemonCollection

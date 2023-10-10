import React, { FC } from 'react'
import { Card } from '@nextui-org/react'

interface FavoriteCardPokemonProps { 
  pokemonId: number
}

const FavoriteCardPokemon: FC<FavoriteCardPokemonProps> = ({ pokemonId}) => {
  return (
    <Card
      hoverable
      clickable
      css={ {
        padding: '10px',
        backgroundColor: '#000',
        border: '1px solid #a39d9d'
      } }
    >
      <Card.Image
        src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemonId }.svg` }
        width={ '100%' }
        height={ 140 }
        alt=''
      >
      </Card.Image>
    </Card>
  )
}

export default FavoriteCardPokemon
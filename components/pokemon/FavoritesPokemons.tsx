import React, { FC } from 'react'
import { Grid } from '@nextui-org/react'
import FavoriteCardPokemon from './FavoriteCardPokemon'


interface FavoritesPokemonsProps {
  pokemons: number[]
}

const FavoritesPokemons: FC<FavoritesPokemonsProps> = ({ pokemons }) => {
  return (
    <Grid.Container gap={ 2 } direction='row' justify='flex-start'>
      {
        pokemons.map(id => (
          <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={ id }>
            <FavoriteCardPokemon pokemonId={ id } />
          </Grid>
        ))
      }
    </Grid.Container>
  )
}

export default FavoritesPokemons
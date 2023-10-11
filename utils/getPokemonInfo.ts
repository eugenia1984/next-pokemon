import { pokeApi } from '../api'
import { Pokemon } from '../interfaces'
import { PokemonByName } from '../interfaces/pokemon-by-name'

export const getPokemonInfo = async ( name: string): Promise<PokemonByName> => { 
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ name }`)

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites
  }
}
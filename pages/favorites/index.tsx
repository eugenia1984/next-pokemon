import React, { useState, useEffect } from 'react'
import { NextPage } from 'next'
import { Text } from '@nextui-org/react'
import { Layout } from '../../components/layouts'
import NoFavorites from '../../components/ui/NoFavorites'
import { localFavorites } from '../../utils'

interface FavoritesPagePops { }

const FavoritesPage: NextPage<FavoritesPagePops> = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons())
  }, [])

  return (
    <Layout title='Pokemons - Favoritos'>
      <Text h2 css={ { textAlign: 'center' } }>
        Favoritos
      </Text>
      <NoFavorites />
    </Layout>
  )
}
export default FavoritesPage
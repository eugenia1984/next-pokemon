import { NextPage } from 'next'
import { Layout } from '../../components/layouts'

interface FavoritesPagePops {}

const FavoritesPage: NextPage<FavoritesPagePops> = () => {

  return (
    <Layout title='Pokemons - Favoritos'>
      <h2>Favoritos</h2>
    </Layout>
  )
}
export default FavoritesPage
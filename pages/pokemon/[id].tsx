import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { Layout } from '../../components/layouts'
import { pokeApi } from '../../api'
import { Pokemon } from '../../interfaces'
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react'

interface PokemonPagePops {
  pokemon: Pokemon
}

const PokemonPage: NextPage<PokemonPagePops> = ({ pokemon }) => {
  //console.log(pokemon)
  return (
    <Layout title={ pokemon.name }>
      <Grid.Container
        css={ { marginTop: '12px' } }
        gap={ 2 }
      >
        <Grid xs={ 12 } sm={ 4 }>
          <Card
            hoverable
            css={ {
              padding: '30px',
              border: '1px solid #fff3',
              background: '#444444'
            } }
          >
            <Card.Body>
              <Card.Image
                src={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png' }
                alt={ pokemon.name }
                width='100%'
                height='200px'
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={ 12 } sm={ 8 }>
          <Card
            hoverable
            css={ {
              border: '1px solid #fff3',
              background: '#444444',
              padding: '8px'
            } }
          >
            <Card.Header
              css={ {
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              } }
            >
              <Text
                h2
                transform='capitalize'
              >
                { pokemon.name }
              </Text>
              <Button
                color='gradient'
                ghost
              >
                Guardar en favoritos
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={ 30 }>Sprites:</Text>
              <Container display='flex' direction='row'>
                <Image
                  src={ pokemon.sprites.front_default }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image
                  src={ pokemon.sprites.back_default }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image
                  src={ pokemon.sprites.front_shiny }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image
                  src={ pokemon.sprites.back_shiny }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151: string[] = [...Array(151)].map((value, index) => `${ index + 1 }`)

  return {
    paths: pokemons151.map(id => ({
      params: { id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ id }`)

  return {
    props: {
      pokemon: data
    }
  }
}

export default PokemonPage 
import React, { useState } from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react'
import confetti from 'canvas-confetti'
import { Layout } from '../../components/layouts'
import { pokeApi } from '../../api'
import { Pokemon, PokemonListResponse } from '../../interfaces'
import { localFavorites } from '../../utils'
import PokemonCardImg from '../../components/pokemon/PokemonCardImg'
import PokemonCardTextTitle from '../../components/pokemon/PokemonCardTextTitle'
interface PokemonByNamePagePops {
  pokemon: Pokemon
}

const PokemonByNamePage: NextPage<PokemonByNamePagePops> = ({ pokemon }) => {
  console.log('Pokemon ', pokemon)
  const [isInFavorites, setIsInFavorites] = useState<boolean>(localFavorites.existInFavorites(pokemon.id))

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id)
    setIsInFavorites(!isInFavorites)

    if (isInFavorites) return

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      }
    })
  }

  return (
    <Layout title={ pokemon.name }>
      <Grid.Container
        css={ { marginTop: '12px' } }
        gap={ 2 }
      >
        <PokemonCardImg
          pokemonName={ pokemon.name }
          imgSrc={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png' }
        />
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
                ghost={ !isInFavorites }
                onClick={ onToggleFavorite }
              >
                <span style={ { textTransform: 'uppercase' } }>
                  { isInFavorites ? 'En favoritos' : 'Guardar en favoritos' }
                </span>
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
        <Grid xs={ 12 } sm={ 4 }>
          <Card
            hoverable
            css={ {
              border: '1px solid #fff3',
              background: '#444444',
              padding: '8px'
            } }
          >
            <Text h2>Types</Text>
            <Button.Group color="gradient" ghost>
              { pokemon.types.map(el => <Button key={ el.type.name }>{ el.type.name }</Button>) }
            </Button.Group>
          </Card>
        </Grid>
        <Grid xs={ 12 } sm={ 4 }>
          <Card
            hoverable
            css={ {
              border: '1px solid #fff3',
              background: '#444444',
              padding: '8px'
            } }
          >
            <Text h2>Abilities</Text>
            <Grid
              css={ {
                display: 'flex',
                gap: '12px',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignContent: 'center',
                justifyContent: 'flex-start',
                alignItems: 'center',
                padding: '12px 0px'
              } }
            >
              { pokemon.abilities.map(el => (
                <Button
                  key={ el.ability.name }
                  color="gradient"
                  ghost
                  css={ {
                    maxWidth: '180px'
                  } }
                >
                  { el.ability.name }
                </Button>
              )) }
            </Grid>
          </Card>
        </Grid>
        <Grid xs={ 12 } sm={ 4 }>
          <Card
            hoverable
            css={ {
              border: '1px solid #fff3',
              background: '#444444',
              padding: '8px'
            } }
          >
            <Text h3>Stats</Text>
            <Grid
              display='flex'
              alignItems='center'
              aligContent='center'
              justifyContent='flex-start'
              flexDirection='column'
              css={ {padding: '12px 0px'} }
            >
              { pokemon.stats.map(stat => (
                <span key={ stat.stat.name } style={ { margin: '4px' } }>
                  { stat.stat.name }
                </span>)
              ) }
            </Grid>
          </Card>
        </Grid>
        <PokemonCardTextTitle
          title='Height'
          text={ pokemon.height }
        />
        <PokemonCardTextTitle
          title='Weight'
          text={ pokemon.weight }
        />
        <PokemonCardTextTitle
          title='Experience'
          text={ pokemon.base_experience }
        />       
      </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  const pokemonsNames: string[] = data.results.map(pokemon => pokemon.name)

  return {
    paths: pokemonsNames.map(name => ({
      params: { name }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string }
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ name }`)

  return {
    props: {
      pokemon: data
    }
  }
}

export default PokemonByNamePage 
import { Card, Grid, Text } from '@nextui-org/react'
import React, { FC } from 'react'

interface PokemonCardTextTitleProps {
  title: string
  text: number
}

const PokemonCardTextTitle: FC<PokemonCardTextTitleProps> = ({ 
  title,
  text
}) => {
  return (
    <Grid xs={ 6 } sm={ 4 }>
      <Card
        hoverable
        css={ {
          border: '1px solid #fff3',
          background: '#444444',
          padding: '1px'
        } }
      >
        <Text h4>{ title}</Text>
        <Text weight='bold'>
          { text.toString()}
        </Text>
      </Card>
    </Grid>
  )
}

export default PokemonCardTextTitle
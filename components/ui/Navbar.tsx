import { useTheme, Image, Spacer, Text} from '@nextui-org/react'
import React, { FC } from 'react'

const Navbar: FC = () => {
  const { theme } = useTheme()

  return (
    <div style={ {
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 20px',
      backgroundColor: theme?.colors.gray800.value
    } }>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="icono de la aplicación"
        width={ 70 }
        height={ 70}
      />
      <Text
        color='white'
        h1
        style={ {
          fontSize: 'var(--nextui-fontSizes-lg)',
          lineHeight: 'var(--nextui-lineHeight-lg)'
        } }>
        <span>P</span>
        <span style={ { fontSize: 'var(--nextui-fontSizes-md)' } }>okemon</span>
      </Text>
      <Spacer css={ {flex: 1} } />
      <Text color='white'>Favoritos</Text>
    </div >
  )
}

export default Navbar
import React, { FC, ReactNode } from 'react'
import Head from 'next/head'
import Navbar  from '../ui/Navbar'
import { useTheme } from '@nextui-org/react'

interface LayoutProps {
  children: ReactNode
  title?: string
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  const { theme } = useTheme()

  return (
    <>
      <Head>
        <title>{ title || 'Pokemon App' }</title>
        <meta name="author" content="María Eugenia Costa" />
        <meta name="description" content={ `Información sobre el Pokemon: ${ title }` } />
        <meta name="keywords" content={ `${ title }, pokemon, pokedex` } />
      </Head>
      <Navbar />
      <main style={ {
        padding: '2rem 1rem',
        backgroundColor: theme?.colors.gray900.value,
        minHeight: '100vh'
      }}>
        { children }
      </main>
    </>
  )
}

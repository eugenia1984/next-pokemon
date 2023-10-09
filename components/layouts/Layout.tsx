import React, { FC, ReactNode } from 'react'
import Head from 'next/head'

interface LayoutProps {
  children: ReactNode
  title?: string
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{ title || 'Pokemon App' }</title>
        <meta name="author" content="María Eugenia Costa" />
        <meta name="description" content={ `Información sobre el Pokemon: ${ title }` } />
        <meta name="keywords" content={ `${ title }, pokemon, pokedex` } />
      </Head>
      { /* Navbar*/ }
      <main>
        { children }
      </main>
    </>
  )
}

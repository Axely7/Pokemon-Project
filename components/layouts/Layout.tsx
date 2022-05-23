import React, { FC, PropsWithChildren } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui';

interface Props{
  children: any;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
          <title>{ title || 'Pokemon App' }</title>
          <meta name='author' content='Axel Jimenez'/>
          <meta name='description' content='Informacion sobre el pokemón XXXXX'/>
          <meta name='keywords' content='XXXX, pokemon, pokedex'/>
      </Head>

      <Navbar/>

      <main style={{
        padding: '0px 20px'
      }}>
        { children }
      </main>

    </>
  )
}


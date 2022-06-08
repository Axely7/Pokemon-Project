import React, { FC, PropsWithChildren } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui';
import { useRouter } from 'next/router';

interface Props{
  children: any;
  title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {


  return (
    <>
      <Head>
          <title>{ title || 'Pokemon App' }</title>
          <meta name='author' content='Axel Jimenez'/>
          <meta name='description' content={`Informacion sobre el pokemón ${title}`}/>
          <meta name='keywords' content={`${ title }, pokemon, pokedex`}/>

          <meta property="og:title" content={ `Información sobre ${ title }` }/>
          <meta property="og:description" content={ `Esta es la pagina sobre ${ title }` }/>
          <meta property="og:image" content={`${origin}/img/banner.png`} />

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


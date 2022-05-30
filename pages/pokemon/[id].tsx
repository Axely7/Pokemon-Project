import { GetStaticProps, NextPage, GetStaticPaths  } from 'next';
import React, { useEffect } from 'react'
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts'
import { Pokemon } from '../../interfaces';



interface Props{
  pokemon: Pokemon;
}


const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  return (
    <Layout title='Algun Pokemon'>
        <h1>{ pokemon.name }</h1>
    </Layout>
  )
};


// Esta parte se realiza del lado del servidor y se generan de manera estática una vez que se realiza el build.

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemon151 = [...Array(151)].map( (value, index) => `${ index + 1 }` );
  
  
  return {
    // paths: [
    //   {
    //     params: {
    //       id: '1'
    //     }
    //   },
    //   {
    //     params: {
    //       id: '2'
    //     }
    //   },
    //   {
    //     params: {
    //       id: '3'
    //     }
    //   },
    // ],
    paths: pokemon151.map( id => ({
      params: { id: id }
    })),
    fallback: false
  }
}



export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string };

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ id }`);

  return {
    props: {
      pokemon: data
    }
  }
}


export default PokemonPage;

import { NextPage } from 'next';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Layout } from '../../components/layouts'


interface Props{
  id: string;
  name: string;
}


const PokemonPage: NextPage<Props> = ({ id, name }) => {

  const router = useRouter();
  console.log(router.query);

  return (
    <Layout title='Algun Pokemon'>
        <h1>{ id } - { name }</h1>
    </Layout>
  )
}

export default PokemonPage
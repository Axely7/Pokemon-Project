
import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui'
import { localFavorites } from '../../utils'

const index = () => {

  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritePokemons( localFavorites.pokemons() );
  }, [])
  


  return (
    <Layout title='Pokemons - Favorite'>
      <NoFavorites />
    </Layout>
  )
}

export default index
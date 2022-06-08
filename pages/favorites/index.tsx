
import { Card, Grid } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import { FavoritePokemons } from '../../components/pokemon'
import { NoFavorites } from '../../components/ui'
import { localFavorites } from '../../utils'

const FavoritesPage = () => {

  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritePokemons( localFavorites.pokemons() );
    console.log(favoritePokemons);
  }, [])
  
  

  return (
    <>
    <Layout title='Pokemons - Favorite'>
      {
        favoritePokemons.length === 0
          ? ( <NoFavorites /> )
          : (
            <FavoritePokemons pokemons={ favoritePokemons }/>
          )
      }

    </Layout>
    </>
  
  )
}

export default FavoritesPage;
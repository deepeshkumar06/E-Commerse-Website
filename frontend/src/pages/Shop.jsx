import React from 'react'
import { Hero } from '../components/hero/Hero'
import { Popular } from '../components/popular/Popular'
import { Offer } from '../components/offer/Offer'
import { NewCollections } from '../components/newcollections/NewCollections'

export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollections/>
    </div>
  )
}

import React from 'react'
import HeroSection from '../components/HeroSection'
import CatalogSection from '../components/CatalogSection'
import OverviewSection from '../components/OverviewSection'
import OfferSection from '../components/OfferSection'
import ReviewSection from '../components/ReviewSection'

export default function Home() {
  return (
    <>
        <HeroSection/>
        <CatalogSection/>
        <OverviewSection/>
        <OfferSection/>
        <ReviewSection/>
    </>
    
  )
}
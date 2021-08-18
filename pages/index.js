import Head from 'next/head'
import Image from 'next/image'
import Downloads from '../components/Downloads'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
   <>
    <Header />
    <Hero />
    <Features />
    <Downloads />
    <Footer />
   </>
  )
}

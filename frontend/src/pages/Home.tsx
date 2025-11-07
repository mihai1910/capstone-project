import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Specials from '../components/Specials/Specials'
import Reviews from '../components/Reviews/Reviews'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import { JSX } from 'react'

export default function Home(): JSX.Element{
    return(
        <main>
            <Navbar />
            <Hero />
            <Specials />
            <Reviews />
            <About />
            <Footer />
        </main>
    )
}
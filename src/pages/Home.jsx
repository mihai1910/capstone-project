import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Specials from '../components/Specials/Specials'
import Reviews from '../components/CustomersSay/Reviews'

export default function Home(){
    return(
        <main>
            <Navbar />
            <Hero />
            <Specials />
            <Reviews />
        </main>
    )
}
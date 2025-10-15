import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Specials from '../components/Specials/Specials'

export default function Home(){
    return(
        <main>
            <Navbar />
            <Hero />
            <Specials />
        </main>
    )
}
import { HeroImage } from "./HeroImage"
import { HeroText } from "./HeroText"

export default function Hero(){
    return(
        <section className="flex bg-green-primary justify-center gap-2 xl:gap-30 px-2" >
        <HeroText/>
        <HeroImage/>
        </section>
    )
}
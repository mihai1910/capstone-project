import { HeroImage } from "./HeroImage"
import { HeroText } from "./HeroText"

export default function Hero(){
    return(
        <section className="flex justify-center w-full bg-green-primary  gap-2 xl:gap-30 px-2 " >
        <HeroText/>
        <HeroImage/>
        </section>
    )
}
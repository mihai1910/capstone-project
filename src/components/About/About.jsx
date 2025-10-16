import { AboutImage } from "./AboutImage"
import { AboutText } from "./AboutText"

export default function About(){
    return(
        <section className='flex justify-center items-center bg-white-primary xl:gap-30 px-8 lg:px-20 py-10 lg:py-30'>
            <AboutText />
            <AboutImage />
        </section>
    )
}
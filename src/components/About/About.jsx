import { AboutImage } from "./AboutImage"
import { AboutText } from "./AboutText"

export default function About(){
    return(
        <section className='flex justify-center items-center w-full bg-white-primary  gap-2 xl:gap-30 px-20 py-30'>
            <AboutText />
            <AboutImage />
        </section>
    )
}
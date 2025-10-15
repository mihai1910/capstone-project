import { Button } from "../reusables/Button"
import {SpecialsCard} from './SpecialsCard'

export default function Specials(){
    return(
        <section className="bg-white-primary flex flex-col justify-items-start pt-30 px-70 pb-20">
            <div className="flex flex-row justify-between items-center">
            <h1 className="text-black">This Week's Specials</h1>
            <Button className='m-0'>Order Online</Button>
            </div>

            <div className="flex gap-8 justify-center">
            <SpecialsCard />
            </div>

        </section>
    )
}
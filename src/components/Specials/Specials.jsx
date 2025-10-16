import { Button } from "../reusables/Button"
import {SpecialsCard} from './SpecialsCard'
import greekSalad from '../../assets/greekSalad.svg'
import bruchetta from '../../assets/bruchetta.svg'
import lemonDessert from '../../assets/lemon-dessert.svg'

export default function Specials(){
    return(
        <section className="bg-white-primary flex flex-col pt-10 md:pt-18 lg:pt-30 md:px-45 lg:px-70 pb-10 md:pb-15 lg:pb-20">
            <div className="flex justify-center items-center gap-20 lg:gap-150 ">
            <h1 className="text-black text-mobile-xl lg:text-2xl">This Week's Specials</h1>
            <Button className='m-0'>Order Online</Button>
            </div>

            <div className="flex lg:gap-8 justify-around">
            <SpecialsCard image={greekSalad} dishName='Greek salad' price='12.99' description={'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. '}/>
            <SpecialsCard image={bruchetta} dishName='Bruchetta' price='5.99' description='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'/>
            <SpecialsCard image={lemonDessert} dishName='Lemon Dessert' price='5.00' description='This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'/>
            </div>

        </section>
    )
}
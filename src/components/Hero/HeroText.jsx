import { Button } from "../reusables/Button"
import { Link } from "react-router-dom"

export const HeroText = () => {
    return(
        <article className="flex-col wrap w-100">
        <h1 className="m-0 p-0 mt-2 md:mt-10 translate-y-4">Little Lemon</h1>
        <h2 className="mb-2 md:mb-5">Chicago</h2>
        <p className="mb-5 md:mb-15">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link to='/reservations'><Button>Reserve a Table</Button></Link>
        </article>
    )
}
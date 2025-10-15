import { Button } from "../reusables/Button"

export const HeroText = () => {
    return(
        <article className="flex-col wrap">
        <h1 className="m-0 p-0 mt-2 md:mt-10 translate-y-4">Little Lemon</h1>
        <h2 className="mb-2 md:mb-5">Chicago</h2>
        <p className="mb-5 md:mb-20">We are a family owned Mediterranean <br/> restaurant, focused on traditional recipes <br/> served with a modern twist.</p>
        <Button>Reserve a Table</Button>
        </article>
    )
}
import { ReviewsCard } from "./ReviewsCard"
import { reviews } from "./ReviewsData"

export default function Reviews() {
    return(
        <section className="flex flex-col items-center bg-green-primary pb-4 lg:pb-8">
            <h1 className="text-white-primary">Our customers love us!</h1>

            <div className="flex justify-center">
            {reviews.map((review, i) => (
                <div key={i} className={i === 3 ? "hidden lg:block" : "block"}>
            <ReviewsCard 
                key={i}
                title={review.title} 
                description={review.description}
                img={review.img}
                name={review.name}
                date={review.date}
            />
            </div>
            ))}
            </div>
        </section>
    )
}
import { ReviewsCard } from "./ReviewsCard"

export const reviews = [
  {
    title: "Amazing food and atmosphere!",
    description: "The Greek salad was super fresh and the lemon dressing was perfect. Definitely coming back!",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Elena Popescu",
    date: "Aug 22, 2025",
  },
  {
    title: "Best dining experience around!",
    description: "Everything from the service to the presentation was top-notch. Highly recommend the seafood pasta.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Andrei Ionescu",
    date: "Sep 3, 2025",
  },
  {
    title: "Cozy and welcoming place!",
    description: "Loved the interior design and the warm vibe. The staff made us feel right at home.",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Daria Marin",
    date: "Sep 27, 2025",
  },
  {
    title: "Incredible and unique flavors!",
    description: "Every bite felt authentic. You can tell they use fresh ingredients — 10/10!",
    img: "https://randomuser.me/api/portraits/men/23.jpg",
    name: "Mihai Petrescu",
    date: "Oct 10, 2025",
  },
]

export default function Reviews() {
    return(
        <section className="flex flex-col items-center bg-green-primary pb-4">
            <h1 className="text-white-primary">Our customers love us!</h1>

            <div className="flex justify-center">
            {reviews.map((review, i) => (
                <div key={i} className={i === 3 ? "hidden sm:block" : "block"}>
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
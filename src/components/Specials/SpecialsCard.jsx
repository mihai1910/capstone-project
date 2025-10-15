import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SpecialsCard = (props) => {
    return (
        <article className="flex flex-col w-30 lg:w-100 aspect-[3/4] shadow-lg bg-gray-specials pb-4">

            <img src={props.image} className='w-full'/>

            <div className='flex justify-between max-md:px-2 lg:px-8 lg:py-4'>
            <h5 className="text-black font-bold font-serif text-mobile-sm lg:text-md">{props.dishName}</h5>
            <p className="text-yellow-600 text-shadow-xl text-mobile-sm md:text-md">${props.price}</p>
            </div>

            <p className="text-black px-2 md:px-8 text-[9px] lg:text-md py-2 lg:my-4">{props.description}</p>

            <div className='mt-auto flex items-center gap-2 px-8'>
            <h4 className='font-bold font-karla text-[9px] lg:text-sm'>Order Delivery</h4>
            <FontAwesomeIcon icon={faAddressCard} />
            </div>

        </article>
    )
}
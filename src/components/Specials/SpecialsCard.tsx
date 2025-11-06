import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

    interface SpecialsCardProps {
        image: string;
        dishName: string;
        price: string;
        description: string;
    }

export const SpecialsCard :React.FC<SpecialsCardProps> = ({image, dishName, price, description}) => {

    return (
        <article className="flex flex-col w-30 lg:w-100 shadow-lg bg-gray-specials pb-4">

            <img src={image} className='w-full'/>

            <div className='flex justify-between max-md:px-2 lg:px-8 lg:py-4'>
            <h5 className="text-black font-bold font-serif text-[0.625rem] lg:text-md">{dishName}</h5>
            <p className="text-yellow-600 text-shadow-xl text-[0.625rem] md:text-md">${price}</p>
            </div>

            <p className="text-black px-2 md:px-8 text-[0.625rem] lg:text-md py-2 lg:my-4">{description}</p>

            <div className='mt-auto flex items-center justify-start gap-0.5 pl-2'>
            <h4 className='font-bold font-karla text-[0.625rem] lg:text-sm'>Order Delivery</h4>
            <FontAwesomeIcon icon={faAddressCard} />
            </div>

        </article>
    )
}
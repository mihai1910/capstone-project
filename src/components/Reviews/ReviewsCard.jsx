import rating from '../../assets/rating.svg'

export const ReviewsCard = (props) => {
    return(
        <article className="flex flex-col bg-white-primary w-30 lg:w-80 h-full px-2 lg:px-6 py-1 lg:py-4 mx-1.5 lg:mx-2 rounded-lg">
            <img src={rating} className='w-20 lg:w-29 h-auto'/>
            <h2 className='text-black mt-2 mb-0 lg:mt-4 lg:mb-1 text-mobile-lg/3 lg:text-[2.125rem]/7 '>{props.title}</h2>
            <h3 className='text-[8px] lg:text-md mb-2 lg:mb-4'>{props.description}</h3>
            <div className='flex mt-auto'>
                <img src={props.img} className='w-8 h-8 md:w-15 md:h-15 rounded-full'></img>
                <div className='flex flex-col ml-2 md:ml-4 mt-0.5 lg:mt-1'>
                    <h3 className='text-[8px] lg:text-md/3'>{props.name}</h3>
                    <h4 className='text-[8px] lg:text-md opacity-40'>{props.date}</h4>
                </div>
            </div>
        </article>
    )
}
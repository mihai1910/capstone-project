import about1 from '../../assets/about1.svg'
import about2 from '../../assets/about2.svg'

export const AboutImage = () => {
    return(
    <div className='flex self-start'>
        <img src={about1} className='w-full h-full rounded-2xl shadow-md shadow-gray-400 translate-y-30 translate-x-40' />
        <img src={about2} className='w-full h-auto rounded-2xl mb-20'/>
    </div>
    )
}
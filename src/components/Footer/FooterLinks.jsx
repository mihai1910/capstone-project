import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { faFacebook, faXTwitter, faInstagram, faGooglePlay } from "@fortawesome/free-brands-svg-icons"

export const FooterLinks = () => {
    return(
    <nav className="text-white-primary flex lg:gap-10">
        <div className="flex flex-col items-center">
            <h3 className="text-[10px] lg:text-[20px] mb-2 lg:mb-10 ml-1 lg:ml-4">Doormat Navigation</h3>
            <ul className="flex flex-col items-center">
                <li className='navlinks text-[10px] lg:text-[20px] py-0.5'><Link to='/'>Home</Link></li>
                <li className='navlinks text-[10px] lg:text-[20px] py-0.5'><Link to='/about'>About</Link></li>
                <li className='navlinks text-[10px] lg:text-[20px] py-0.5'><Link to='/menu'>Menu</Link></li>
                <li className='navlinks text-[10px] lg:text-[20px] py-0.5'><Link to='/reservations'>Reservations</Link></li>
                <li className='navlinks text-[10px] lg:text-[20px] py-0.5'><Link to='/order'>Order Online</Link></li>
                <li className='navlinks text-[10px] lg:text-[20px] py-0.5'><Link to='/login'>Login</Link></li>
            </ul>
        </div>

                <div className="flex flex-col items-center">
            <h3 className="text-[10px] lg:text-[20px] mb-2 lg:mb-10 ml-1 lg:ml-4">Contacts</h3>
            <ul className="flex flex-col items-center">
                <li className='navlinks text-[10px] lg:text-[16px] py-0.5'><Link to='/'>Address</Link></li>
                <li className='navlinks text-[10px] lg:text-[16px] py-0.5'><Link to='/'>Phone-Number</Link></li>
                <li className='navlinks text-[10px] lg:text-[16px] py-0.5'><Link to='/'>Email</Link></li>
            </ul>
        </div>

                <div className="flex flex-col items-center">
            <h3 className="text-[10px] lg:text-[20px] mb-2 lg:mb-10">Social Media</h3>
            <ul className="flex">
                <li className='navlinks max-lg:px-0'><a href='https://x.com' target='_blank'><FontAwesomeIcon icon={faXTwitter} /></a></li>
                <li className='navlinks max-lg:px-0'><a href='https://facebook.com' target='_blank'><FontAwesomeIcon icon={faFacebook}/></a></li>
                <li className='navlinks max-lg:px-0'><a href='https://instagram.com' target='_blank'><FontAwesomeIcon icon={faInstagram}/></a></li>
                <li className='navlinks max-lg:px-0'><a href='https://play.google.com' target='_blank'><FontAwesomeIcon icon={faGooglePlay}/></a></li>
            </ul>
        </div>
    </nav>
    )
}
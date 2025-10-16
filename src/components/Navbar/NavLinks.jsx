    import { NavLink } from 'react-router-dom'
    
    export const NavLinks = ({open}) => { 
        return(
            <ul aria-label='Main navigation menu' className={
            `flex ${open ? 'transition-all duration-300 ease-in-out' : 'transition-all duration-300 translate-x-50'}
             flex-col  justify-start items-center md:justify-between absolute md:flex md:flex-row md:static 
             max-md:top-0 max-md:right-0 z-1 max-md:w-45 h-full
             bg-green-primary md:bg-white-primary text-white-primary md:text-black
             px-5 gap-5 md:gap-0 md:my-0`}>
                <li className='navlinks max-md:mt-20'><NavLink to='/'>Home</NavLink></li>
                <li className='navlinks'><NavLink to='/about'>About</NavLink></li>
                <li className='navlinks'><NavLink to='/menu'>Menu</NavLink></li>
                <li className='navlinks'><NavLink to='/bookings'>Reservations</NavLink></li>
                <li className='navlinks'><NavLink to='/order'>Order Online</NavLink></li>
                <li className='navlinks'><NavLink to='/login'>Login</NavLink></li>
            </ul>
        )
    }
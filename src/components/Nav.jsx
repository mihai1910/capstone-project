import {NavLink} from 'react-router-dom'
import logo from '../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Nav(){
    return(
        <nav className='flex justify-around p-4 md:p-6 items-center'>
            <img src={logo} className='w-32 h-auto'></img>

            <ul className='hidden md:flex gap-4 lg:gap-6 items-center text-sm font-medium justify-self-end'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>       About          </NavLink></li>
                <li><NavLink to='/menu'>        Menu           </NavLink></li>
                <li><NavLink to='/reservations'>Reservations   </NavLink></li>
                <li><NavLink to='/order'>       Order Online   </NavLink></li>
                <li><NavLink to='/login'>       Login         </NavLink></li>
            </ul>

            <button></button>
        </nav>
    )
}
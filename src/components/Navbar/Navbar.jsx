import { LogoDisplay } from './LogoDisplay';
import { DropDownMenu } from './DropDownMenu';
import { NavLinks } from './NavLinks';
import { useState } from 'react';

export default function Navbar(){
    const [open, setOpen] = useState(false);

        return(
            <nav className='flex justify-between items-center md:justify-around p-2 md:p-4 bg-white-primary'>
                <LogoDisplay/>
                <DropDownMenu open={open} setOpen={setOpen}/>
                <NavLinks open={open}/>
            </nav>
        )
}
import { LogoDisplay } from './LogoDisplay';
import { DropDownMenu } from './DropDownMenu';
import { NavLinks } from './NavLinks';
import React, { JSX, useState } from 'react';

interface NavbarProps{
    className?: string;
}

export default function Navbar ({className=''}: NavbarProps): JSX.Element{
    const [open, setOpen] = useState<boolean>(false);

        return(
            <nav className={`flex justify-between items-center md:justify-around p-2 md:p-4 bg-white-primary transform ${className}`}>
                <LogoDisplay/>
                <DropDownMenu open={open} setOpen={setOpen}/>
                <NavLinks open={open}/>
            </nav>
        )
}
import React, { ReactNode } from "react"
import { ReactFormState } from "react-dom/client";
type DropDownMenu = {
    open: boolean;
    setOpen: any;
}

export const DropDownMenu:React.FC<DropDownMenu> = ({open, setOpen}) => {
    return (
    <button className={`md:hidden text-3xl z-2 ${open ? 'text-white-primary' : 'text-black'}`} 
    onClick={() => setOpen(!open)}
    aria-expanded={open}
    aria-label='Toggle navigation menu'>☰
    </button>
    )
}
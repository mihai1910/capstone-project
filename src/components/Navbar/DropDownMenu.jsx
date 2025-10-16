export const DropDownMenu = ({open, setOpen}) => {
    return (
    <button className={`md:hidden text-3xl z-2 ${open ? 'text-white-primary' : 'text-black'}`} 
    onClick={() => setOpen(!open)}
    aria-expanded={open}
    aria-label='Toggle navigation menu'>☰
    </button>
    )
}
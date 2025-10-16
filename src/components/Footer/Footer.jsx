import { FooterLogo } from './FooterLogo'
import { FooterLinks } from './FooterLinks'

export default function Footer() {
    return(
    <footer className='flex bg-green-primary items-center justify-center py-20 gap-8'>
        <FooterLogo />
    </footer>
    )
}
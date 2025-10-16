import { FooterLogo } from './FooterLogo'
import { FooterLinks } from './FooterLinks'

export default function Footer() {
    return(
    <footer className='flex bg-green-primary justify-center py-5 lg:py-20 gap-10'>
        <FooterLogo />
        <FooterLinks />
    </footer>
    )
}
import { FooterLogo } from './FooterLogo'
import { FooterLinks } from './FooterLinks'

export default function Footer({className=''}) {
    return(
    <footer className={`flex justify-center w-full py-5 lg:py-10 gap-10 bg-green-primary ${className}`}>
        <FooterLogo />
        <FooterLinks />
    </footer>
    )
}
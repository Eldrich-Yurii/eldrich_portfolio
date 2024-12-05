import Yuri from './Asset/logo-yuri.png'
import './Navbar.css'

export default function Logo() {
    return(
        <>
            <img className='logo' src={Yuri} alt="logo" />
        </>
    )
}
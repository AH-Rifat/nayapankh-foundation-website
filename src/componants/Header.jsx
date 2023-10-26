import { Link } from 'react-router-dom'
import logoImg from '../assets/logo.jpg'

const Header = () => {
    return (
        <div className="bg-fuchsia-400 py-2">
            <div className='flex justify-between mx-16'>
                <img src={logoImg} alt="logo" className="w-12 rounded-lg" />

                <ul className='flex items-center gap-4'>
                    <li><Link className='hover:bg-fuchsia-500 text-white hover:duration-500 text-lg font-semibold p-2 px-4 rounded-lg'>Home</Link></li>
                    <li><Link className='hover:bg-fuchsia-500 text-white hover:duration-500 text-lg font-semibold p-2 px-4 rounded-lg'>About Us</Link></li>
                    <li><Link className='hover:bg-fuchsia-500 text-white hover:duration-500 text-lg font-semibold p-2 px-4 rounded-lg'>Our Certificates</Link></li>
                    <li><Link className='hover:bg-fuchsia-500 text-white hover:duration-500 text-lg font-semibold p-2 px-4 rounded-lg'>Contact Us</Link></li>
                    <li><Link className='hover:bg-fuchsia-500 text-white hover:duration-500 text-lg font-semibold p-2 px-4 rounded-lg'>Donation</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
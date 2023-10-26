/* eslint-disable react/no-unescaped-entities */
import heroImage from '../assets/coverImg.jpg'

const HeroSection = () => {
    return (
        <div className='relative'>
            <img src={heroImage} alt="" className="w-full brightness-50" />
            <div className='text-center absolute top-40 ml-36'>
                <h1 className='text-white font-bold text-7xl mb-8'>It's that easy to bring a Smile on Their Faces</h1>
                <p className='text-white text-xl font-semibold'>We don't ask for much, just help us with what you can- Be it Money, Skill or Your Time</p>
                <button className='bg-fuchsia-500 py-4 px-6 mt-10 font-semibold text-white hover:bg-fuchsia-600 hover:duration-300 rounded-lg'>Donate Now</button>
            </div>
        </div>
    )
}

export default HeroSection
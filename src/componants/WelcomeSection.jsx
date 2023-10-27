import welcomeImg from '../assets/image_2.jpg';

const WelcomeSection = () => {
    return (
        <div className='relative flex justify-center my-20'>
            <img src={welcomeImg} alt="" className="w-[60rem] h-96 object-center rounded-lg brightness-50 sepia shadow-lg shadow-black" />
            <div className='absolute text-white font-bold text-center'>
                <h1 className='my-10 text-5xl'>Welcome to NayePankh Foundation</h1>
                <small className='font-bold'>UP GOVT. | 80G & 12A Registered</small>
                <p className='mt-14 text-lg'>We are one of the Biggest Student led NGO of India with its <br /> operations extended in the city of Kanpur, Ghaziabad and <br /> various other cities.</p>
            </div>
        </div>
    );
};

export default WelcomeSection;
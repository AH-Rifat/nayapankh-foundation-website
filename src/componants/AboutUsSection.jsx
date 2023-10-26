import image from '../assets/image_one.jpg';

const AboutUsSection = () => {
    return (
        <div className='h-screen bg-slate-300'>
            <div className='md:flex gap-10 md:justify-between mx-48'>
                <img src={image} alt="" className="w-72 mt-12  rounded-xl border border-fuchsia-500 shadow-xl shadow-red-800" />
                <div className='mt-12 text-center'>
                    <h1 className='text-xl underline font-semibold mb-10 text-slate-800'>ABOUT US</h1>
                    <h1 className='text-7xl mb-10 font-bold text-fuchsia-600'>Think global, <br /> Act local.</h1>
                    <p className='text-lg text-start text-slate-700'>`NayePankh Foundation` is a non governmental organisation with a strong desire to help the society and make it a better place for all, by doing everything in our power and to make our vision successful we would require your vital support. Service to mankind is the service to god. Let’s revolutionise the society together!.</p>
                    <div className='flex justify-center mt-8 gap-10'>
                        <button className='uppercase bg-white p-3 rounded-lg font-semibold text-slate-800 hover:scale-110 hover:duration-200 duration-200'>Learn More</button>
                        <button className='uppercase bg-white p-3 rounded-lg font-semibold text-slate-800 hover:scale-110 hover:duration-200 duration-200'>Our Certificates</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;
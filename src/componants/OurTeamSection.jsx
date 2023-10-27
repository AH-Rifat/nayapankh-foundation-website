import team_image from '../assets/team_image.jpg';

const OurTeamSection = () => {
    return (
        <div className='bg-slate-300 h-screen'>
            <div className='flex gap-x-8 justify-center items-center'>
                <div className='mt-12 p-10 w-1/2 text-center'>
                    <h1 className='text-xl underline font-semibold mb-10 text-slate-800'>JOIN OUR</h1>
                    <h1 className='text-7xl mb-10 font-bold text-fuchsia-600'>TEAM</h1>
                    <p className='text-lg text-start text-slate-700'>
                        Join our team and make a difference in the lives of those in need. At NayePankh Foundation, we are committed to creating positive change and empowering communities. By joining our team, you will have the opportunity to contribute your time, skills, and ideas to help make a real impact. Whether you are passionate about education, health, or providing support during times of crisis, there is a place for you on our team. Join us today and be a part of an organization that is making a difference, one person at a time.
                    </p>
                    <button className='uppercase bg-white py-3 px-7 rounded-lg font-semibold text-slate-800 hover:scale-110 hover:duration-200 duration-200'>JOIN US</button>
                </div>
                <img src={team_image} alt="" className="rounded-lg shadow-black shadow-lg w-5/12" />
            </div>
        </div>
    );
};

export default OurTeamSection;
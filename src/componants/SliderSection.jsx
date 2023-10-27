import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';
import Slider from "react-slick";

const SliderSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    return (
        <div className='mb-10 w-[98%]'>
            <Slider {...settings}>
                <img src={slider1} alt="slider image" className="" />
                <img src={slider2} alt="slider image" className="" />
                <img src={slider3} alt="slider image" className="" />
            </Slider>
        </div>
    );
};

export default SliderSection;
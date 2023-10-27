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
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div className=''>
            <Slider {...settings}>
                <img src={slider1} alt="" className="" />
                <img src={slider2} alt="" className="" />
                <img src={slider3} alt="" className="" />
            </Slider>
        </div>
    );
};

export default SliderSection;
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Sdata from "./Sdata";

const Slide = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return ( 
        <div className="w-full max-w-screen-lg mx-auto py-8">
    <Slider {...settings}>
        {Sdata.map(value => {
            return (
                <div key={value.id} className="box inline-block bg-white rounded-lg shadow-md">
                    <div className="img">
                        <img src={value.cover} alt={value.title} className="block w-full h-auto rounded-t-lg"/>
                    </div>
                    <div className="text p-4 md:p-6">
                        <span className="block text-sm text-gray-500 mb-2 uppercase tracking-wide">{value.category}</span>
                        <h2 className="text-2xl text-gray-900 font-semibold mb-4">{value.title}</h2>
                        <p className="text-gray-700 text-base leading-relaxed">{value.desc}</p>
                    </div>
                </div>
            );
        })}
    </Slider>
</div>




    );
}

export default Slide;

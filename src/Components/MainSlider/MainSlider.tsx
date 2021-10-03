import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MainSlider.sass'

const MainSlider = (props: {slides: string[] }) => {
    const settingsSlider = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    }

    return (
        <div className="main-slider">
            <Slider {...settingsSlider}>
                {props.slides.map(((imgName: string, idx: number) => {
                    return (
                        <div key={idx}>
                            <img src={require(`images/${imgName}`).default} alt="slide-img"/>
                        </div>
                    )
                }))}
            </Slider>
        </div>
    )
}

export default MainSlider
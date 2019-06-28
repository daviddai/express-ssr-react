import React from "react";

import Slider from "react-slick";
import Slide from "./component/slide";

import "ignore-styles";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import "ignore-styles";
import "./component/slider.css";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slides: {
                banners: ["/images/banner-image-1.jpg", "/images/banner-image-2.jpg"]
            }
        };
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1
        };

        return (
            <div className="container-fluid px-0">
                <div style={{ height: "600px"}}>
                    <Slider {...settings}>
                        {
                            this.state.slides.banners.map((url, index) => {
                                return <Slide key={index} url={url}/>
                            })
                        }
                    </Slider>
                </div>
            </div>
        );
    }


}
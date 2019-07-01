import React from "react";

import Slider from "react-slick";
import Slide from "./components/slide";

import "ignore-styles";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./components/slider.css";

export default class Carousel extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Slider {...this.props.settings}>
                {
                    this.props.slides.map((url, index) => {
                        return <Slide key={index} url={url}/>
                    })
                }
            </Slider>
        );
    }

}
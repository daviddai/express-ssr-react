import React from "react";

import Slider from "react-slick";

import "ignore-styles";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./slider.css";

export const Carousel = (props) => {
    return (
        <Slider {...props.settings}>
            {props.children}
        </Slider>
    );
};
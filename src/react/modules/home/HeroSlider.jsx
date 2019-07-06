import React from "react";
import {Slide} from "../../shared/components/carousel/Slide";
import {Carousel} from "../../shared/components/carousel/Carousel";

export default class HeroSlider extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Carousel settings={this.props.settings}>
                {
                    this.props.slides.map((url, index) => {
                        return (
                            <Slide key={index}>
                                <img className="w-100" src={url} alt="slider image" />
                            </Slide>
                        )
                    })
                }
            </Carousel>
        );
    }

}
import React from "react";

import Carousel from "./component/Carousel";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slides: ["/images/banner-image-1.jpg", "/images/banner-image-2.jpg"]
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
                <Carousel slides={this.state.slides} settings={settings} />
            </div>
        );
    }


}
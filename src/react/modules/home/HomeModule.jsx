import React from "react";
import { TopBar } from "../../shared/components/top-bar/TopBar";
import { Search } from "../../shared/components/searcher/Search";

import "ignore-styles";
import "./home.css";
import TopDestinations from "./TopDestinations";
import HeroSlider from "./HeroSlider";

export default class HomeModule extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slides: ["/images/banner-image-1.jpg", "/images/banner-image-2.jpg"],
            topDestinations: [
                {
                    "name": "Hong Kong",
                    "imageUrl": "https://media.timeout.com/images/103812417/image.jpg"
                },
                {
                    "name": "Hong Kong",
                    "imageUrl": "https://media.timeout.com/images/103812417/image.jpg"
                },
                {
                    "name": "Hong Kong",
                    "imageUrl": "https://media.timeout.com/images/103812417/image.jpg"
                },
                {
                    "name": "Hong Kong",
                    "imageUrl": "https://media.timeout.com/images/103812417/image.jpg"
                },
                {
                    "name": "Hong Kong",
                    "imageUrl": "https://media.timeout.com/images/103812417/image.jpg"
                },
                {
                    "name": "Hong Kong",
                    "imageUrl": "https://media.timeout.com/images/103812417/image.jpg"
                },
                {
                    "name": "Hong Kong",
                    "imageUrl": "https://media.timeout.com/images/103812417/image.jpg"
                },
                {
                    "name": "Hong Kong",
                    "imageUrl": "https://media.timeout.com/images/103812417/image.jpg"
                }
            ]
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
                <TopBar>
                    <span>
                        <i className="fa fa-shopping-cart mr-4 text-white" aria-hidden={true} />
                    </span>
                    <span className="navbar-text text-white mr-4">
                        <i className="fa fa-sign-in mr-2" aria-hidden="true" />Login
                    </span>
                    <span className="navbar-text text-white">
                        <i className="fa fa-user-plus mr-2" aria-hidden="true" />Join
                    </span>
                </TopBar>
                <Search placeholder="Search by destinations, attractions or activities"
                        title="explore your travel"
                />
                <HeroSlider settings={settings}
                            slides={this.state.slides}
                />
                <TopDestinations className="top-destinations-container"
                                 topDestinations={this.state.topDestinations}
                />
            </div>
        );
    }

}
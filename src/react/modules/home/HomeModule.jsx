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
                    "name": "Tokyo",
                    "imageUrl": "https://i2.wp.com/passionpassport.com/wp-content/uploads/2018/01/tokyo-instagram-guide-Fred-Chen.jpg?fit=800%2C599&ssl=1"
                },
                {
                    "name": "Sydney",
                    "imageUrl": "https://lonelyplanetimages.imgix.net/mastheads/65830387.jpg?sharp=10&vib=20&w=1200"
                },
                {
                    "name": "New York",
                    "imageUrl": "https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200"
                },
                {
                    "name": "Hong Kong",
                    "imageUrl": "https://media.timeout.com/images/103812417/image.jpg"
                },
                {
                    "name": "London",
                    "imageUrl": "https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
                },
                {
                    "name": "Las Vegas",
                    "imageUrl": "http://res.cloudinary.com/simpleview/image/upload/v1497480003/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg"
                },
                {
                    "name": "Singapore",
                    "imageUrl": "https://smemagazine.asia/en/wp-content/uploads/2019/06/20190610-SME-Website-Singapore-Among-Easiest-Business-Places-Image.jpg"
                },
                {
                    "name": "Shanghai",
                    "imageUrl": "https://singularityhub.com/wp-content/uploads/2018/03/innovators-city-guide-shanghai-china-skyline-night-214399000.jpg"
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
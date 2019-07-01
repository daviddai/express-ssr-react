import React from "react";
import { TopBar } from "../../shared/components/topbar/TopBar";
import { Carousel } from "../../shared/components/carousel/Carousel";
import { Search } from "../../shared/components/searcher/Search";
import { Slide } from "../../shared/components/carousel/Slide";

export default class HomeModule extends React.Component {

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
                <Carousel settings={settings}>
                    {
                        this.state.slides.map((url, index) => {
                            return (
                                <Slide>
                                    <img className="w-100" key={index} src={url} alt="banner image" />
                                </Slide>
                            )
                        })
                    }
                </Carousel>
            </div>
        );
    }

}
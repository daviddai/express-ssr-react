import React from "react";
import { TopBar } from "../../shared/components/topbar/components/TopBar";
import {Carousel} from "../../shared/components/carousel/Carousel";
import {Search} from "../../shared/components/searcher/components/Search";

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
                <Search/>
                <Carousel slides={this.state.slides} settings={settings}/>
            </div>
        );
    }

}
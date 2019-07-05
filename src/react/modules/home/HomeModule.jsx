import React from "react";
import { TopBar } from "../../shared/components/top-bar/TopBar";
import { Carousel } from "../../shared/components/carousel/Carousel";
import { Search } from "../../shared/components/searcher/Search";
import { Slide } from "../../shared/components/carousel/Slide";
import {ImageCard} from "../../shared/components/image-card/ImageCard";
import {Row} from "../../shared/components/grid/Row";
import {Column} from "../../shared/components/grid/Column";

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
                                <Slide key={index}>
                                    <img className="w-100" src={url} alt="banner image" />
                                </Slide>
                            )
                        })
                    }
                </Carousel>
                <div className="container mt-5" style={{ height: "500px" }}>
                    <Row>
                        <Column>
                            <h3 className="text-center text-uppercase">Top Destinations</h3>
                        </Column>
                    </Row>
                    <Row className="h-50">
                        <Column className="px-2">
                            <ImageCard text="Hong Kong" url="https://media.timeout.com/images/103812417/image.jpg" />
                        </Column>
                        <Column className="px-2">
                            <ImageCard text="Hong Kong" url="https://media.timeout.com/images/103812417/image.jpg" />
                        </Column>
                        <Column className="px-2">
                            <ImageCard text="Hong Kong" url="https://media.timeout.com/images/103812417/image.jpg" />
                        </Column>
                        <Column className="px-2">
                            <ImageCard text="Hong Kong" url="https://media.timeout.com/images/103812417/image.jpg" />
                        </Column>
                    </Row>
                    <Row className="h-50">
                        <Column className="px-2">
                            <ImageCard text="Hong Kong" url="https://media.timeout.com/images/103812417/image.jpg" />
                        </Column>
                        <Column className="px-2">
                            <ImageCard text="Hong Kong" url="https://media.timeout.com/images/103812417/image.jpg" />
                        </Column>
                        <Column className="px-2">
                            <ImageCard text="Hong Kong" url="https://media.timeout.com/images/103812417/image.jpg" />
                        </Column>
                        <Column className="px-2">
                            <ImageCard text="Hong Kong" url="https://media.timeout.com/images/103812417/image.jpg" />
                        </Column>
                    </Row>
                </div>
            </div>
        );
    }

}
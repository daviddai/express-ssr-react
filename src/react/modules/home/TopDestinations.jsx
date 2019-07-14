import React from "react";
import {Row} from "../../shared/components/grid/Row";
import {Column} from "../../shared/components/grid/Column";
import {ImageCard} from "../../shared/components/image-card/ImageCard";
import {Carousel} from "../../shared/components/carousel/Carousel";
import {Slide} from "../../shared/components/carousel/Slide";

export default class TopDestinations extends React.Component {

    constructor(props) {
        super(props);
    }

    getTopDestinationSlide = (topDestinationsInSlide) => (
        <Slide>
            {
                this.getTopDestinationRow(topDestinationsInSlide.slice(0, 4))
            }
            {
                this.getTopDestinationRow(topDestinationsInSlide.slice(4, 8))
            }
        </Slide>
    );

    getTopDestinationRow = (topDestinationsInRow) => (
        <Row className="h-50">
            {
                topDestinationsInRow.map((topDestination, index) => {
                    return (
                        <Column className="px-2">
                            <ImageCard text={topDestination.name}
                                       url={topDestination.imageUrl}
                                       className="top-destinations-image-card-container"
                            />
                        </Column>
                    )
                })
            }
        </Row>
    );

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1
        };

        console.log(this.getTopDestinationSlide(this.props.topDestinations.slice(0, 8)));

        return (
            <div className={"container mt-5 " + this.props.className}>
                <Row className="mb-4">
                    <Column className="text-center">
                        <h3 className="text-uppercase">Top Destinations</h3>
                        <div className="text-muted">
                            Discover tours, attractions and activities for your next travel
                        </div>
                    </Column>
                </Row>
                <Row>
                    <Carousel settings={settings}>
                        {
                            this.getTopDestinationSlide(this.props.topDestinations.slice(0, 8))
                        }
                    </Carousel>
                </Row>

            </div>
        );
    }

}
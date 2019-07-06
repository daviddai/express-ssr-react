import React from "react";
import {Row} from "../../shared/components/grid/Row";
import {Column} from "../../shared/components/grid/Column";
import {ImageCard} from "../../shared/components/image-card/ImageCard";

export default class TopDestinations extends React.Component {

    constructor(props) {
        super(props);
    }

    getTopDestinationRow = (topDestinationsInRow) => (
        <Row className="h-50">
            {
                topDestinationsInRow.map((topDestination, index) => {
                    return (
                        <Column className="px-2">
                            <ImageCard text={topDestination.name}
                                       url={topDestination.imageUrl}
                            />
                        </Column>
                    )
                })
            }
        </Row>
    );

    render() {
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
                {
                    this.getTopDestinationRow(this.props.topDestinations.slice(0, 4))
                }
                {
                    this.getTopDestinationRow(this.props.topDestinations.slice(4, 8))
                }
            </div>
        );
    }

}
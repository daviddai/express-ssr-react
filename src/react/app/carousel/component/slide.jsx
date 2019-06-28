import React from "react";

export default class Slide extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img className="w-100" src={this.props.url} alt="banner image" />
            </div>
        );
    }

}
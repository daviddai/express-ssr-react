import React from "react";

import HomeModule from "./modules/home/HomeModule";

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HomeModule/>
        );
    }

}
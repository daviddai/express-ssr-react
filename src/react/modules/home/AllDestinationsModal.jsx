import React from "react";

import Modal from 'react-modal';
import {Button} from "../../shared/components/button/Button";

export default class AllDestinationsModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };
    }

    openModal = () => {
        this.setState({
            isModalOpen: true
        });
    };

    closeModal = () => {
        this.setState({
            isModalOpen: false
        });
    };

    render() {
        return (
            <div>
                <Button className="btn-outline-success w-25" text="Explore All Destinations" onClick={this.openModal}>
                    <i className="fas fa-map-marker-alt mr-2" />
                </Button>
                <Modal isOpen={this.state.isModalOpen}
                       onRequestClose={this.closeModal}
                >
                    <div className=""></div>
                </Modal>
            </div>
        );
    }

}
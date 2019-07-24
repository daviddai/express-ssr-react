import React from "react";

import Modal from 'react-modal';

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
                <Modal isOpen={this.state.isModalOpen}
                       onRequestClose={this.closeModal}
                >

                </Modal>
            </div>
        );
    }

}
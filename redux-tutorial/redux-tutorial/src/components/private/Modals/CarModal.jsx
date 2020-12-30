// PACKAGES
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-bootstrap';
// MODULES
import PrimaryButton from '../../common/PrimaryButton';
import SecondaryButton from '../../common/SecondaryButton';
import Modal from '../../common/Modal';
import { carDetailModalStateChanged } from '../../../actions/actions';
import { carDetailModalCarChanged } from '../../../actions/actions';
import { likeContent } from '../../../controllers/car-controller';
// STYLES
import './CarModal.css';

class CarModal extends Component {

    closeCallback() {
        this.props.dispatcher(carDetailModalStateChanged(false));
    }

    randomize() {
        let carCount = this.props.mainPage.carList.length;
        var item = this.props.mainPage.carList[Math.floor(Math.random() * carCount)];
        while (item.imageURL === this.props.carDetailModal.car.imageURL) {
            item = this.props.mainPage.carList[Math.floor(Math.random() * carCount)];
        }
        this.props.dispatcher(carDetailModalCarChanged(item));
    }

    like() {
        this.props.dispatcher(likeContent());
    }

    createCarousel() {
        return (
            <Carousel>
                <Carousel.Item >
                    <img className="car-modal-detail-image p-2" src={this.props.carDetailModal.car.imageURL} alt="Car" />
                    <Carousel.Caption>
                        <h4>{this.props.carDetailModal.car.name}</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img className="car-modal-detail-image p-2" src={this.props.carDetailModal.car.imageURL} alt="Car" />
                    <Carousel.Caption>
                        <h4>{this.props.carDetailModal.car.name}</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="car-modal-detail-image p-2" src={this.props.carDetailModal.car.imageURL} alt="Car" />
                    <Carousel.Caption>
                        <h4>{this.props.carDetailModal.car.name}</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }


    render() {
        return (
            <Modal width={90} height={80}>
                <div className="car-modal-container container-fluid h-100 m-0 p-0">
                    <div className="car-modal-row row h-100 m-0 p-0">
                        <div className="car-modal-column-header col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 m-0 p-0">
                            <div className="d-flex h-100 w-100 align-items-center px-2">

                                <div className="mr-auto p-0">
                                    <PrimaryButton onClick={() => this.closeCallback()}>
                                        Close{' '}&#10005;
                                    </PrimaryButton>
                                </div>

                                <div className="pr-1">
                                    <SecondaryButton onClick={() => this.like()}>
                                        👍
                                    </SecondaryButton>
                                </div>


                                <div className="pr-1">
                                    <SecondaryButton onClick={() => this.randomize()}>
                                        Prev
                                    </SecondaryButton>
                                </div>

                                <div className="pr-1">
                                    <SecondaryButton onClick={() => this.randomize()}>
                                        Next
                                    </SecondaryButton>
                                </div>

                            </div>
                        </div>
                        <div className="car-modal-column-body col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 m-0 p-0">
                            <div className="container-fluid h-100 m-0 p-0">
                                <div className="car-modal-detail-row row h-100 m-0 p-0">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 m-0 p-0">
                                        {this.createCarousel()}
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 m-0 p-0">
                                        <h3 className="car-modal-detail-header text-left mx-2 p-3">{this.props.carDetailModal.car.name}</h3>
                                        <p className="car-modal-detail-paragraph m-0 p-2 text-left">
                                            {this.props.carDetailModal.car.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => ({
    mainPage: state.mainPage,
    carDetailModal: state.modals.carDetailModal
});

const mapDispatchToProps = (dispatch) => ({
    dispatcher(action) {
        return dispatch(action);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CarModal);

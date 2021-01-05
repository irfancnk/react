// PACKAGES
import React, { Component } from 'react';
import { connect } from 'react-redux';
// MODULES
import Loading from '../common/Loading';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryDropdown from '../common/SecondaryDropdown';
import { userLogout } from '../../controllers/user-controller';
import { getCarList } from '../../controllers/car-controller';
import { carDetailModalStateChanged } from '../../actions/actions';
import { carDetailModalCarChanged } from '../../actions/actions';
// STYLES
import './MainPage.css'


class MainPage extends Component {

    componentDidMount() {
        this.props.dispatcher(getCarList())
    }

    onLogoutCallback() {
        this.props.dispatcher(userLogout())
    }

    onImageClickCallback(item) {
        this.props.dispatcher(carDetailModalCarChanged(item));
        this.props.dispatcher(carDetailModalStateChanged(true));
    }

    mapCards() {
        let reversedCars = [...this.props.mainPage.carList].reverse();
        let extendedCars = this.props.mainPage.carList.concat(reversedCars);
        extendedCars = extendedCars.concat(reversedCars).concat(this.props.mainPage.carList);
        return (
            extendedCars.map((item, index) => {
                return (
                    <div className="brick" key={index}>
                        <img className="image-tile" src={item.imageURL} alt="Car" onClick={() => this.onImageClickCallback(item)} />
                    </div>
                );
            })
        )
    }

    render() {
        if (this.props.mainPage.requestInProgress) {
            return (
                <Loading />
            );
        }
        return (
            <div className="main-container container-fluid h-100 m-0 p-0">
                <div className="main-row row h-100 m-0 p-0">
                    <div className="main-column-header col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 m-0 p-0">
                        <div className="d-flex flex-row-reverse h-100 w-100 align-items-center px-2">
                            <PrimaryButton onClick={() => this.onLogoutCallback()}>Logout</PrimaryButton>
                            <div className="px-1"></div>
                            <SecondaryDropdown>{this.props.applicationUser.userEmail}</SecondaryDropdown>
                        </div>
                    </div>
                    <div className="main-column-body col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 m-0 p-0">
                        <div className="p-2 w-100 h-100" style={{ overflowY: "scroll" }}>
                            <div className="masonry">
                                {this.mapCards()}
                            </div>
                        </div>
                    </div>
                    <div className="main-column-footer col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" />
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    applicationUser: state.applicationUser,
    mainPage: state.mainPage
});

const mapDispatchToProps = (dispatch) => ({
    dispatcher(action) {
        return dispatch(action);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

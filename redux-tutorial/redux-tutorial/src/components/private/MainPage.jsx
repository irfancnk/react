// PACKAGES
import React, { Component } from 'react';
import { connect } from 'react-redux';
// MODULES
import PrimaryButton from '../common/PrimaryButton';
import SecondaryDropdown from '../common/SecondaryDropdown';
import { userLogout } from '../../controllers/user-controller';
import { getCarList } from '../../controllers/car-controller';

// STYLES
import './MainPage.css'

class MainPage extends Component {

    componentDidMount() {
        this.props.dispatcher(getCarList())
    }

    onLogoutCallback() {
        this.props.dispatcher(userLogout())
    }

    createColumn(cars, key) {
        return (
            <div key={key} className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                {cars.map((item, index) => {
                    return (
                        <img className="py-2" key={index} src={item.imageURL} alt="Car" style={{ width: "100%", borderRadius: "20px" }} />
                    );
                })}
            </div>
        );
    }

    mapCards() {
        let columns = {
            column0: [],
            column1: [],
            column2: []
        };
        let createdColumns = []
        for (let i = 0; i < this.props.mainPage.carList.length; i++) {
            let iMode = i % 3;
            columns[`column${iMode}`].push(this.props.mainPage.carList[i]);
        }
        console.log(columns);
        createdColumns.push(this.createColumn(columns.column0, 0));
        createdColumns.push(this.createColumn(columns.column1, 1));
        createdColumns.push(this.createColumn(columns.column2, 2));
        return createdColumns;
    }

    render() {
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
                        <div className="container-fluid h-100 m-0 p-0">
                            <div className="row h-100 m-0 p-0" style={{overflowY: "scroll"}}>
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

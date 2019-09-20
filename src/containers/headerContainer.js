import React from 'react';
import Header from "../components/Header/header";

export default class HeaderContainer extends React.Component{
    state = {
        disabledSearchButton: true,
        errorInField: false,
        value: 0
    };

    handleChangeValue = (event) => {
        if (!(event.target.value).match(/^\d+$/)) {
            this.setState({errorInField: true});
            this.setState({disabledSearchButton: true})
        }
        if (event.target.value === "") {
            this.setState({errorInField: false});
            this.setState({disabledSearchButton: true})
        }
        if ((event.target.value).match(/^\d+$/)) {
            this.setState({disabledSearchButton: false});
            this.setState({errorInField: false});
            this.props.valueFromHeightField(Number(event.target.value));
        }
    };

    render(){
        const {disabledSearchButton, errorInField} = this.state;

        return(
            <Header
                errorState={errorInField}
                handleChange={this.handleChangeValue}
                disabledButton={disabledSearchButton}
                onClickButton={this.props.onClick}/>
        )
    }
}
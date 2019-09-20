import React from 'react';
import SwapiService from "../services/swapi-services";
import SearchService from "../services/search-services";
import MainForm from "../components/MainForm";

export default class MainFormContainer extends React.Component{
    swapiService = new SwapiService();

    state = {
        allList: [],
        listResults: [],
        height: "0"
    };

    getList = () => {
        this.setState(
            {
                listResults: SearchService.getHeightResult(this.state.allList, this.state.height)
            });
    };

    getHeightFromHeader = (height) =>{
        this.setState({height: height});
    };

    componentDidMount() {
        this.swapiService.getAllPeople().then((arrayPeople) => {
            this.setState({allList: arrayPeople})
        });

    }

    render(){
        return(
            <MainForm
                onClickInHeader={this.getList}
                valueFromHeightField={this.getHeightFromHeader}
                tableResults={this.state.listResults}/>
        )
    }
}
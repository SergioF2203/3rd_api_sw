import React from 'react';
import TableResults from "../ResultsTable";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";

import HeaderContainer from "../../containers/headerContainer";

export default function MainForm (props) {
    return (
        <form>
            <Typography variant={"h2"}>
                <Box textAlign="center">
                    Welcome to a StarWars search engine
                </Box>
            </Typography>
            <Divider style={{margin: 15}}/>
            <Paper elevation={4}>
                <HeaderContainer onClick={props.onClickInHeader} valueFromHeightField={props.valueFromHeightField}/>
            </Paper>
            <Paper elevation={16}>
                <Typography variant={"h4"} style={{margin: 30}}>
                    <Box textAlign="center">
                        Search Results
                    </Box>
                </Typography>
                <Divider/>
                <TableResults listResults={props.tableResults}/>
            </Paper>
        </form>
    )
}
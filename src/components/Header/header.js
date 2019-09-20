import React from 'react';

import HeightField from "../HeightField";
import ButtonSubmit from "../ButtonSubmit";
import Typography from "@material-ui/core/Typography";

export default function Header(props) {
    return (
        <div style={{textAlign: "right", paddingRight: 10}} >
            <Typography style={{textAlign: "center"}}>
                You may search a person higher then ...
            </Typography>
            <div>
                <HeightField error={props.errorState} handleChange={props.handleChange}/>
                <ButtonSubmit disabled={props.disabledButton} onClickButton={props.onClickButton}/>
            </div>
        </div>
    )
}
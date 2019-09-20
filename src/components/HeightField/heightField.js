import React from 'react';
import {TextField} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";

export default function HeightField (props) {
        return (
            <TextField
                error={props.error}
                style={{margin: 10}}
                label="Height"
                id="simple-start-adornment"
                onChange={props.handleChange}
                InputProps={{
                    startAdornment: <InputAdornment position="start">higher</InputAdornment>,
                }}
            />
        )
}


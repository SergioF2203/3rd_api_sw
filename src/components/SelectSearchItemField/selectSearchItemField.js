import React from'react';
import {TextField} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";

const searchItems = [
    {value: 'People'},
    {value: 'Star'},
    {value: 'Starships'}
];

function selectSearchItemFilad() {
    return(
        <TextField
            id="outlined-select-currency"
            select
            label="Select Item"
            value="Value"
            helperText="Please select your find items"
            margin="normal"
            variant="outlined"
        >
            {searchItems.map(option => (
                <MenuItem key={option.value} value={option.value}>
                    {option.value}
                </MenuItem>
            ))}
        </TextField>

    )
}

export default selectSearchItemFilad;
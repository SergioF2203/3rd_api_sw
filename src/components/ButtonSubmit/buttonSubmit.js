import React from 'react';

import Button from "@material-ui/core/Button";

export default function ButtonSubmit (props) {
    return (
        <Button
            onClick={props.onClickButton}
            variant="contained"
            color="primary"
            style={{marginTop: 10}}
            disabled={props.disabled}>
            Search
        </Button>
    )
}


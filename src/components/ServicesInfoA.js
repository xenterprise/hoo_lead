import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { LeadContext } from '../context/LeadContext'
import { useContext, useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        alignItems: "center"
    },
}));

export default function ServicesInfoA() {
    const classes = useStyles();
    const [state, dispatch] = useContext(LeadContext)

    return (
        <Grid className={classes.root}
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justify="center"
            style={{ minHeight: '40vh' }}
        >
            <Grid item>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.checkedB}
                            // onChange={handleChange}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Ambiance"
                />
            </Grid>
            <Grid item>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.checkedB}
                            // onChange={handleChange}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Security"
                />
            </Grid>
            <Grid item>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.checkedB}
                            // onChange={handleChange}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Energy Saving"
                />
            </Grid>
            <Grid item>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.checkedB}
                            // onChange={handleChange}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Health & Wellness"
                />
            </Grid>
        </Grid >
    );
}

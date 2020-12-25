import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        alignItems: "center"
    },
}));

export default function UserInfoA() {
    const classes = useStyles();

    return (
        <Grid className={classes.root}
            container
            spacing={0}
            direction="col"
            alignItems="center"
            justify="center"
            style={{ minHeight: '40vh' }}
        >

            <Grid item>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Name" />
                    <TextField id="standard-basic" label="Email" />
                    <TextField id="standard-basic" label="Phone" />
                    <TextField id="standard-basic" label="Details" />
                </form>
            </Grid>

        </Grid>

    );
}

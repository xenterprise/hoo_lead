import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { LeadContext } from '../context/LeadContext'
import { useContext, useState } from 'react';


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
    const [state, dispatch] = useContext(LeadContext)

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
                    <TextField id="standard-basic" label="Name" value={state.leadName} onChange={(e)=>{dispatch({type: 'UPDATE_LEAD_NAME', val: e.target.value })}}/>
                    <TextField id="standard-basic" label="Email" value={state.leadEmail} onChange={(e)=>{dispatch({type: 'UPDATE_LEAD_EMAIL', val: e.target.value })}}/>
                    <TextField id="standard-basic" label="Phone" value={state.leadPhone} onChange={(e)=>{dispatch({type: 'UPDATE_LEAD_PHONE', val: e.target.value })}}/>
                    <TextField id="standard-basic" label="Details" value={state.leadDetail} onChange={(e)=>{dispatch({type: 'UPDATE_LEAD_DETAIL', val: e.target.value })}}/>
                </form>
            </Grid>

        </Grid>

    );
}

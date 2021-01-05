import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { LeadContext } from '../context/LeadContext'
import { useContext, useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function PackageInfoA() {
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
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Property Class</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="class-select"
                        value={state.property_class}
                        onChange={(e)=>{dispatch({type: 'SELECT_PROPERTY_CLASS', val: e.target.value })}}
                    >
                        <MenuItem value={0} >Apartments</MenuItem>
                        <MenuItem value={1} >Houses</MenuItem>
                        <MenuItem value={2} >Custom</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Property Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="type-select"
                        value={state.property_type}
                        onChange={(e)=>{dispatch({type: 'SELECT_PROPERTY_TYPE', val: e.target.value })}}
                    >
                        {state.property_class===0?<MenuItem value={0}>Studio Apartment</MenuItem>:null}
                        {state.property_class===0?<MenuItem value={1}>1 Bed Apartment</MenuItem>:null}
                        {state.property_class===0?<MenuItem value={2}>2 Bed Apartment</MenuItem>:null}
                        {state.property_class===0?<MenuItem value={3}>3 Bed Apartment</MenuItem>:null}
                        {state.property_class===1?<MenuItem value={4}>2 Bed House</MenuItem>:null}
                        {state.property_class===1?<MenuItem value={5}>3 Bed House</MenuItem>:null}
                        {state.property_class===1?<MenuItem value={6}>4 Bed House</MenuItem>:null}
                        {state.property_class===1?<MenuItem value={7}>5 Bed House</MenuItem>:null}
                        {state.property_class===2?<MenuItem value={8}>Custom</MenuItem>:null}
                    </Select>
                </FormControl>
            </Grid>

        </Grid>

    );
}

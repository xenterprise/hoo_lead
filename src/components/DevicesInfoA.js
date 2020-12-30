import React, { Component } from 'react';
import ModalChoice from './Modal'
import BuildingType from './BuildingType'
import PackageType from './PackageType'
import LeftDrawer from './LeftDrawer'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { red, grey, blue } from '@material-ui/core/colors';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import { LeadContext } from '../context/LeadContext'
import { useContext, useState } from 'react';


var tempDeviceCount, tempRoomCount

const preMatrix_Studio_Gold = [
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Bathroom
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Lounge
  [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],//Bedroom
  [1, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],//Lobby
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Drawing
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Dining
  [1, 0, 1, 5, 0, 0, 0, 1, 0, 0, 0, 0, 0],//Kitchen
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Porch
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Stairs
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Lawn
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 1, 1, 1],//Addons
]
const preMatrix_Studio_Silver = [
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Bathroom
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Lounge
  [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Bedroom
  [1, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],//Lobby
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Drawing
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Dining
  [1, 0, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Kitchen
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Porch
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Stairs
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Lawn
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 1, 0, 0],//Addons
]
const preMatrix_Studio_Base = [
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Bathroom
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Lounge
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Bedroom
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Lobby
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Drawing
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Dining
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Kitchen
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Porch
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Stairs
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Lawn
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],//Addons
]
var preRoomsCount_Studio = [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1]

const useStyles = makeStyles((theme) => ({
  gridRoot: {
    '& > *': {
      margin: theme.spacing(1),
      width: '40ch',
    },

  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  header: {
    backgroundColor: grey[400],
  },
  avatar: {
    backgroundColor: grey[600],
  },
  addButton: {
    backgroundColor: grey[500],
    color: grey[800],
  },
  buttonGroup: {
    alignItems: 'center',
  }
}));

function Display() {
  const classes = useStyles();
  const [state, dispatch] = useContext(LeadContext)

  return (
    <Grid className={classes.gridRoot}
      container
      spacing={0}
      direction="row"
      justify="center"
    >
      {
        Object.keys(state.matrix).map((room, room_id) => (
          state.roomsCount[room_id] ?
            <Grid item>
              <Card className={classes.root} >
                <CardHeader className={classes.header}
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      <img src={`Picture${room_id}.png`} width="20px" />
                    </Avatar>
                  }
                  action={
                    <IconButton component="span" aria-label="settings" size="small" className={classes.addButton}>
                      <AddIcon />
                    </IconButton>
                  }
                  title={state.roomNames[room_id]}
                  subheader={`x${state.roomsCount[room_id]}`}
                />
                <CardActionArea>
                  <CardContent>
                    <ButtonGroup justify="center" variant="contained" aria-label="contained button group" align="center" className={classes.buttonGroup}>
                      <Button component="span" aria-label="settings" size="small" className={classes.addButton} onClick={(e)=>{dispatch({type: 'SUB_ROOM_COUNT', val: room_id })}}>
                        <RemoveIcon />
                      </Button>
                      <Button component="span" aria-label="settings" size="small" className={classes.addButton} onClick={(e)=>{dispatch({type: 'ADD_ROOM_COUNT', val: room_id })}}>
                        <AddIcon />
                      </Button>
                    </ButtonGroup>
                    <br />
                    <Table className={classes.table} size="small" aria-label="a dense table">
                      {
                        Object.keys(state.matrix[room_id]).map((devices, device_id) => (
                          state.matrix[room_id][device_id] ?
                            <TableRow key={device_id}>
                              <TableCell><img src={`icon${device_id}.png`} width="20px" /></TableCell>
                              <TableCell>{state.deviceNames[device_id]}</TableCell>
                              <TableCell>{`x${state.matrix[room_id][device_id]}`}</TableCell>
                              <td>
                                <ButtonGroup variant="contained" aria-label="contained  button group" align="center" className={classes.buttonGroup}>
                                  <Button component="span" aria-label="settings" size="small" onClick={(e)=>{dispatch({type: 'SUB_DEVICE_COUNT', val: {room_id, device_id} })}} className={classes.addButton} >
                                    <RemoveIcon />
                                  </Button>
                                  <Button component="span" aria-label="settings" size="small" onClick={(e)=>{dispatch({type: 'ADD_DEVICE_COUNT', val: {room_id, device_id} })}} className={classes.addButton}>
                                    <AddIcon />
                                  </Button>
                                </ButtonGroup>
                              </td>
                            </TableRow>
                            : null
                        ))
                      }
                    </Table>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            : null
        ))
      }
    </Grid>
  )
}

const xstate = {
  current_BuildingType: 0,
  current_PackageType: 0,
  current_buildingTypeLabel: 'Studio Apartment',
  current_packageTypeLabel: 'Gold',
}

const selectBuildingType = (buildingType, label) => {
  this.setState({
    current_BuildingType: buildingType,
    current_buildingTypeLabel: label
  }, () => this.setDefaults)
}

const selectPackageType = (packageType, label) => {
  this.setState({
    current_PackageType: packageType,
    current_packageTypeLabel: label
  }, () => this.setDefaults)
}

const setDefaults = (buildingType, PackageType) => {
  console.log("Defaults Set after Type Change")
}

export default function DevicesInfoA() {
  const classes = useStyles();
  const [state, dispatch] = useContext(LeadContext)
  return (
    <Display />
  );
}

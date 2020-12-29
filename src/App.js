// import React, { Component } from 'react';
// import {
//   Row, Col, Container, Card, CardHeader, CardBody,
//   Button, ButtonGroup, CardImg, CardImgOverlay,
//   CardText, CardTitle, CardSubtitle, Table, Modal
// } from 'reactstrap';
// import './App.css';
// import ModalChoice from './Modal'
// import BuildingType from './components/BuildingType'
// import PackageType from './components/PackageType'
// import LeftDrawer from './components/LeftDrawer'
// import us from './styles/Classes'

// var tempDeviceCount, tempRoomCount

// const preMatrix_Studio_Gold = [
//   [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Bathroom
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Lounge
//   [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],//Bedroom
//   [1, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],//Lobby
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Drawing
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Dining
//   [1, 0, 1, 5, 0, 0, 0, 1, 0, 0, 0, 0, 0],//Kitchen
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Porch
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Stairs
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Lawn
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 1, 1, 1],//Addons
// ]
// const preMatrix_Studio_Silver = [
//   [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Bathroom
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Lounge
//   [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Bedroom
//   [1, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],//Lobby
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Drawing
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Dining
//   [1, 0, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Kitchen
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Porch
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Stairs
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Lawn
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 1, 0, 0],//Addons
// ]
// const preMatrix_Studio_Base = [
//   [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Bathroom
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Lounge
//   [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Bedroom
//   [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Lobby
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Drawing
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Dining
//   [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Kitchen
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Porch
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Stairs
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//Lawn
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],//Addons
// ]
// var preRoomsCount_Studio = [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1]




// function Display(props) {
//   return (
//     <div>
//       <Container>
//         <Row>
//           {
//             Object.keys(props.this.state.matrix).map((room, room_id) => (
//               //props.this.state.user.social[item].link
//               props.this.state.roomsCount[room_id] ?
//                 <Col key={room_id} xs="12" sm="6" md="4">
//                   <Card>
//                     <CardHeader style={{ backgroundColor: '#333', borderColor: '#333', color: '#fff' }}>
//                       <CardImg width="50px" src={`Picture${room_id}.png`} alt="Card image cap" style={{ paddingTop: '0%', paddingLeft: '53%', paddingRight: '1%', paddingBottom: '0%' }} />
//                     </CardHeader>
//                     <CardImgOverlay style={{ color: '#fff' }}>
//                       <CardTitle tag="h5">{props.this.state.roomNames[room_id]}</CardTitle>
//                       <CardTitle tag="h1">{`x${props.this.state.roomsCount[room_id]}`}</CardTitle>
//                     </CardImgOverlay>
//                     <div className="text-center" style={{ backgroundColor: '#333', borderColor: '#333', color: '#fff', paddingTop: '0%', paddingBottom: '2%' }}>
//                       <ButtonGroup >
//                         <Button onClick={() => props.this.subtractRoom(room_id)}>-</Button>
//                         <Button onClick={() => props.this.addRoom(room_id)}>+</Button>
//                       </ButtonGroup>
//                     </div>
//                     <Table striped size="sm" className="text-center" >
//                       {
//                         Object.keys(props.this.state.matrix[room_id]).map((devices, device_id) => (
//                           props.this.state.matrix[room_id][device_id] ?
//                             <tr key={device_id}>
//                               <td><img src={`icon${device_id}.png`} width="20px" /></td>
//                               <td>{props.this.state.deviceNames[device_id]}</td>
//                               <td>{`x${props.this.state.matrix[room_id][device_id]}`}</td>
//                               <td>
//                                 <ButtonGroup size="sm">
//                                   <Button onClick={() => props.this.subtractDevice(room_id, device_id)}>-</Button>
//                                   <Button onClick={() => props.this.addDevice(room_id, device_id)}>+</Button>
//                                 </ButtonGroup>
//                               </td>
//                             </tr>
//                             : null
//                         ))
//                       }
//                     </Table>
//                   </Card>
//                   <br />
//                 </Col>
//                 : null
//             ))
//           }
//         </Row>
//       </Container>
//     </div>
//   )
// }

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       matrix: new Array(11).fill(0).map(() => new Array(13).fill(2)),
//       roomNames: ['Bathroom', 'Lounge', 'Bedroom', 'Lobby', 'Drawing', 'Dining', 'Kitchen', 'Porch', 'Stairs', 'Lawn', 'Addons'],
//       deviceNames: ['Switch', 'Motion', 'Dimmer', 'Socket', 'Curtain', 'Door Lock', 'Door Sensor', 'Gas Leak', 'Window', 'Breaker', 'Scene Switch', 'Fire Sensor', 'Meter'],
      
//       roomsCount: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//       current_BuildingType: 0,
//       current_PackageType: 0,
//       current_buildingTypeLabel: 'Studio Apartment',
//       current_packageTypeLabel: 'Gold',
//     }

//     this.subtractDevice = this.subtractDevice.bind(this)
//     this.addDevice = this.addDevice.bind(this)
//     this.subtractRoom = this.subtractRoom.bind(this)
//     this.addRoom = this.addRoom.bind(this)
//     this.selectBuildingType = this.selectBuildingType.bind(this)
//     this.selectPackageType = this.selectPackageType.bind(this)
//     this.setDefaults = this.setDefaults.bind(this)
//   }

//   subtractDevice(room_id, device_id) {
//     tempDeviceCount = this.state.matrix
//     tempDeviceCount[room_id][device_id]--

//     this.setState(state => ({
//       ...state,
//       matrix: tempDeviceCount
//     }))
//   }

//   addDevice(room_id, device_id) {
//     tempDeviceCount = this.state.matrix
//     tempDeviceCount[room_id][device_id]++

//     this.setState(state => ({
//       ...state,
//       matrix: tempDeviceCount
//     }))
//   }

//   subtractRoom(room_id) {
//     tempRoomCount = this.state.roomsCount
//     tempRoomCount[room_id]--

//     this.setState(state => ({
//       ...state,
//       roomsCount: tempRoomCount
//     }))
//   }

//   addRoom(room_id) {
//     tempRoomCount = this.state.roomsCount
//     tempRoomCount[room_id]++

//     this.setState(state => ({
//       ...state,
//       roomsCount: tempRoomCount
//     }))
//   }

//   selectBuildingType(buildingType, label) {
//     this.setState({
//       current_BuildingType: buildingType,
//       current_buildingTypeLabel: label
//     }, () => this.setDefaults)
//   }

//   selectPackageType(packageType, label) {
//     this.setState({
//       current_PackageType: packageType,
//       current_packageTypeLabel: label
//     }, () => this.setDefaults)
//   }

//   setDefaults(buildingType, PackageType) {
//     // this.setState(state => ({
//     //   ...state,
//     //   matrix: preMatrix_Studio_Gold
//     // }))
//     console.log("Defaults Set after Type Change")
//   }

//   render() {
//     return (
//       <div >
//         <LeftDrawer/>
//         <br />
        
//         <Container >
//           <Row>
//             <BuildingType this={this} />
//             <PackageType this={this} />
//             <ModalChoice this={this} />
//           </Row>
//         </Container>
//         <br />
//         <Display this={this} />
//       </div>
//     );
//   }
// }

// export default App;


import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file="./Proposal Format.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}

export default App;
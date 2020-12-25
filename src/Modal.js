import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Card, CardHeader, CardImg, Container, CardImgOverlay, CardTitle } from 'reactstrap';
import './App.css';

const ModalChoice = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal)
    };

    const roomSelection = (room_id) => {
        console.log('I m working here')
        props.this.addRoom(room_id)
        setModal(!modal)
    };

    return (
        <div>
            <Container>
                <Row>
                    <Button color="dark" onClick={toggle}>Add Room</Button>
                    <Modal isOpen={modal} toggle={toggle} className={className}>
                        <ModalHeader toggle={toggle}>Select your Room</ModalHeader>
                        <ModalBody>
                            <Container>
                                <Row>
                                    {
                                        Object.keys(props.this.state.roomsCount).map((room, room_id) => (

                                            <Col key={room_id} md="6">
                                                <Card onClick={() => roomSelection(room_id)}>
                                                    <CardHeader style={{ backgroundColor: '#333', borderColor: '#333', color: '#fff' }} >
                                                        <CardImg src={`Picture${room_id}.png`} alt="Card image cap" style={{ paddingTop: '0%', paddingLeft: '63%', paddingRight: '1%', paddingBottom: '0%' }} />
                                                    </CardHeader>
                                                    <CardImgOverlay style={{ color: '#fff' }}>
                                                        <CardTitle>{props.this.state.roomNames[room_id]}</CardTitle>
                                                    </CardImgOverlay>
                                                </Card>
                                            </Col>

                                        ))
                                    }
                                </Row>
                            </Container>
                        </ModalBody>
                    </Modal>
                </Row>
            </Container>



        </div>
    );
}

export default ModalChoice;
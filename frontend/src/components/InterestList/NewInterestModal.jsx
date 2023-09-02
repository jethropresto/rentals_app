import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

function NewInterestModal() {

    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [eventType, setEventType] = useState('');
    const [date, setDate] = useState('');
    const [spaces, setSpaces] = useState('');
    const [alcohol, setAlcohol] = useState('Yes');
    const [quoted, setQuoted] = useState('Yes');
    const [tourDate, setTourDate] = useState('');
    const [status, setStatus] = useState('');

    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; 
    let dd = today.getDate();
    const formattedDate = mm + '/' + dd + '/' + yyyy;

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const phoneNumberChangedHandler = (event) => {
        setPhoneNumber(event.target.value);
    };

    const eventTypeChangedHandler = (event) => {
        setEventType(event.target.value);
    };

    const dateChangedHandler = (event) => {
        setDate(event.target.value);
    };

    const spacesChangedHandler = (event) => {
        setSpaces(event.target.value);
    };

    const alcoholChangedHandler = (event) => {
        setAlcohol(event.target.value);
    };

    const quotedChangedHandler = (event) => {
        setQuoted(event.target.value);
    };

    const tourDateChangedHandler = (event) => {
        setTourDate(event.target.value);
    };

    const statusChangedHandler = (event) => {
        setStatus(event.target.value);
    };


    const handleShow = () => {
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (tourDate==="") {
            setTourDate("N/A");
        };
    
        axios.post('http://localhost:5000/newInterest', {
            name: name,
            phoneNumber: phoneNumber,
            eventType: eventType,
            date: date,
            spaces: spaces,
            alcohol: alcohol,
            quoted: quoted,
            tourDate: tourDate,
            status: status,
            lastUpdated: formattedDate
        })

        console.log('Submitted new interest list for: ' + {name} + '! Remember to follow up with them!');
        
        setShowSuccessAlert(true);
        setTimeout(() => {
            setShowSuccessAlert(false);
        }, 3000);
        
        setName('');
        setPhoneNumber('');
        setEventType('');
        setDate('');
        setSpaces('');
        setAlcohol('Yes');
        setQuoted('Yes');
        setTourDate('');
        setStatus('');
        setShow(false);
            
        };

    return (
        <div>
            <div>
                <Button onClick={handleShow}>New Interest</Button>
            </div>

            <div>
                <Alert
                    show={showSuccessAlert}
                    variant="success"
                    dismissable="true"
                >
                    Successfully added to the interest list!
                </Alert>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Interest</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={submitHandler}>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" value={name} onChange={nameChangeHandler}/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="phone number">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="text" placeholder="(111) 111-1111" value={phoneNumber} onChange={phoneNumberChangedHandler}/>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="event type">
                                        <Form.Label>Event Type</Form.Label>
                                        <Form.Control type="text" placeholder="Birthday, Wedding, Anniversary, etc." value={eventType} onChange={eventTypeChangedHandler}/>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                
                                <Col>
                                    <Form.Group className="mb-3" controlId="date">
                                        <Form.Label>Date</Form.Label>
                                        <Form.Control type="text" placeholder="1/20/2024" value={date} onChange={dateChangedHandler}/>
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group className="mb-3" controlId="spaces">
                                        <Form.Label>Spaces</Form.Label>
                                        <Form.Select value={spaces} onChange={spacesChangedHandler}>
                                            <option value="1 Room">1 Room</option>
                                            <option value="2 Rooms">2 Rooms</option>
                                            <option value="3 Rooms">3 Rooms</option>
                                            <option value="Conference Room">Conference Room</option>
                                            <option value ="2 Rooms + Courtyard">2 Rooms + Courtyard</option>
                                            <option value ="3 Rooms + Courtyard">3 Rooms + Courtyard</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="alcohol">
                                        <Form.Label>Alcohol</Form.Label>
                                        <Form.Select value={alcohol} onChange={alcoholChangedHandler}>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </Form.Select>
                                    </Form.Group>  
                                </Col>

                                <Col>
                                    <Form.Group className="mb-3" controlId="quoted">
                                        <Form.Label>Quoted</Form.Label>
                                        <Form.Select value={quoted} onChange={quotedChangedHandler}>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group className="mb-3" controlId="tour date">
                                        <Form.Label>Tour Date</Form.Label>
                                        <Form.Control type="text" placeholder="1/20/2024" value={tourDate} onChange={tourDateChangedHandler} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Form.Group className="mb-3" controlId="status">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Control type="text" value={status} onChange={statusChangedHandler} />
                                </Form.Group>
                            </Row>

                        </Form>
                        
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={handleClose}>Close</Button>
                        <Button type="submit" onClick={submitHandler}>Submit</Button>
                    </Modal.Footer>

                </Modal>
            </div>
        </div>
        )
}

    
export default NewInterestModal
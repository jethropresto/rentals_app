import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function InterestList() {

    const [interestList, setInterestList] = useState([]);
    const [isOpen, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [buttonText, setButtonText] = useState("Show Interest List");
    
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [eventType, setEventType] = useState('');
    const [date, setDate] = useState('');
    const [spaces, setSpaces] = useState('');
    const [alcohol, setAlcohol] = useState('');
    const [quoted, setQuoted] = useState('');
    const [tourDate, setTourDate] = useState('');
    const [status, setStatus] = useState('');
    const [lastUpdated, setLastUpdated] = useState('');

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

    const lastUpdatedChangedHandler = (event) => {
        setLastUpdated(event.target.value);
    };

    const handleClick = () => {
        setOpen(!isOpen);
        if (!isOpen) {
            setButtonText("Close");
        } else {
            setButtonText("Show Interest List");
        };
    };

    const handleShow = () => {
        setOpen(false);
        setButtonText("Show Interest List");
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    const submitHandler = (event) => {
        event.preventDefault();
    
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

        setName('');
        setPhoneNumber('');
        setEventType('');
        setDate('');
        setSpaces('');
        setAlcohol('');
        setQuoted('');
        setTourDate('');
        setStatus('');
        setLastUpdated('');
        setShow(false);
            
      };

    useEffect(() => {
        axios.get('http://localhost:5000/interestList')
        .then(interestList => setInterestList(interestList.data))
        .catch(err => console.log(err))
    }, []);


    return (
        <div>
            <h1>Interest List</h1>
            
            <div align="center">
                <Button type="button" onClick={handleClick}>{buttonText}</Button>{'  '}
                <Button onClick={handleShow}>New Interest</Button>
            </div>
            <div>

                {isOpen && 
                    <Table>
                        <thead>
                            <tr>
                                <th> Name </th>
                                <th> Phone Number </th>
                                <th> Event Type </th>
                                <th> Date </th>
                                <th> Spaces </th>
                                <th> Alcohol </th>
                                <th> Quoted </th>
                                <th> Tour Date </th>
                                <th> Status </th>
                                <th> Last Updated </th>
                            </tr>
                        </thead>

                        <tbody>
                            {interestList.map( (entry) => (
                                <tr>
                                    <td>{entry.name}</td>
                                    <td>{entry.phoneNumber}</td>
                                    <td>{entry.eventType}</td>
                                    <td>{entry.date}</td>
                                    <td>{entry.spaces}</td>
                                    <td>{entry.alcohol}</td>
                                    <td>{entry.quoted}</td>
                                    <td>{entry.tourDate}</td>
                                    <td>{entry.status}</td>
                                    <td>{entry.lastUpdated}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>}

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>New Interest</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form onSubmit={submitHandler}>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" value={name} onChange={nameChangeHandler}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="phone number">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="text" placeholder="(111) 111-1111" value={phoneNumber} onChange={phoneNumberChangedHandler}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="event type">
                                    <Form.Label>Event Type</Form.Label>
                                    <Form.Control type="text" placeholder="Birthday, Wedding, Anniversary, etc." value={eventType} onChange={eventTypeChangedHandler}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="date">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="text" placeholder="1/20/2024" value={date} onChange={dateChangedHandler}/>
                                </Form.Group>

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

                                <Form.Group className="mb-3" controlId="alcohol">
                                    <Form.Label>Alcohol</Form.Label>
                                    <Form.Select value={alcohol} onChange={alcoholChangedHandler}>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="quoted">
                                    <Form.Label>Quoted</Form.Label>
                                    <Form.Select value={quoted} onChange={quotedChangedHandler}>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="tour date">
                                    <Form.Label>Tour Date</Form.Label>
                                    <Form.Control type="text" placeholder="1/20/2024" value={tourDate} onChange={tourDateChangedHandler} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="status">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Control type="text" value={status} onChange={statusChangedHandler} />
                                </Form.Group>
                                
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

export default InterestList;
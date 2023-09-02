import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import NewInterestModal from '../components/InterestList/NewInterestModal';

function InterestList() {

    const [interestList, setInterestList] = useState([]);
    const [isOpen, setOpen] = useState(false);
    const [buttonText, setButtonText] = useState("Show Interest List");

    const handleClick = () => {
        setOpen(!isOpen);
        if (!isOpen) {
            setButtonText("Close");
        } else {
            setButtonText("Show Interest List");
        };
    };

    useEffect(() => {
        axios.get('http://localhost:5000/interestList')
        .then(interestList => setInterestList(interestList.data))
        .catch(err => console.log(err))
    }, []);


    return (
        <div>
            <h1>Interest List</h1>
            
            <Container>
                <Row align="center">
                    <Col>
                        <Button type="button" onClick={handleClick}>{buttonText}</Button>
                    </Col>

                    <Col>
                        <NewInterestModal></NewInterestModal>
                    </Col>    
                </Row>    
            </Container>

            <div>

                {isOpen && <Table>
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
                            <tr key={entry._id}>
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
            </div>
        </div>
    )
}

export default InterestList;
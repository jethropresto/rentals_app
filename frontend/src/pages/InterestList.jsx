import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import NewInterestModal from '../components/InterestList/NewInterestModal';

function InterestList() {

    const [interestList, setInterestList] = useState([]);
    const [isOpen, setOpen] = useState(true);
    const [buttonText, setButtonText] = useState("Close");

    const handleClick = () => {
        setOpen(!isOpen);
        if (!isOpen) {
            getList();
            setButtonText("Close");
        } else {
            setButtonText("Show Interest List");
        };
    };

    const getList = () => {
        axios.get('http://localhost:5000/interestList')
        .then(interestList => setInterestList(interestList.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getList();
    }, []);


    return (
        <div className="h-screen sm:px-6 w-full bg-gray-100">
            <div className="h-full flex flex-col">
                <div className="justify-between mt-4 mb-3">
                    <h1 className="font-bold text-gray-800 pb-3">Interest List</h1>
                    <div className="flex items-center justify-between">
                        <Button onClick={handleClick}>{buttonText}</Button>
                        <NewInterestModal />
                    </div>
                </div>

                <div className="relative overflow-y-auto ">
                    
                    {isOpen && <Table className="border border-spacing-4">
                        <thead className="mt-3 text-sm border uppercase sticky top-0">
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
        
        </div>
    )
}

export default InterestList;
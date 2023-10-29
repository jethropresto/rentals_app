import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import NewInterestModal from '../components/InterestList/NewInterestModal';

function InterestList() {

    const [interestList, setInterestList] = useState([]);
    const [isOpen, setOpen] = useState(true);
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
        <div className="h-screen sm:px-6 w-full">
            <div className="h-full flex flex-col">
                <div className="px-4 md:px-10 py-4 md:py-7">
                    <div className="flex items-center justify-between">
                        <p tabindex="0" className="sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800">Interest List</p>
                        <div className="py-3 px-4 flex">
                            <NewInterestModal />
                        </div>
                    </div>
                </div>

                <div className="relative overflow-y-auto border">

                    {isOpen && <Table className="border border-spacing-4">
                        <thead className="mt-3 border-b text-sm uppercase bg-gray-100 sticky top-0">
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
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function InterestList() {

    const [interestList, setInterestList] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:5000/interestList')
        .then(interestList => setInterestList(interestList.data))
        .catch(err => console.log(err))
      }, []);


    return (
        <div>
            <h1>Interest List</h1>
            <br></br>

            <table>
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
                    {
                        interestList.map( (entry) => (
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
                        ))
                    }
                </tbody>
            </table>
            
        </div>
    )
}

export default InterestList;
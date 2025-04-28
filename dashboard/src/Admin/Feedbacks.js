import React, { useState, useEffect } from 'react';
import Header from './Header';
import Navbar from './Navbar';

export default function Feedbacks() {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3005/user/viewfeedback")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setFeedback(data);
            })
            .catch((error) => {
                console.error('Error fetching feedback:', error);
            });
    }, []);

    return (
        <>
            <Header />
            <div className="content">
                <Navbar />
                <div className="container-fluid pt-4 px-4">
                    <div className="bg-secondary text-center rounded p-4">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h6 className="mb-0">Users List</h6>
                            <a href="/">Show All</a>
                        </div>
                        <div className="table-responsive">
                            <table className="table text-start align-middle table-bordered table-hover mb-0">
                                <thead>
                                    <tr className="text-white">
                                        <th scope="col">Sl.No</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Description</th>
                                        <th></th>
                                        {/* <th scope="col">User ID</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {feedback.map((data, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{data.userid.email}</td>
                                            <td>{data.title}</td>
                                            <td>{data.description}</td>
                                            {/* <td>{data.userid._id}</td> */}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

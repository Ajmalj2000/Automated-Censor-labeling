import React, { useState,useEffect } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';

export default function ViewUser() {

    const [user, setUser] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      fetch('http://localhost:3005/Registration/viewuser')
        .then(res => res.json())
        .then(result => {
          console.log(result.userList);
          setUser(result.userList);
        })
        .catch(error => console.error('Error fetching:', error));
    }, []);
  
    const deleteuser = (iD) => {
      fetch('http://localhost:3005/Registration/deleteUser', {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: iD })
      })
        .then(res => res.json())
        .then(result => {
          if (result.success) {
            setUser(user.filter(user => user._id !== iD));
          } else {
            console.error('Error deleting :', result.error);
          }
        })
        .catch(error => console.error('Error deleting :', error));
    };
  
  return (
    <>
    <Header />
    <div className="content">
      <Navbar />
      <div className="container-fluid pt-4 px-4">
                <div class="bg-secondary text-center rounded p-4">
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        <h6 class="mb-0"> Users List</h6>
                        <a href="">Show All</a>
                    </div>
                    <div class="table-responsive">
                        <table class="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr class="text-white">
                                <th scope="col">Sl.No</th>
                      <th scope="col">Name</th>
                      <th scope="col">Date of birth</th>
                      <th scope="col">Address</th>
                      <th scope="col">Contact</th>
                      <th scope="col">Email</th>
                      {/* <th scope="col">Password</th> */}
                      <th scope="col">Action</th>
                      <th></th>
                                </tr>
                            </thead>
                            <tbody>
                    {user.map((data, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{data.name}</td>
                        <td>{new Date(data.dob).toLocaleDateString()}</td>
                        <td>{data.address}</td>
                        <td>{data.contact}</td>
                        <td>{data.userid.email}</td>
                        {/* <td>{data.userid.password}</td> */}
                        <td>
                          <Link to='/edituser' state={{ id: data._id }}>
                            <button className="btn btn-success me-1" type="submit">Edit</button>
                          </Link>
                        </td>
                        <td>
                          <button className="btn btn-danger me-1" onClick={() => deleteuser(data._id)}>Reject</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                        </table>
                    </div>
                </div>
    </div>
    </div>
    </>
  )
}

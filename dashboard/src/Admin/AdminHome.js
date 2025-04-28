import React, { useState,useEffect } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminHome() {

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
  return (
<>
      <Header />
      <div className="content">
        <Navbar />
        <div className="container-fluid pt-4 px-4">

        <div class="col-sm-12 col-xl-12">
                        <div class="bg-secondary rounded h-100 p-4">
                            <h2 class="mb-4">Our users</h2>
                            <table class="table table-dark ">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Full Name</th>
                                        <th scope="col">Date of Birth</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Phone no</th>
                                        <th scope="col">Email</th>
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

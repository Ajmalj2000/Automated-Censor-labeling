import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Blocked from './Blockd';

export default function Profile() {
  const [userData, setUserData] = useState({
    name: '',
    dob: '',
    contact: '',
    address: '',
    email: '',
    createdAt: '',
  });

  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("userdata")));
const userId =auth._id
  useEffect(() => {
    // Fetch user data when the component mounts
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:3005/Registration/profile/${userId}`);
        const data = await response.json();
        setUserData({
          name: data.name,
          dob: new Date(data.dob).toISOString().split('T')[0],
          contact: data.contact,
          address: data.address,
          email: data.userid.email,
          createdAt: new Date(data.createdAt).toISOString().split('T')[0],
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:3005/Registration/profile/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert('Profile updated successfully!');
      } else {
        alert('Failed to update profile.');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile.');
    }
  };

  return (
    <>
    <Blocked/>
    <Header/>
    <div>
      <div className="container rounded bg-white mt-5 mb-5 " style={{marginTop:"500px", paddingTop:"100px"}}>
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt="profile-pic"
              />
              <span className="font-weight-bold">{userData.name}</span>
              <span className="text-black-50">{userData.email}</span>
              <span>Member since: {userData.createdAt}</span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter full name"
                    name="name"
                    value={userData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-12 mt-3">
                  <label className="labels">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Enter date of birth"
                    name="dob"
                    value={userData.dob}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-12 mt-3">
                  <label className="labels">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter phone number"
                    name="contact"
                    value={userData.contact}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-12 mt-3">
                  <label className="labels">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter address"
                    name="address"
                    value={userData.address}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mt-5 text-center">
                <button className="btn profile-button" type="button" onClick={handleSubmit}>
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .form-control:focus {
            box-shadow: none;
            border-color: #FFA726; /* Orange */
          }

          .profile-button {
            background: #FFC107; /* Yellow */
            box-shadow: none;
            border: none;
          }

          .profile-button:hover {
            background: #FFB300; /* Darker Yellow */
          }

          .profile-button:focus {
            background: #FFB300;
            box-shadow: none;
          }

          .profile-button:active {
            background: #FFB300;
            box-shadow: none;
          }

          .back:hover {
            color: #FFB300;
            cursor: pointer;
          }

          .labels {
            font-size: 11px;
          }

          .add-experience:hover {
            background: #FFA726; /* Orange */
            color: #fff;
            cursor: pointer;
            border: solid 1px #FFA726;
          }
        `}
      </style>
    </div>
    <Footer/>
    </>
  );
}

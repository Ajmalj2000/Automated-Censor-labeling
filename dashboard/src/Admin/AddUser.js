import React, { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

export default function AddUser() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!dob) newErrors.dob = 'Date of Birth is required';
    if (!address) newErrors.address = 'Address is required';
    if (!contact) newErrors.contact = 'Contact Information is required';
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addUser = () => {
    if (validateForm()) {
      const params = {
        name,
        dob,
        address,
        contact,
        email,
        password,
        userstatus: 2,
        block: 0
      };

      fetch('http://localhost:3005/Registration/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      })
        .then(res => res.json())
        .then(result => {
          if (result) {
            setSuccessMessage('User added successfully!');
            setErrorMessage('');
            setTimeout(() => {
              navigate('/viewuser');
          }, 2000);
            setName('');
            setDob('');
            setAddress('');
            setContact('');
            setEmail('');
            setPassword('');
          } else {
            setErrorMessage('Error adding user. Please try again.');
            setSuccessMessage('');
          }
        })
        .catch(() => {
          setErrorMessage('Error adding user. Please try again.');
          setSuccessMessage('');
        });
        // navigate('/');

    }
  };

  return (
    <>
      <Header />
      <div className="content">
        <Navbar />
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-sm-12 col-xl-12">
              <div className="rounded h-100 p-4 bg-secondary" style={{ width: '800px', marginLeft: '10px' }}>
                <h2 className="mb-4" style={{ color: 'white', textAlign: 'center' }}>Add User Details</h2>
                {successMessage && <p className="text-success">{successMessage}</p>}
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                <form>
                  <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      {errors.name && <p className="text-danger">{errors.name}</p>}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="inputDob" className="col-sm-2 col-form-label">Date of Birth</label>
                    <div className="col-sm-10">
                      <input
                        type="date"
                        name="dob"
                        className="form-control"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                      />
                      {errors.dob && <p className="text-danger">{errors.dob}</p>}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="inputAddress" className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-10">
                      <textarea
                        name="address"
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      ></textarea>
                      {errors.address && <p className="text-danger">{errors.address}</p>}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="inputContact" className="col-sm-2 col-form-label">Contact Information</label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        name="contact"
                        className="form-control"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                      />
                      {errors.contact && <p className="text-danger">{errors.contact}</p>}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && <p className="text-danger">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {errors.password && <p className="text-danger">{errors.password}</p>}
                    </div>
                  </div>
                  <button type="button" onClick={addUser} className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

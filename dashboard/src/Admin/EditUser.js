import React, { useState, useEffect } from 'react';
import Header from './Header';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function EditUser() {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    // Utility function to format date
    function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = (`0${date.getMonth() + 1}`).slice(-2);
        const day = (`0${date.getDate()}`).slice(-2);
        return `${year}-${month}-${day}`;
    }

    


    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('http://localhost:3005/Registration/finduser', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id: location.state.id })
                });

                const result = await response.json();
                setName(result.name);
                setDob(formatDate(result.dob));  // Format the date here
                setAddress(result.address);
                setEmail(result.userid.email);
                setContact(result.contact);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
    }, [location.state.id]);

    const validateForm = () => {
        const newErrors = {};
        if (!name) newErrors.name = 'Name is required';
        if (!dob) newErrors.dob = 'Date of Birth is required';
        if (!address) newErrors.address = 'Address is required';
        if (!contact) newErrors.contact = 'Contact Information is required';
        if (!email) newErrors.email = 'Email is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const editUser = async () => {
        if (!validateForm()) return;

        try {
            const params = {
                id: location.state.id,
                name,
                dob,
                address,
                contact,
                email
            };

            const response = await fetch('http://localhost:3005/Registration/edituser', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            });

            const result = await response.json();
            if (result) {
                setMessageType('success');
                setMessage('User details updated successfully!');
                setTimeout(() => {
                    navigate('/viewuser');
                }, 2000);
            } else {
                setMessageType('error');
                setMessage('Error updating user details. Please try again.');
            }
        } catch (error) {
            console.error('Error updating user:', error);
            setMessageType('error');
            setMessage('Error updating user details. Please try again.');
        }
    };

    return (
        <>
        <Header />
        <div className="content">
          <Navbar />
          <div className="container-fluid pt-4 px-4">
                <div className="col-sm-12 col-xl-12">
                    <div className="rounded h-100 p-4 bg-secondary" style={{ width: '800px', marginLeft: '10px' }}>
                        <h2 className="mb-4" style={{ color: 'white', textAlign: 'center' }}>Edit User Details</h2>
                        {message && (
                            <div className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
                                {message}
                            </div>
                        )}
                        <form>
                            <div className="row mb-3">
                                <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input 
                                        type="text" 
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
                            <button type="button" onClick={editUser} className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
}

export default EditUser;

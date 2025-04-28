import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email || !password) {
      setMessage('Please fill in both email and password.');
      setMessageType('error');
      return false;
    }
    return true;
  };

  const logIn = (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    const params = {
      email: email,
      password: password
    };

    fetch('http://localhost:3005/Registration/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
      .then((res) => res.json())
      .then((userData) => {
        console.log(userData);

        if (userData !== 'invalid') {
          localStorage.setItem('userdata', JSON.stringify(userData));
          setMessage('Login successful! Redirecting...');
          setMessageType('success');
          setTimeout(() => {
            navigate('/');
            window.location.reload();
          }, 1000);
        } else {
          setMessage('Invalid login credentials. Please try again.');
          setMessageType('error');
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
        setMessage('An error occurred during login. Please try again later.');
        setMessageType('error');
      });
  };

  return (
    <div className="container-fluid">
      <div className="row h-100 align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
          <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <Link to="/">
                <h3 className="text-primary"><i className="fa fa-user-edit me-2"></i>Censor Labelling</h3>
              </Link>
              <h3>Sign In</h3>
            </div>
            <form onSubmit={logIn}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-4">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              {message && (
                <div className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-danger'}`}>
                  {message}
                </div>
              )}
              <button type="submit" className="btn btn-primary py-3 w-100 mb-4">Sign In</button>
            </form>
            {/* <p className="text-center mb-0">Don't have an Account? <Link to="/register">Sign Up</Link></p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

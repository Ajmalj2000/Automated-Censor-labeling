import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loginStatus, setLoginStatus] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!email) {
      formErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!password) {
      formErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const logIn = (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    let params = {
      email: email,
      password: password
    };

    fetch('http://localhost:3005/Registration/login', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(params)
    })
      .then((res) => res.json())
      .then((userData) => {
        console.log(userData);

        if (userData === 'invalid') {
          setLoginStatus('Invalid credentials');
        } else if (userData.userstatus !== 2) {
          setLoginStatus('Invalid user ');
        } else {
          localStorage.setItem('userdata', JSON.stringify(userData));
          setLoginStatus('Successfully logged in!');
          setTimeout(() => {
            navigate('/');
            window.location.reload();
          }, 1000);
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
        setLoginStatus('An error occurred during login.');
      });
  };

  return (
    <>
      <section className="text-center text-lg-start">
        <style>
          {`
            .cascading-right {
              margin-right: -50px;
            }

            @media (max-width: 991.98px) {
              .cascading-right {
                margin-right: 0;
              }
            }
          `}
        </style>

        <div className="container py-4">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card cascading-right bg-body-tertiary" style={{ backdropFilter: 'blur(30px)' }}>
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">Sign In now</h2>
                  {loginStatus && <div className="text-center text-danger">{loginStatus}</div>}

                  <form onSubmit={logIn}>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example3">Email address</label>
                      {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example4">Password</label>
                      {errors.password && <div className="text-danger">{errors.password}</div>}
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-4">
                      Sign In
                    </button>

                   
                    <p className="text-center mb-0" style={{ color: 'black' }}>
                      Don't have an Account? <Link to="/register">Sign Up</Link>
                    </p>

                    <div className="text-center">
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0">
              <img
                src="/img/img/headphones-4223911_1280.jpg"
                className="w-100 rounded-4 shadow-4"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

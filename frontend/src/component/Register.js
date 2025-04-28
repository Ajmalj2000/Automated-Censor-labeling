import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};

    // Name validation
    if (!name.trim()) {
      validationErrors.name = "Name is required";
    }

    // Email validation
    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is invalid";
    }

    // Password validation
    if (!password.trim()) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
    }

    if (Object.keys(validationErrors).length === 0) {
      const data = {
        name: name,
        email: email,
        password: password,
        dob: 0,
        address: 'xxxx',
        contact: '0000000000',
        userstatus: 2,
        block:0
      };

      fetch("http://localhost:3005/Registration/register", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setSuccessMessage("Registration successful!");
          setErrorMessage("");
          setName("");
          setEmail("");
          setPassword("");
          setTimeout(() => {
            navigate('/');
          }, 2000);
        } else {
          setErrorMessage("Registration failed. Please try again.");
          setSuccessMessage("");
        }
      })
      .catch((error) => {
        console.error("Error registering user:", error);
        setErrorMessage("Error registering user. Please try again.");
        setSuccessMessage("");
      });
    } else {
      setErrors(validationErrors);
      setErrorMessage("Please fix the errors in the form.");
      setSuccessMessage("");
    }
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
              <div
                className="card cascading-right bg-body-tertiary"
                style={{ backdropFilter: 'blur(30px)' }}
              >
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">Sign Up now</h2>
                  {successMessage && <div className="alert alert-success">{successMessage}</div>}
                  {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input 
                        type="text" 
                        id="form3Example1" 
                        className="form-control" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example1">Name</label>
                      {errors.name && <div className="text-danger">{errors.name}</div>}
                    </div>

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
                      Sign Up
                    </button>
                    <p className="text-center mb-0" style={{ color: 'black' }}>Already have an Account?
                      <Link to="/login">Sign In</Link>
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

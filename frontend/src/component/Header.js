import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Header() {
  const  navigate = useNavigate()

  const logout = () => {
    localStorage.clear();
    setTimeout(() => {
      navigate('/');
      window.location.reload();
    }, 100);
  };
  
  return (
    <React.Fragment>
      <div className="container-fluid fixed-top px-0">
        <div className="container px-0">
          <div className="topbar">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-8">
                <div className="topbar-info d-flex flex-wrap">
                  <a href="#" className="text-light me-4">
                    <i className="fas fa-envelope text-white me-2"></i>
                    sgv5549@gmail.com
                  </a>
                  <a href="#" className="text-light">
                    <i className="fas fa-phone-alt text-white me-2"></i>
                    +91 9605498474
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="topbar-icon d-flex align-items-center justify-content-end">
                  <a href="#" className="btn-square text-white me-2">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="btn-square text-white me-2">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="btn-square text-white me-2">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="btn-square text-white me-2">
                    <i className="fab fa-pinterest"></i>
                  </a>
                  <a href="#" className="btn-square text-white me-0">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-light bg-light navbar-expand-xl">
            <a href="index.html" className="navbar-brand ms-3">
              <h1 className="text-primary display-5">Censor Labeling</h1>
            </a>
            <button
              className="navbar-toggler py-2 px-3 me-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars text-primary"></span>
            </button>
            <div className="collapse navbar-collapse bg-light" id="navbarCollapse">
              <div className="navbar-nav ms-auto">
                <a href="/" className="nav-item nav-link active">Home</a>
                <a href="/viewvideo" className="nav-item nav-link">Videos</a>
                <a href="/profile" className="nav-item nav-link">
  <i className="fa fa-user">Profile</i>
</a>
                <a href="/addfeedback" className="nav-item nav-link">Feedback</a>
                {/* <a href="events.html" className="nav-item nav-link">Events</a> */}
               
                {/* <a href="/contact" className="nav-item nav-link">Contact</a> */}
              </div>
              <div className="d-flex align-items-center flex-nowrap pt-xl-0" style={{ marginLeft: '15px' }}>
                <a href="/" className="btn-hover-bg btn btn-primary text-white py-2 px-4 me-3" onClick={logout}> Logout</a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      
    </React.Fragment>
  );
}

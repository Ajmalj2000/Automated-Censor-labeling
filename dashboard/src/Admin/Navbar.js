import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("userdata")));
  const  navigate = useNavigate()

   const logout = () => {
    localStorage.clear();
    setTimeout(() => {
      navigate('/');
      window.location.reload();
    }, 100);
    
  };
  return (
    <>
      <nav className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
        <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
          <h2 className="text-primary mb-0"><i className="fa fa-user-edit"></i></h2>
        </a>
        <a href="#" className="sidebar-toggler flex-shrink-0">
          <i className="fa fa-bars"></i>
        </a>
        {/* <form className="d-none d-md-flex ms-4">
          <input className="form-control bg-dark border-0" type="search" placeholder="Search" />
        </form> */}
        <div className="navbar-nav align-items-center ms-auto">
          <div className="nav-item dropdown">
            {/* <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fa fa-envelope me-lg-2"></i>
              <span className="d-none d-lg-inline-flex">Message</span>
            </a> */}
            {/* <ul className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
              <li>
                <a href="#" className="dropdown-item">
                  <div className="d-flex align-items-center">
                    <img className="rounded-circle" src="img/user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
                    <div className="ms-2">
                      <h6 className="fw-normal mb-0">John sent you a message</h6>
                      <small>15 minutes ago</small>
                    </div>
                  </div>
                </a>
              </li>
              <hr className="dropdown-divider" />
              <li>
                <a href="#" className="dropdown-item">
                  <div className="d-flex align-items-center">
                    <img className="rounded-circle" src="img/user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
                    <div className="ms-2">
                      <h6 className="fw-normal mb-0">John sent you a message</h6>
                      <small>15 minutes ago</small>
                    </div>
                  </div>
                </a>
              </li>
              <hr className="dropdown-divider" />
              <li>
                <a href="#" className="dropdown-item">
                  <div className="d-flex align-items-center">
                    <img className="rounded-circle" src="img/user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
                    <div className="ms-2">
                      <h6 className="fw-normal mb-0">John sent you a message</h6>
                      <small>15 minutes ago</small>
                    </div>
                  </div>
                </a>
              </li>
              <hr className="dropdown-divider" />
              <li>
                <a href="#" className="dropdown-item text-center">See all messages</a>
              </li>
            </ul> */}
          </div>
          <div className="nav-item dropdown">
            {/* <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fa fa-bell me-lg-2"></i>
              <span className="d-none d-lg-inline-flex">Notification</span>
            </a> */}
            {/* <ul className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
              <li>
                <a href="#" className="dropdown-item">
                  <h6 className="fw-normal mb-0">Profile updated</h6>
                  <small>15 minutes ago</small>
                </a>
              </li>
              <hr className="dropdown-divider" />
              <li>
                <a href="#" className="dropdown-item">
                  <h6 className="fw-normal mb-0">New user added</h6>
                  <small>15 minutes ago</small>
                </a>
              </li>
              <hr className="dropdown-divider" />
              <li>
                <a href="#" className="dropdown-item">
                  <h6 className="fw-normal mb-0">Password changed</h6>
                  <small>15 minutes ago</small>
                </a>
              </li>
              <hr className="dropdown-divider" />
              <li>
                <a href="#" className="dropdown-item text-center">See all notifications</a>
              </li>
            </ul> */}
          </div>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img className="rounded-circle me-lg-2" src="img/user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
              <span className="d-none d-lg-inline-flex">{auth.user.name}</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
              {/* <li><a href="#" className="dropdown-item">My Profile</a></li>
              <li><a href="#" className="dropdown-item">Settings</a></li> */}
              <li><a href="#" className="dropdown-item" onClick={logout}>Log Out</a></li>
            </ul>
          </div>
        </div>
      </nav>

           </>
  );
}

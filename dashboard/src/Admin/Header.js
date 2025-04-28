import React, { useState } from 'react';

export default function Header() {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("userdata")));
  console.log(auth);

  return (
    <>
      {auth.userstatus === 0 && (
        <div className="sidebar pe-4 pb-3">
          <nav className="navbar bg-secondary navbar-dark">
            <a href="index.html" className="navbar-brand mx-4 mb-3">
              <h3 className="text-primary"><i className="fa fa-user-edit me-2"></i>Censor Labelling</h3>
            </a>
            <div className="d-flex align-items-center ms-4 mb-4">
              <div className="position-relative">
                <img className="rounded-circle" src="img/user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
                <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
              </div>
              <div className="ms-3">
                <h6 className="mb-0">{auth.user.name}</h6>
                <span>Admin</span>
              </div>
            </div>
            <div className="navbar-nav w-100">
              <a href="/" className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</a>
              <a href="/adduser" className="nav-item nav-link"><i className="fa fa-th me-2"></i>Add user</a>
              <a href="/viewuser" className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>User</a>
              <a href="/viewvideo" className="nav-item nav-link"><i className="fa fa-table me-2"></i>Videos</a>
              {/* <a href="/viewfeedback" className="nav-item nav-link"><i className="fa fa-chart-bar me-2"></i>Fees</a> */}
              <a href="/feedbacks" className="nav-item nav-link"><i className="fa fa-chart-bar me-2"></i>Feedbacks</a>

            </div>
          </nav>
        </div>
      )}
      
      {auth.userstatus === 1 && (
        <div className="sidebar pe-4 pb-3">
          <nav className="navbar bg-secondary navbar-dark">
            <a href="index.html" className="navbar-brand mx-4 mb-3">
              <h3 className="text-primary"><i className="fa fa-user-edit me-2"></i>Censor Labelling</h3>
            </a>
            <div className="d-flex align-items-center ms-4 mb-4">
              <div className="position-relative">
                <img className="rounded-circle" src="img/user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
                <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
              </div>
              <div className="ms-3">
                <h6 className="mb-0">{auth.user.name}</h6>
                <span>{auth.user.name}</span>
              </div>
            </div>
            <div className="navbar-nav w-100">
              <a href="/" className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</a>
              <a href="/video" className="nav-item nav-link"><i className="fa fa-table me-2"></i>Videos</a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './Admin/Register';
import Header from './Admin/Header';
import AdminHome from './Admin/AdminHome';
import Navbar from './Admin/Navbar';
import Login from './Admin/Login';
import AddUser from './Admin/AddUser';
import ViewUser from './Admin/ViewUser';
import EditUser from './Admin/EditUser';
import Videos from './Censor/Videos';

import Feedbacks from './Admin/Feedbacks';
import ViewVideo from './Admin/ViewVideo';


function App() {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("userdata")));

  return (
    <BrowserRouter>
      <Routes>
        {auth === null ? (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/header" element={<Header />} />
            <Route path="/landing" element={<AdminHome />} />
            <Route path="/nav" element={<Navbar />} />
            <Route path='/register' element={<Register/>}/>
          </>
        ) : (
          <>
            {auth.userstatus === 0 ? (
              <>
                <Route path="/" element={<AdminHome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/header" element={<Header />} />
                <Route path="/nav" element={<Navbar />} />
                <Route path="/adduser" element={<AddUser />} />
                <Route path="/viewuser" element={<ViewUser />} />
                <Route path="/edituser" element={<EditUser />} />
                {/* <Route path="/viewvideo" element={<ViewVideo />} /> */}
                <Route path="/feedbacks" element={<Feedbacks />} />
               <Route path='/viewvideo' element={<ViewVideo/>}/>

              </>
            ) : auth.userstatus === 1 ? (
              <>
                <Route path="/login" element={<Login />} />
                <Route path="/header" element={<Header />} />
                <Route path="/" element={<AdminHome />} />
                <Route path="/nav" element={<Navbar />} />
                <Route path="/video" element={<Videos />} />


              </>
            ) : (
              <>
                 <Route path="/" element={<Login />} />

              </>
            )}
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Register from './component/Register';
// import Footer from './component/Footer';
// import Header from './component/Header';
// import Landing from './component/Landing';
// import About from './component/About';
// import Login from './component/Login';
// import AddVideo from './component/AddVideo';
// import Viewvideo from './component/ViewVideo';
// import UserHome from './component/UserHome';
// import EditVideo from './component/EditVideo';
// import Contact from './component/Contact';
// import Addfeedback from './component/Addfeedback';
// import Profile from './component/Profile';
// import Blocked from './component/Blocked';

// function App() {
//   const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("userdata")));

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("userdata"));
//     if (storedUser) {
//       setAuth(storedUser);
//     }
//   }, []);

//   // Handle user blocking
//   useEffect(() => {
//     if (auth && auth.block === 1) {
//       // If user is blocked, remove auth data from localStorage and redirect to login
//       localStorage.setItem("userdata");
//       setAuth(null);
//       window.location.href = "/login"; // Redirect to login or any error page
//     }
//   }, [auth]);

//   return (
//     <BrowserRouter>
//       <Routes>
//         {auth == null ? (
//           <>
//             <Route path="/" element={<Landing />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/footer" element={<Footer />} />
//             <Route path="/header" element={<Header />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/contact" element={<Contact />} />
//           </>
//         ) : (
//           <>
//             {auth.userstatus === 2 && (
//               <>
//                 <Route path="/" element={<UserHome />} />
//                 <Route path="/header" element={<Header />} />
//                 <Route path="/addvideo" element={<AddVideo />} />
//                 <Route path='/viewvideo' element={<Viewvideo/>}/>
//                 <Route path="/editvideo/:id" element={<EditVideo />} />
//                 <Route path='/addfeedback' element={<Addfeedback/>}/>
//                 <Route path="/profile" element={<Profile />} />
//                 <Route path="/block" element={<Blocked />} />

//               </>
//             )}
//             <>
//               <Route path="/" element={<Landing />} />
//               <Route path="/register" element={<Register />} />
//               <Route path="/footer" element={<Footer />} />
//               <Route path="/header" element={<Header />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/contact" element={<Contact />} />
//             </>          
//           </>
//         )}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;











import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './component/Register';
import Footer from './component/Footer';
import Header from './component/Header';
import Landing from './component/Landing';
import About from './component/About';
import Login from './component/Login';
import AddVideo from './component/AddVideo';
import Viewvideo from './component/ViewVideo';
import UserHome from './component/UserHome';
import EditVideo from './component/EditVideo';
import Contact from './component/Contact';
import Addfeedback from './component/Addfeedback';
import Profile from './component/Profile';
import Blocked from './component/Blockd';

function App() {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("userdata")));

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userdata"));
    if (storedUser) {
      setAuth(storedUser);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {auth == null ? (
          <>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/header" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />

          </>
        ) : (
          <>
            {auth.userstatus === 2 && (
              <>
                <Route path="/" element={<UserHome />} />
                <Route path="/header" element={<Header />} />
                <Route path="/addvideo" element={<AddVideo />} />
                <Route path='/viewvideo' element={<Viewvideo/>}/>
                <Route path="/editvideo/:id" element={<EditVideo />} />
                <Route path='/addfeedback' element={<Addfeedback/>}/>
                <Route path="/profile" element={<Profile />} />
                <Route path='/blocked' element={<Blocked/>}/>


              </>
            )}
            {/* Add more authenticated routes here */}
<>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/header" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
</>          
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;



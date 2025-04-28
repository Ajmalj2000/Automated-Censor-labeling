import React, { useState, useEffect } from 'react';

export default function Blocked() {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('userdata')));
  const [user, setUser] = useState('');

  useEffect(() => {
    if (auth) {
      fetch('http://localhost:3005/Registration/userDatas', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: auth._id }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((result) => {
          console.log(result,"userData");
          setUser(result);
          if (result.userid.userstatus === 5) {
           alert("You are blockeed by admin")
            localStorage.removeItem("userdata");
            setAuth(null);
            window.location.href = '/login'; 
            // window.location.reload();
          }
        })
        .catch((error) => console.error('Error fetching:', error));
    }
  }, [auth]);
  
  return <div></div>;
}
import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Blocked from './Blockd';


function Addfeedback() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
const navigate= useNavigate()

const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("userdata")));



    const Addfeedback = () => {
        navigate('/')

        let params = {
            title: title,
            description: description,
            userid:auth._id,
            email:auth.email

        }

        fetch('http://localhost:3005/user/addfeedback', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                alert("Feedback added successfully")
            });
    };

    return (
        <>
        <Blocked/>
        <Header/>
        <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
      <h3 className="text-white display-3 mb-4">Add your feedbacks </h3>
      <p className="fs-5 text-white mb-4">
        {/* Help today because tomorrow you may be the one who needs more helping! */}
      </p>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item"><a href="/">Home</a></li>
        {/* <li className="breadcrumb-item"><a href="#">Pages</a></li> */}
        <li className="breadcrumb-item active text-white">feedback</li>
      </ol>
    </div>
  </div>
      
         
          <div className="container-fluid pt-4 px-4" >
          <div className="col-sm-12 col-xl-12">
                        <div className=" rounded h-100 p-4">
                            <h2 className="mb-5" style={{marginLeft:"300px"}}>Add Feedback </h2>
                            <div style={{width:"700PX", marginLeft:"300px"}}>
                   
           
                                <div className="row mb-3">
                                    <label for="inputEmail3" className="col-sm-2 col-form-label">Subject</label>
                                    <div className="col-sm-10">
                                        <input type="text" name='title' className="form-control"
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label for="inputEmail3" className="col-sm-2 col-form-label">Description</label>
                                    <div className="col-sm-10">
                                        <textarea name='description' className="form-control"
                                            onChange={(e) => setDescription(e.target.value)}
                                        ></textarea>
                                    </div>
                                </div>

                                <button type="button" onClick={Addfeedback} className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
        </>
    )
}

export default Addfeedback
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Addvideo.css'; 
import Header from './Header';
import Footer from './Footer';
import Blocked from './Blockd';

function AddVideo() {
    const [video, setVideo] = useState(null);
    const [category, setCategory] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();
    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('userdata')));

    const addVideos = () => {
        if (!category || !video) {
            setErrorMessage('Please fill in all fields');
            return;
        }

        const formData = new FormData();
        formData.append('email', auth.email);
        formData.append('video', video);
        formData.append('userid', auth._id);
        formData.append('category', category);

        fetch('http://localhost:3005/User/addvideo', {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(result => {
                if (result.error) {
                    setErrorMessage(result.error);
                    setSuccessMessage('');
                    setTimeout(() => {
                        navigate('/viewvideo');
                    }, 2000);
                } else {
                    setErrorMessage('');
                    setSuccessMessage('Video added successfully!');
                    setTimeout(() => {
                        navigate('/viewvideo');
                    }, 2000);
                    // Optionally, you can navigate to another page after successful upload
                    // navigate('/');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                setErrorMessage('An error occurred while uploading the video.');
                setSuccessMessage('');
            });
    };

    return (
        <>
        <Blocked/>
            <Header/>
            <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h3 className="text-white display-3 mb-4">Upload video</h3>
          <p className="fs-5 text-white mb-4">
            {/* Help today because tomorrow you may be the one who needs more helping! */}
          </p>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Pages</a></li>
            <li className="breadcrumb-item active text-white">Upload video</li>
          </ol>
        </div>
      </div>
            <div className="container-fluid pt-4 px-4">
                <div className="row">
                    <div className="col-sm-12 col-xl-6 mt-5">
                        <div className="rounded h-100 p-4 mt-5">
                            <h3 className="mb-4 text-center" style={{color: "black"}}>Upload New Video</h3>
                            <form encType='multipart/form-data'>
                                <div className="mb-3">
                                    <label htmlFor="inputCategory" className="form-label">Category</label>
                                    <input
                                        type="text"
                                        name="category"
                                        className="form-control"
                                        onChange={(e) => setCategory(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputVideo" className="form-label">Video</label>
                                    <input
                                        type="file"
                                        name="video"
                                        className="form-control"
                                        onChange={(e) => setVideo(e.target.files[0])}
                                    />
                                </div>
                                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                                {successMessage && <div className="alert alert-success">{successMessage}</div>}
                                <button type="button" onClick={addVideos} className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-5">
                        <img
                            src="/img/img/headphones-4223911_1280.jpg"
                            className="w-100 rounded-4 shadow-4"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default AddVideo;

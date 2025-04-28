import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";

export default function ViewVideo() {
    const [videos, setVideos] = useState([]);
    const navigate = useNavigate();
    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("userdata")));

    useEffect(() => {
        fetch('http://localhost:3005/user/viewvideo')
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setVideos(result); // Assuming result is an array of video objects
            })
            .catch(error => console.error('Error fetching videos:', error));
    }, []);

    const blockUser = (id) => {
        fetch('http://localhost:3005/Registration/blockuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    alert('Error blocking user');
                } else {
                    alert('User blocked successfully');
                    // Optionally, refresh the video list or handle UI update here
                    // setVideos(prevVideos => prevVideos.filter(video => video.user._id !== id));
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error blocking user');
            });
    };

    return (
        <>
            <Header />
            <div className="content">
                <Navbar />
                <div className="container-fluid pt-4 px-4">
                    <div className="bg-secondary text-center rounded p-4">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h6 className="mb-0">Video Uploaded by User</h6>
                            <a href="/">Show All</a>
                        </div>
                        <div className="table-responsive">
                            <table className="table text-start align-middle table-bordered table-hover mb-0">
                                <thead>
                                    <tr className="text-white">
                                        <th scope="col">Sl.No</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Video</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {videos.map((data, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{data.category}</td>
                                            <td>{data.email}</td>
                                            <td>
                                                <video
                                                    width="350"
                                                    height="150"
                                                    controls
                                                    onError={(e) => {
                                                        console.error(`Error loading video: ${data.video}`, e);
                                                        alert(`Error loading video: ${data.video}`);
                                                    }}
                                                >
                                                    <source
                                                        src={`http://localhost:3005/video/${data.video}`}
                                                        type="video/mp4"
                                                    />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </td>
                                            <td>
                                            {data.userid.userstatus === 2 ? (
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger"
                                                        onClick={() => blockUser(data.userid._id)}
                                                    >
                                                        Block User
                                                    </button>
                                                ) : (
                                                    <span className="text-muted">Blocked</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

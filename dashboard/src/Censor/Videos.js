import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Admin/Header";
import Navbar from "../Admin/Navbar";

export default function Videos() {
    const [videos, setVideos] = useState([]);
    console.log(videos,"video")
    const [isProcessing, setIsProcessing] = useState('');
    const navigate = useNavigate();
    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("userdata")));
    const BACKEND_PATH = 'D:\\CensorLabel\\backend_censor\\public\\video\\'
    const [refresh, setRefresh] = useState(0)

    useEffect(() => {
        fetch('http://localhost:3005/user/viewvideo')
            .then(res => res.json())
            .then(result => {
                console.log(result);
                // Filter videos where user.block is 0
                const filteredVideos = result.filter(video => video.userid.block === 0);
                setVideos(filteredVideos);
            })
            .catch(error => console.error('Error fetching:', error));
    }, [refresh]);

    const handleCensor = (videoData) => {
        setIsProcessing(videoData._id)
        fetch('http://127.0.0.1:5000/process-video', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ videoPath: BACKEND_PATH + videoData.video, id: videoData._id }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('dataaaaaaaaaaaa', data)
                setIsProcessing('')
                setRefresh(prev => prev + 1)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
    const convertToAVI = (path) => {
        let patharr = path.split('.')
        let pathname = patharr[0]
        let newpath = pathname + '.avi'
        return `http://localhost:3005/video/output/${newpath}`
    }
    function fileExists(url) {
        var http = new XMLHttpRequest();
        http.open('HEAD', url + '.avi', false);
        http.send();
        return http.status != 404;
    }

    return (
        <>
            <Header />
            <div className="content">
                <Navbar />
                <div className="container-fluid pt-4 px-4">
                    <div className="bg-secondary text-center rounded p-4">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h6 className="mb-0">Video Uploaded by User</h6>
                            <a href="">Show All</a>
                        </div>
                        <div className="table-responsive">
                            <table className="table text-start align-middle table-bordered table-hover mb-0">
                                <thead>
                                    <tr className="text-white">
                                        <th scope="col">Sl.No</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Video</th>
                                        <th scope="col">Censored Video</th>
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
                                                {
                                                    fileExists('http://localhost:3005/video/output/' + data._id) ? (

                                                        <a
                                                            href={convertToAVI(data._id)}
                                                            download
                                                            className="btn btn-success"
                                                        >Download🤞</a>
                                                    ) : (<></>)
                                                }

                                            </td>
                                            <td>
                                                <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    disabled={isProcessing==data._id}
                                                    onClick={() => handleCensor(data)}
                                                >
                                                    {isProcessing!=data._id ? 'Censor' : 'Processing...'}
                                                </button>
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

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Blocked from './Blockd';

function EditVideo() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [category, setCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch('http://localhost:3005/user/getVideo', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id }),
        });
        const result = await response.json();
        setVideo(result.video);
        setCategory(result.category);
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    fetchVideo();
  }, [id]);

  const updateVideo = async () => {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('category', category);
    if (videoFile) {
      formData.append('video', videoFile);
    }

    try {
      const response = await fetch('http://localhost:3005/user/updateVideo', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        navigate('/viewvideo');
      } else {
        setErrorMessage(result.error);
      }
    } catch (error) {
      console.error('Error updating video:', error);
    }
  };

  if (!video) return <div>Loading...</div>;

  return (
    <>
    <Blocked/>
      <Header />
      <div className="add-video-container">
        <div className="container-fluid pt-4 px-4">
          <div className="col-sm-12 col-xl-12">
            <div className="rounded h-100 p-4 w-75" style={{ marginLeft: "200px" }}>
              <h3 className="mb-4" style={{ marginLeft: "300px", color: "black" }}>Edit Video</h3>
              <form encType='multipart/form-data'>
                <div className="row mb-3">
                  <label htmlFor="inputCategory" className="col-sm-2 col-form-label">Category</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="category"
                      value={category}
                      className="form-control"
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="oldVideo" className="col-sm-2 col-form-label">Current Video</label>
                  <div className="col-sm-10">
                    <video width="320" height="240" controls>
                      <source src={`http://localhost:3005/video/${video}`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputVideo" className="col-sm-2 col-form-label">New video</label>
                  <div className="col-sm-10">
                    <input
                      type="file"
                      name="video"
                      className="form-control"
                      onChange={(e) => setVideoFile(e.target.files[0])}
                    />
                  </div>
                </div>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                <button type="button" onClick={updateVideo} className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EditVideo;

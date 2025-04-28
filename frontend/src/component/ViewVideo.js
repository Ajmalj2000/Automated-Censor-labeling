// import React, { useState, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import Header from "./Header";
// import Footer from "./Footer";

// function Viewvideo() {
//   const [videos, setVideos] = useState([]);
//   const navigate = useNavigate();
//   const auth = JSON.parse(localStorage.getItem("userdata"));

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await fetch("http://localhost:3005/user/viewvideos", {
//           method: "POST",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ id: auth._id }),
//         });
//         const result = await response.json();
//         setVideos(result);
//       } catch (error) {
//         console.error("Error fetching videos:", error);
//       }
//     };

//     fetchVideos();
//   }, [auth._id]);

//   const deletevideo = (iD) => {
//     fetch("http://localhost:3005/User/DeleteVideo", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ id: iD }),
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         // Handle successful deletion
//         setVideos(videos.filter((video) => video._id !== iD));
//       })
//       .catch((error) => console.error("Error deleting:", error));
//   };

//   const editvideo = (iD) => {
//     navigate(`/editvideo/${iD}`);
//   };

//   const convertToAVI = (path) => {
//     let patharr = path.split('.')
//     let pathname = patharr[0]
//     let newpath = pathname + '.avi'
//     return `http://localhost:3005/video/output/${newpath}`
//   }

//   return (
//     <>
//       <Header />
//       <div className="container-fluid bg-breadcrumb">
//         <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
//           <h3 className="text-white display-3 mb-4">Uploaded Videos</h3>
//           <p className="fs-5 text-white mb-4">
//             {/* Help today because tomorrow you may be the one who needs more helping! */}
//           </p>
//           <ol className="breadcrumb justify-content-center mb-0">
//             <li className="breadcrumb-item"><a href="index.html">Home</a></li>
//             <li className="breadcrumb-item"><a href="#">Pages</a></li>
//             <li className="breadcrumb-item active text-white">Add video</li>
//           </ol>
//         </div>
//       </div>

//       {auth.block === 1 && (
//         <div className="container text-center py-4 bg-danger text-white">
//           <p className="mb-0">You are blocked. You cannot add any videos.</p>
//         </div>
//       )}

//       {auth.block === 0 && (
//         <div className="text-center mb-3 mt-5 d-flex justify-content-center">
//           <Link to='/addvideo'>
//             <button className="btn btn-warning btn-lg" type="submit">Upload Video</button>
//           </Link>
//         </div>
//       )}

//       <div className="view-videos-container" style={{ marginTop: "20px" }}>
//         <div className="container-fluid pt-4 px-4">
//           <div className="row g-4">
//             <div className="col-sm-12 col-xl-12">
//               <div className="view-videos-content rounded h-100 p-4">
//                 <div id="introduction" className="cards-1" style={{ marginBottom: "10px" }}>
//                   <div className="container">
//                     <div className="row">
//                       <div className="col-lg-12">
//                         <h2 className="h2-heading">Uploaded videos</h2>
//                         <p className="p-heading" style={{ color: "gray" }}>
//                           {/* Increasing impression interested expression he my at. Respect invited request charmed me warrant to. Expect no more pretty as do though so genius afraid cousin */}
//                         </p>
//                       </div>
//                     </div>
//                     <div className="row">
//                       {videos.map((data, index) => (
//                         <div className="col-lg-6" key={index}>
//                           <div className="card">
//                             <div className="card-icon m-5">
//                               <video
//                                 width="520"
//                                 height="300"
//                                 controls
//                                 onError={(e) => {
//                                   console.error(`Error loading video: ${data.video}`);
//                                   // alert(`Error loading video: ${data.video}`);
//                                 }}
//                               >
//                                 <source
//                                   src={`http://localhost:3005/video/${data.video}`}
//                                   type="video/mp4"
//                                 />
//                                 Your browser does not support the video tag.
//                               </video>
//                             </div>
//                             <div className="card-body justifycontent" style={{ padding: "30px" }}>
//                               <h4 className="card-title">{data.category}</h4>
//                               <button
//                                 className="btn btn-secondary btn-lg m-2"
//                                 onClick={() => editvideo(data._id)}
//                               >
//                                 Update
//                               </button> &nbsp;
//                               <button
//                                 className="btn btn-danger btn-lg m-2"
//                                 onClick={() => deletevideo(data._id)}
//                               >
//                                 Delete
//                               </button>
//                               &nbsp;
//                               {data.aviAvailable && (
//                                 <a
//                                   href={convertToAVI(data.video)}
//                                   download
//                                   className="btn btn-success btn-lg"
//                                 >
//                                   Download
//                                 </a>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default Viewvideo;







import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Blocked from "./Blockd";

function Viewvideo() {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("userdata"));

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://localhost:3005/user/viewvideos", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: auth._id }),
        });
        const result = await response.json();
        setVideos(result);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [auth._id]);

  const deletevideo = (iD) => {
    fetch("http://localhost:3005/User/DeleteVideo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: iD }),
    })
      .then((res) => res.json())
      .then((result) => {
        setVideos(videos.filter((video) => video._id !== iD));
      })
      .catch((error) => console.error("Error deleting:", error));
  };

  const editvideo = (iD) => {
    navigate(`/editvideo/${iD}`);
  };

  const convertToAVI = (path) => {
    let patharr = path.split(".");
    let pathname = patharr[0];
    let newpath = pathname + ".avi";

    return `http://localhost:3005/video/output/${newpath}`;
  };


  function fileExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url + '.avi', false);
    http.send();
    return http.status != 404;
}

  return (
    <>
    <Blocked/>
      <Header />
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h3 className="text-white display-3 mb-4">Uploaded Videos</h3>
          <p className="fs-5 text-white mb-4"></p>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            {/* <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li> */}
            <li className="breadcrumb-item active text-white">Add video</li>
          </ol>
        </div>
      </div>

      {auth.block === 1 && (
        <div className="container text-center py-4 bg-danger text-white">
          <p className="mb-0">You are blocked. You cannot add any videos.</p>
        </div>
      )}

      {auth.block === 0 && (
        <div className="text-center mb-3 mt-5 d-flex justify-content-center">
          <Link to="/addvideo">
            <button className="btn btn-warning btn-lg" type="submit">
              Upload Video
            </button>
          </Link>
        </div>
      )}

      <div className="view-videos-container" style={{ marginTop: "20px" }}>
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-sm-12 col-xl-12">
              <div className="view-videos-content rounded h-100 p-4">
                <div id="introduction" className="cards-1" style={{ marginBottom: "10px" }}>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <h2 className="h2-heading">Uploaded videos</h2>
                        <div className="marquee-container">
                          <h5 className="text-success marquee">
                            The censored video is available for download. Please use the
                            download button to proceed.
                          </h5>
                        </div>
                        <p className="p-heading" style={{ color: "gray" }}></p>
                      </div>
                    </div>
                    <div className="row m-5 ">
                      {videos.map((data, index) => (
                        <div className="col-lg-6" key={index}>
                          <div className="card">
                            <div className="card-icon m-5">
                              <video
                                width="420"
                                height="300"
                                controls
                                onError={(e) => {
                                  console.error(`Error loading video: ${data.video}`);
                                }}
                              >
                                <source
                                  src={`http://localhost:3005/video/${data.video}`}
                                  type="video/mp4"
                                />
                                Your browser does not support the video tag.
                              </video>
                            </div>
                            <div className="card-body justifycontent" style={{ padding: "30px" }}>
                              <h4 className="card-title">{data.category}</h4>
                              {
                                fileExists('http://localhost:3005/video/output/' + data._id) ? (

                                  <></>
                                ) : (<>
                                <button
                                className="btn btn-secondary btn-lg m-2"
                                onClick={() => editvideo(data._id)}
                              >
                                Update
                              </button>{" "}
                                </>)
                              }
                              
                              &nbsp;
                              <button
                                className="btn btn-danger btn-lg m-2"
                                onClick={() => deletevideo(data._id)}
                              >
                                Delete
                              </button>
                              &nbsp;
                              {
                                fileExists('http://localhost:3005/video/output/' + data._id) ? (

                                  <a
                                    href={convertToAVI(data._id)}
                                    download
                                    className="btn btn-success"
                                  >Download🤞</a>
                                ) : (<></>)
                              }

                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Internal CSS for marquee */}
      <style>
        {`
          .marquee-container {
            overflow: hidden;
            white-space: nowrap;
          }
          
          .marquee {
            display: inline-block;
            animation: marquee 25s linear infinite;
          }
          
          @keyframes marquee {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </>
  );
}

export default Viewvideo;

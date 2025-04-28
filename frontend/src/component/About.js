import React from 'react';
import Footer from './Footer';

export default function About() {
  return (
    <>
     <React.Fragment>
      <div className="container-fluid fixed-top px-0">
        <div className="container px-0">
          <div className="topbar">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-8">
                <div className="topbar-info d-flex flex-wrap">
                  <a href="/contact" className="text-light me-4">
                    <i className="fas fa-envelope text-white me-2"></i>
                    censorlabel@gmail.com
                  </a>
                  <a href="/contact" className="text-light">
                    <i className="fas fa-phone-alt text-white me-2"></i>
                    +91 7852416390
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="topbar-icon d-flex align-items-center justify-content-end">
                  <a href="https://facebook.com" className="btn-square text-white me-2">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com" className="btn-square text-white me-2">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://instagram.com" className="btn-square text-white me-2">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://pinterest.com" className="btn-square text-white me-2">
                    <i className="fab fa-pinterest"></i>
                  </a>
                  <a href="https://linkedin.com" className="btn-square text-white me-0">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-light bg-light navbar-expand-xl">
            <a href="/" className="navbar-brand ms-3">
              <h1 className="text-primary display-5">Censor Labeling</h1>
            </a>
            <button
              className="navbar-toggler py-2 px-3 me-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars text-primary"></span>
            </button>
            <div className="collapse navbar-collapse bg-light" id="navbarCollapse">
              <div className="navbar-nav ms-auto">
                <a href="/" className="nav-item nav-link active">Home</a>
                <a href="/about" className="nav-item nav-link">About</a>
                <a href="/contact" className="nav-item nav-link">Contact</a>
              </div>
              <div className="d-flex align-items-center flex-nowrap pt-xl-0" style={{ marginLeft: '15px' }}>
                <a href="/login" className="btn-hover-bg btn btn-primary text-white py-2 px-4 me-3" > Login</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      
    </React.Fragment>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h3 className="text-white display-3 mb-4">About Us</h3>
          <p className="fs-5 text-white mb-4">
            {/* Help today because tomorrow you may be the one who needs more helping! */}
          </p>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="/contact">Contact</a></li>
            <li className="breadcrumb-item active text-white">About Us</li>
          </ol>
        </div>
      </div>

      <div className="container-fluid about py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-5">
              <div className="h-100">
                <img src="img/new/e1.jpg" className="img-fluid w-100 h-75 mt-5" alt="Censor Labeling Event" />
              </div>
            </div>
            <div className="col-xl-7">
              <h5 className="text-uppercase text-primary">About Us</h5>
              <h1 className="mb-4">.</h1>
              <p className="fs-5 mb-4">
              Welcome to Automated Censor Label, a cutting-edge solution designed to bring efficiency and accuracy to video content management. Our mission is to empower content creators, administrators, and regulatory bodies by providing an advanced platform that automatically detects and labels sensitive activities in videos.
              </p>
              <div className="tab-class bg-secondary p-4">
                <ul className="nav d-flex mb-2">
                  <li className="nav-item mb-3">
                    <a className="d-flex py-2 text-center bg-white active" data-bs-toggle="pill" href="#tab-1">
                      <span className="text-dark" style={{ width: '150px' }}>About</span>
                    </a>
                  </li>
                  <li className="nav-item mb-3">
                    <a className="d-flex py-2 mx-3 text-center bg-white" data-bs-toggle="pill" href="#tab-2">
                      <span className="text-dark" style={{ width: '150px' }}>Mission</span>
                    </a>
                  </li>
                  <li className="nav-item mb-3">
                    <a className="d-flex py-2 text-center bg-white" data-bs-toggle="pill" href="#tab-3">
                      <span className="text-dark" style={{ width: '150px' }}>Vision</span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div id="tab-1" className="tab-pane fade show p-0 active">
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex">
                          <div className="text-start my-auto">
                            <h5 className="text-uppercase mb-3">About</h5>
                            <p className="mb-4">
                            We understand the challenges involved in monitoring and managing vast amounts of video content, especially when it comes to ensuring compliance with community guidelines and legal standards. Our system leverages state-of-the-art machine learning technologies, including Convolutional Neural Networks (CNNs) and the YOLO (You Only Look Once) model, to accurately identify activities such as drinking alcohol, smoking, and driving without helmets.
                            </p>
                            <div className="d-flex align-items-center justify-content-start">
                              {/* <a className="btn-hover-bg btn btn-primary text-white py-2 px-4" href="#">Read More</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab-2" className="tab-pane fade p-0">
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex">
                          <div className="text-start my-auto">
                            <h5 className="text-uppercase mb-3">Mission</h5>
                            <p className="mb-4">
                            Our mission is to provide a reliable and efficient solution for automatically detecting and labeling sensitive content in videos. We aim to assist video-sharing platforms, content creators, and regulatory authorities in maintaining community standards and protecting viewers from potentially harmful or inappropriate content.
                            </p>
                            <div className="d-flex align-items-center justify-content-start">
                              {/* <a className="btn-hover-bg btn btn-primary text-white py-2 px-4" href="#">Read More</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab-3" className="tab-pane fade p-0">
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex">
                          <div className="text-start my-auto">
                            <h5 className="text-uppercase mb-3">Vision</h5>
                            <p className="mb-4">
                            Our vision is to become the go-to solution for video content management, enabling content creators to focus on producing high-quality videos while our system takes care of the technical aspects of content compliance. We strive to continually improve our technology to meet the evolving needs of the digital content industry.
                            </p>
                            <div className="d-flex align-items-center justify-content-start">
                              {/* <a className="btn-hover-bg btn btn-primary text-white py-2 px-4" href="#">Read More</a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-start mt-3">
                <a href="/contact" className="btn-hover-bg btn btn-primary text-white py-2 px-4">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

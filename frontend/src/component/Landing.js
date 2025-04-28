import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Landing() {
  return (
    <>
  <React.Fragment>
      <div className="container-fluid fixed-top px-0">
        <div className="container px-0">
          <div className="topbar">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-8">
                <div className="topbar-info d-flex flex-wrap">
                  <a href="#" className="text-light me-4">
                    <i className="fas fa-envelope text-white me-2"></i>
                    sgv5549@gmail.com
                  </a>
                  <a href="#" className="text-light">
                    <i className="fas fa-phone-alt text-white me-2"></i>
                    +91 9605498474
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="topbar-icon d-flex align-items-center justify-content-end">
                  <a href="#" className="btn-square text-white me-2">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="btn-square text-white me-2">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="btn-square text-white me-2">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="btn-square text-white me-2">
                    <i className="fab fa-pinterest"></i>
                  </a>
                  <a href="#" className="btn-square text-white me-0">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-light bg-light navbar-expand-xl">
            <a href="index.html" className="navbar-brand ms-3">
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
                {/* <a href="/rating" className="nav-item nav-link">Rating</a> */}
                {/* <a href="causes.html" className="nav-item nav-link">Causes</a> */}
                {/* <a href="events.html" className="nav-item nav-link">Events</a> */}
               
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
    
          <div className="container-fluid carousel-header vh-100 px-0">
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img src="img/bg/2870691-face-scarlett-johansson___people-wallpapers.jpg" className="img-fluid" alt="Image" />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                  <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>
                                    </h4>
                  <h6 className="display-1 text-capitalize text-white mb-4">
                  Introducing <br></br>
                  Next-Gen Censorship for Modern Media
                  </h6>
                  <p className="mb-5 fs-5">
                                     </p>
                  <div className="d-flex align-items-center justify-content-center">
                    <a className="btn-hover-bg btn btn-primary text-white py-3 px-5" href="/login">Get Started</a>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="carousel-item">
              <img src="img/bg/bg2.jpg" className="img-fluid" alt="Image" />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                  <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>
                  Data labeling process                  </h4>
                  <h1 className="display-1 text-capitalize text-white mb-4">
                  Automated Censor Labelling Platform
                  </h1>
                  <p className="mb-5 fs-5">
                  An automated data labeling pipeline permits human labelers to drastically minimize the time it takes to label data.                  </p>
                  <div className="d-flex align-items-center justify-content-center">
                    <a className="btn-hover-bg btn btn-primary text-white py-3 px-5" href="/login">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="img/bg/bg5.jpg" className="img-fluid" alt="Image" />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                  <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>
                  Data labeling process                  </h4>
                  <h1 className="display-1 text-capitalize text-white mb-4">                    
                    Automated Censor Labelling Platform
                  </h1>
                  <p className="mb-5 fs-5">
                  Today, high-quality ML models cannot be generated without training data, which is comprised of datasets with labels.                  </p>
                  <div className="d-flex align-items-center justify-content-center">
                    <a className="btn-hover-bg btn btn-primary text-white py-3 px-5" href="/login">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container-fluid donation py-5">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
            <h5 className="text-uppercase text-primary">Services</h5>
            <h1 className="mb-0"></h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="donation-item">
                <img src="img/new/s6.jpg" className="img-fluid w-100" alt="Image" />
                <div className="donation-content d-flex flex-column">
                  <h5 className="text-uppercase text-primary mb-4"></h5>
                  <a href="#" className="btn-hover-color display-6 text-white"> Automated Content Detection</a>
                  {/* <h4 className="text-white mb-4">Rules</h4> */}
                  <p className="text-white mb-4"> </p>
                  <div className="donation-btn d-flex align-items-center justify-content-start">
                    <a className="btn-hover-bg btn btn-primary text-white py-2 px-4" href="#">Read more !</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="donation-item">
                <img src="img/new/s7.jpg" className="img-fluid w-100" alt="Image" />
                <div className="donation-content d-flex flex-column">
                  <h5 className="text-uppercase text-primary mb-4"></h5>
                  <a href="#" className="btn-hover-color display-6 text-white">Real-Time Video Processing</a>
                  {/* <h4 className="text-white mb-4">Rules</h4> */}
                  <p className="text-white mb-4">  </p>
                  <div className="donation-btn d-flex align-items-center justify-content-start">
                    <a className="btn-hover-bg btn btn-primary text-white py-2 px-4" href="#"> Read more</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="donation-item">
                <img src="img/new/s8.jpg" className="img-fluid w-100" alt="Image" />
                <div className="donation-content d-flex flex-column">
                  <h5 className="text-uppercase text-primary mb-4"> </h5>
                  <a href="#" className="btn-hover-color display-6 text-white">Customizable Feedback Mechanism</a>
                  {/* <h4 className="text-white mb-4">Rules</h4> */}
                  <p className="text-white mb-4"> </p>
                  <div className="donation-btn d-flex align-items-center justify-content-start">
                    <a className="btn-hover-bg btn btn-primary text-white py-2 px-4" href="#">Read more !</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-center">
                <a className="btn-hover-bg btn btn-primary text-white py-2 px-4" href="#"></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid counter py-5" style={{ background: "linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, 0.4)), url(img/volunteers-bg.jpg) center center", backgroundSize: "cover" }}>
        <div className="container py-5">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: '800px' }}>
            <h5 className="text-uppercase text-primary">COMING SOON!!!</h5>
            <p className="text-white mb-0">Currently, labels like "Cigarette smoking is injurious to health" are only available in English. Future enhancements will include support for multiple languages such as Malayalam, Tamil, Telugu, Kannada, and Hindi, making the system more accessible to users from diverse linguistic backgrounds.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3 text-center">
              <div className="counter-item">
                <i className="bi bi-check2-circle display-3 text-primary mb-3"></i>
                <h1 className="display-4 text-white mb-2" data-toggle="counter-up">Malayalam</h1>
                <span className="fs-5 text-white"></span>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-center">
              <div className="counter-item">
                <i className="bi bi-check2-circle display-3 text-primary mb-3"></i>
                <h1 className="display-4 text-white mb-2" data-toggle="counter-up">Tamil</h1>
                <span className="fs-5 text-white"></span>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-center">
              <div className="counter-item">
                <i className="bi bi-check2-circle display-3 text-primary mb-3"></i>
                <h1 className="display-4 text-white mb-2" data-toggle="counter-up">Telugu</h1>
                <span className="fs-5 text-white"></span>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-center">
              <div className="counter-item">
                <i className="bi bi-check2-circle display-3 text-primary mb-3"></i>
                <h1 className="display-4 text-white mb-2" data-toggle="counter-up">Kannada</h1>
                <span className="fs-5 text-white"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* 
      <div className="container-fluid about py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <div className="section-title mb-4">
                <h5 className="text-uppercase text-primary">About Us</h5>
                <h1 className="display-5 mb-0">We Are On A Mission To Save The Environment</h1>
              </div>
              <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              <div className="d-flex align-items-center mb-4">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: '100px', height: '100px' }}>
                  <i className="fa fa-leaf fa-2x text-white"></i>
                </div>
                <div className="ms-4">
                  <h4>Protect Environments</h4>
                  <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: '100px', height: '100px' }}>
                  <i className="fa fa-recycle fa-2x text-white"></i>
                </div>
                <div className="ms-4">
                  <h4>Protect Environments</h4>
                  <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: '100px', height: '100px' }}>
                  <i className="fa fa-people-carry fa-2x text-white"></i>
                </div>
                <div className="ms-4">
                  <h4>Protect Environments</h4>
                  <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <a className="btn-hover-bg btn btn-primary text-white py-3 px-5" href="#">Read More</a>
              </div>
            </div>
            <div className="col-lg-5">
              <img className="img-fluid" src="img/about.jpg" alt="Image" />
            </div>
          </div>
        </div>
      </div> */}
      <Footer/>
    </>
  );
}

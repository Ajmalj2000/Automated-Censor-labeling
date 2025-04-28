import React from 'react';
import Footer from './Footer';

export default function Contact() {
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
                    censorlabel@gmail.com
                  </a>
                  <a href="#" className="text-light">
                    <i className="fas fa-phone-alt text-white me-2"></i>
                    +91 7852416390
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


      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h3 className="text-white display-3 mb-4">Contact Us</h3>
          {/* <p className="fs-5 text-white mb-4">Help today because tomorrow you may be the one who needs more helping!</p> */}
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="/About">About</a></li>
            <li className="breadcrumb-item active text-white">Contact</li>
          </ol>
        </div>
      </div>

      <div className="container-fluid bg-light py-5">
        <div className="container py-5">
          <div className="contact p-5">
            <div className="row g-4">
              <div className="col-xl-5">
                <h1 className="mb-4">Get in touch</h1>
                <p className="mb-4">
                  The contact form is currently inactive. 
                  <a className="text-dark fw-bold" href="https://htmlcodex.com/contact-form"></a>.
                </p>
                <form>
                  <div className="row gx-4 gy-3">
                    <div className="col-xl-6">
                      <input type="text" className="form-control bg-white border-0 py-3 px-4" placeholder="Your First Name" />
                    </div>
                    <div className="col-xl-6">
                      <input type="email" className="form-control bg-white border-0 py-3 px-4" placeholder="Your Email" />
                    </div>
                    <div className="col-xl-6">
                      <input type="text" className="form-control bg-white border-0 py-3 px-4" placeholder="Your Phone" />
                    </div>
                    <div className="col-xl-6">
                      <input type="text" className="form-control bg-white border-0 py-3 px-4" placeholder="Subject" />
                    </div>
                    <div className="col-12">
                      <textarea className="form-control bg-white border-0 py-3 px-4" rows="7" cols="10" placeholder="Your Message"></textarea>
                    </div>
                    <div className="col-12">
                      <button className="btn-hover-bg btn btn-primary w-100 py-3 px-5" type="submit">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-xl-7">
                <div>
                  <div className="row g-4">
                    <div className="col-lg-4">
                      <div className="bg-white p-4">
                        <i className="fas fa-map-marker-alt fa-2x text-primary mb-2"></i>
                        <h4>Address</h4>
                        <p className="mb-0">123 street Kollam</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="bg-white p-4">
                        <i className="fas fa-envelope fa-2x text-primary mb-2"></i>
                        <h4>Mail Us</h4>
                        <p className="mb-0">sgv5549@gmail.com</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="bg-white p-4">
                        <i className="fa fa-phone-alt fa-2x text-primary mb-2"></i>
                        <h4>Telephone</h4>
                        <p className="mb-0">(+91)9605498474</p>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <iframe
                        className="w-100"
                        style={{ height: '412px', marginBottom: '-6px' }}
                        src="img/new/v1.jpg"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Contact Map"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

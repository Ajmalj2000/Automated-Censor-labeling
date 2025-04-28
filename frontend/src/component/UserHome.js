import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Blocked from './Blockd'

export default function UserHome() {
  return (
    <div>
      <Blocked/>
      <Header />
      <div className="container-fluid carousel-header vh-100 px-0">
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img src="img/new/pexels-pietrozj-65128.png" className="img-fluid" alt="Image" />
              <div className="carousel-caption">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                  <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: '3px' }}>
                    Data labeling process                  </h4>
                  <h1 className="display-1 text-capitalize text-white mb-4">
                  Automated Censor Labelling Platform
                  </h1>
                  <p className="mb-5 fs-5">
                  "Ensure you adhere to our guidelines—failure to comply may result in your account being blocked."                   </p>
                  <div className="d-flex align-items-center justify-content-center">
                    <a className="btn-hover-bg btn btn-primary text-white py-3 px-5" href="/viewvideo">Start Labeling</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="img/new/pexels-pietrozj-65128.png" className="img-fluid" alt="Image" />
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
                    <a className="btn-hover-bg btn btn-primary text-white py-3 px-5" href="/viewvideo">Start Labeling</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="img/new/pexels-pietrozj-65128.png" className="img-fluid" alt="Image" />
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
                    <a className="btn-hover-bg btn btn-primary text-white py-3 px-5" href="/viewvideo">Start Labeling</a>
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
      <div class="container-fluid service py-5 bg-light">
        <div class="container py-5">
          <div class="text-center mx-auto pb-5" style={{ maxWidth: "800px" }}>
            {/* <h5 class="text-uppercase text-primary">What we do</h5> */}
            <h1 class="mb-0">What we do</h1>
          </div>
          <div class="row g-4">
            <div class="col-md-6 col-lg-6 col-xl-3">
              <div class="service-item">
                <img src="https://thumbs.dreamstime.com/b/go-to-cinema-popcorn-clapperboard-wooden-background-top-view-watching-movie-154645655.jpg" class="img-fluid w-100" alt="Image" />
                <div class="service-link">
                  <a href="#" class="h4 mb-0">Empowering Safe Content Creation</a>
                </div>
              </div>
              <p class="my-4"> we empower content creators, platform administrators, and regulatory bodies by providing an automated solution for detecting and labeling sensitive activities in videos. Our innovative system is designed to ensure that video content aligns with safety standards and community guidelines.
              </p>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
              <div class="service-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjeKfvd1y2q-2m-zC0ZEVCzlL_NyoNLcx8Juff28aGBOsPC5KiRmlSpMmQf5be4XyuzHo&usqp=CAU" class="img-fluid w-100" alt="Image" />
                <div class="service-link">
                  <a href="#" class="h4 mb-0"> Automated Detection of Sensitive Activities</a>
                </div>
              </div>
              <p class="my-4">Utilizing advanced machine learning models, including Convolutional Neural Networks (CNNs) and YOLO, our platform accurately identifies and tags activities such as smoking, drinking, and other sensitive behaviors. This automated process eliminates the need for manual content moderation, saving time and enhancing precision.
              </p>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
              <div class="service-item">
                <img src="https://blog.ipleaders.in/wp-content/uploads/2020/07/film-making-shutterstock_169841813-2016-696x464.jpg" class="img-fluid w-100" alt="Image" />
                <div class="service-link">
                  <a href="#" class="h4 mb-0">Ensuring Compliance with Cutting-Edge Technology</a>
                </div>
              </div>
              <p class="my-4">   We empower digital content creators, platform administrators, and regulators by offering an advanced automated solution that detects and labels sensitive activities in videos. Our state-of-the-art system is engineered to ensure your content meets stringent safety standards and community guidelines.           </p>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
              <div class="service-item">
                <img src="https://img.freepik.com/free-photo/person-clapping-clapperboard-wooden-tabletop_23-2147698857.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721433600&semt=ais_user" class="img-fluid w-100" alt="Image" />
                <div class="service-link">
                  <a href="#" class="h4 mb-0">Precision Labeling Through Advanced AI</a>
                </div>
              </div>
              <p class="my-4">Our platform uses the latest machine learning technologies, including CNNs and YOLO, to detect and label activities such as smoking, drinking, and other potentially harmful behaviors in videos. This automated approach significantly reduces the workload of manual moderation, ensuring fast and accurate compliance.
              </p>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

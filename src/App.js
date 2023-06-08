import logo from "./logo.svg";
import "./style.css";

function App() {
  return (
    <div>
      <section id="nav-bar">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">
            <img src={require("./assets/logo.jpg")} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#top">
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#services">
                  SERVICES
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about-us">
                  ABOUT US
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#management">
                  MANAGEMENT
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#footer">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>

      <section id="banner">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p class="promo-title">SHARP RECRUITMENTS (PVT) LTD</p>
              <p class="p1">Reaching the skies</p>
              <a href="#">
                <i class="fa-solid fa-business-time"></i> 8.30 am - 5.00pm
              </a>
            </div>
            <div class="col-md-6 text-center">
              <img src={require("./assets/banner.png")} class="img-banner" />
            </div>
          </div>
        </div>
        <img src={require("./assets/waveone.png")} class="bottom-img" />
      </section>

      <section id="services">
        <div class="container text-center">
          <h1 class="title">WHAT WE DO ?</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img
                src={require("./assets/staffhandling.jpg")}
                class="service-img"
              />
              <h4>Casual Staff Handling</h4>
            </div>
            <div class="col-md-4 services">
              <img
                src={require("./assets/provideemployee.jpg")}
                class="service-img"
              />
              <h4>Providing Permenant Staff</h4>
            </div>
            <div class="col-md-4 services">
              <img src={require("./assets/payroll.png")} class="service-img" />
              <h4>Payroll Activies (Epf,Etf.Salary Slips)</h4>
            </div>
            <div class="col-md-4 services2">
              <img
                src={require("./assets/provideemployee.jpg")}
                class="service-img2"
              />
              <h4>recruitment and Selection</h4>
            </div>
            <div class="col-md-4 services2">
              <img
                src={require("./assets/recruitment.png")}
                class="service-img2"
              />
              <h4>Employee & Labor Relations</h4>
            </div>
            <div class="col-md-4 services2">
              <img
                src={require("./assets/personalfiles.png")}
                class="service-img2"
              />
              <h4>Handling & Maintaining Personal Files</h4>
            </div>
          </div>
          <button type="button" class="btn btn-primary">
            All Services
          </button>
        </div>
      </section>

      <div id="about-us">
        <div class="container">
          <h1 class="title text-center">WHY TO CHOOSE US?</h1>
          <div class="row">
            <div class="col-md-6 about-us">
              <p class="about-title">Our Story</p>
              <h6>
                "Rather than Controlling and Critisizing,Leading and
                Appreciating is Better"
              </h6>
              <h6>-Samanthi Liyanage- M.D</h6>
              <br />
              <br />
              <br />
              <h5 class="start text-center">
                We began our first step in 2018{" "}
              </h5>{" "}
              <br />
              <h6>
                <u>Vision</u>
              </h6>
              <p>
                To provide a Quality Service as a Recruitment Company that
                enriches Our Clients, as well as Employees Satisfications.
              </p>
              <h6>
                <u>Mission</u>
              </h6>
              <p>To act in the Best Interest of Our Clients and Employees.</p>
              <br />
              <br />
            </div>
            <div class="col-md-6">
              <img src={require("./assets/network.png")} class="img-fluid" />
            </div>
          </div>
          <h6>Core Values</h6>
          <ul>
            <li>
              Quality - We provide our Services with utmost care and high
              standards
            </li>
            <li>
              Honesty and Integrety - We have very firm ethical standards in the
              industry and operate with transparency and trust
            </li>
            <li>
              Commitment to Results - We provide our service for the utmost
              satisfaction with Best Results
            </li>
            <li>
              Respect - We treat Our Clients and Employees with mutual respect
              and sensitivity
            </li>
          </ul>
          <br />
          <p>
            Currently we handle a considerate amount of casual staff employees
            in one of a major well reputed Company in the courier industry
          </p>
          <h3>Subsidiary Companies</h3>
          <p>Solid Data Entry Pvt Ltd</p>
          <p> "http://soliddatalk.com/"</p>
        </div>
      </div>

      <section id="management">
        <div class="container">
          <h1 class="title text-center">MANAGEMENT</h1>
          {/* <div class="management-container"> */}
          <div class="row offset-1">
            <div class="col-md-5 management">
              <p>linked in profile link</p>
              <img src={require("./assets/avatar.png")} />
              <p class="user-details">
                <b>Samanthi Liyanage</b>
                <br />
                Managing Director (2018-present)
              </p>
            </div>
            <div class="col-md-5 management">
              <p>linked in profile link</p>
              <img src={require("./assets/avatar.png")} />
              <p class="user-details">
                <b>Kaumadee Hettige</b>
                <br />
                Managing Director (2018-present)
              </p>
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>

      <section id="social-media">
        <div class="container text-center">
          <p>FIND US ON SOCIAL MEDIA</p>
          <div class="social-icons">
            <a href="#">
              <img src={require("./assets/facebook-icon.png")} />
            </a>
            <a href="#">
              <img src={require("./assets/whatsapp-icon.png")} />
            </a>
            <a href="#">
              <img src={require("./assets/instagram-icon.png")} />
            </a>
            <a href="#">
              <img src={require("./assets/snapchat-icon.png")} />
            </a>
            <a href="#">
              <img src={require("./assets/linkedin-icon.png")} />
            </a>
            <a href="#">
              <img src={require("./assets/twitter-icon.png")} />
            </a>
          </div>
        </div>
      </section>

      <section id="footer">
        <img src={require("./assets/wave2.png")} class="footer-img" />
        <div class="container">
          <div class="row">
            <div class="col-md-4 footer-box">
              <img src={require("./assets/logo.jpg")} />
              <p class="since">Since - 2018</p>
            </div>
            <div class="col-md-4 footer-box">
              <p>
                <b>Contact Us</b>
              </p>
              <p>
                <i class="fa fa-solid fa-location-dot"></i> No.5/1,School
                Lane,Nawala Road,Rajagiriya
              </p>
              <p>
                <i class="fa fa-phone"></i>
                <b>0777 55 63 43</b> (Mobile) / <b>011 2072231</b> (Office)
              </p>
              <p>
                <i class="fa fa-solid fa-envelope"></i>
                sharprecruitment18@gmail.com
              </p>
            </div>
            <div class="col-md-4 footer-box">
              <p>
                <b>SUBSCRIBE NEWSLETTER</b>
              </p>
              <input
                type="email"
                class="form-control"
                placeholder="Your Email"
              />
              <button type="button" class="btn btn-primary">
                Subscribe
              </button>
            </div>
            <div>
              <hr />
              <p class="copyright">Website Crafted By RK Software</p>
            </div>
          </div>
        </div>
      </section>

      {/* <Script src="smooth-scroll.js"></Script> */}
      {/* <script>
	var scroll = new SmoothScroll('a[href*="#"]');
</script> */}
    </div>
  );
}

export default App;

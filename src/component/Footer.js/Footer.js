import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer style={{ marginTop: "50px" }}>
        <div className="container1 footer-con">
          <div className="footer-content">
            <div className="footer-head">
              <div className="foot-head-left">
                <div className="footer-logo">
                  <Link to={""}>
                    <img src="imagess/tmi-logo.png" alt="logo" />
                  </Link>
                </div>
                <span>It's time for new Experiences</span>
              </div>
              <div className="foot-head-right">
                <small>Find The Perfect Escape</small>
                <Link to={''}
                 
                  className="open-popup myBtn"
                  data-id="popup_default"
                >
                  Book Your Trip
                </Link>
              </div>
            </div>
            <div className="footer-sec">
              <div className="row">
                <div className="col-md-3 col-sm-6 col-6">
                  <h6>Company</h6>
                  <ul className="quicks-packages">
                    <li>
                      <Link to={""}>About Us</Link>
                    </li>
                    <li>
                      <Link to={""}>We Are Hiring</Link>
                    </li>
                    <li>
                      <Link to={""}>TMI Reviews</Link>
                    </li>
                    <li>
                      <Link to={""}>Contact Us</Link>
                    </li>
                    <li>
                      <Link>Tour My India Blog</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-sm-6 col-6">
                  <h6>Property Type</h6>
                  <ul className="quicks-packages">
                    <li>
                      <Link to={""}>Hotels in India</Link>
                    </li>
                    <li>
                      <Link to={""}>Beach Resorts</Link>
                    </li>
                    <li>
                      <Link to={""}>Wildlife Resorts</Link>
                    </li>
                    <li>
                      <Link to={""}>Heritage Hotels</Link>
                    </li>
                    <li>
                      <Link to={""} target="_blank">
                        Luxury Hotels
                      </Link>
                    </li>
                    <li>
                      <Link to={""} target="_blank">
                        Luxury Villas
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-sm-6 col-6">
                  <h6>Legal Policy</h6>
                  <ul className="quicks-packages">
                    <li>
                      <Link to="">Terms &amp; Conditions</Link>
                    </li>
                    <li>
                      <Link to="">Disclaimer</Link>
                    </li>
                    <li>
                      <Link to="">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="">We Are Hiring</Link>
                    </li>
                    <li>
                      <Link to="">Share Your Travel Experience</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-sm-6 col-6">
                  <h6>Other Services</h6>
                  <ul className="quicks-packages">
                    <li>
                      <Link to="">Destination Weddings</Link>
                    </li>
                    <li>
                      <Link to="">MICE</Link>
                    </li>
                    <li>
                      <Link to="">Medical Tourism</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="partners-sec">
            <ul className="partners"></ul>
          </div>
          <div className="footer-info-content">
            <ul className="footer-info">
              <li>
                <i className="fa fa-map-marker" aria-hidden="true" />C - 81C,
                Jaipur pinky City, Rajasthan - 303808
              </li>
              <li>
                <i className="fa fa-phone" aria-hidden="true" />
                +91-120-4052615 - 99 (85 hunting lines are available)
              </li>
              <li>
                <i className="fa fa-fax" aria-hidden="true" />
                +91-120-4052699
              </li>
              <li>
                <i className="fa fa-mobile" aria-hidden="true" />
                +91-9212777223/24
              </li>
              <li>
                <i className="fa fa-envelope-o" aria-hidden="true" />
                info@rditsolutin.com{" "}
              </li>
              <li>
                <i className="fa fa-whatsapp" aria-hidden="true" />
                +91-9212777225 (Only for Whatsapp)
              </li>
              <li>
                <i className="fa fa-skype" aria-hidden="true" />
                tourMaroRajasthan
              </li>
            </ul>
            <div className="social-icons">
              <Link to="">
                <i className="fa fa-twitter" aria-hidden="true" />
              </Link>
              <Link to="">
                <i className="fa fa-facebook" aria-hidden="true" />
              </Link>
              <Link to="">
                <i className="fa fa-linkedin" aria-hidden="true" />
              </Link>
              <Link to="">
                <i className="fa fa-youtube-play" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="footer-end">
            <p>
              CopyRight©2024,{" "}
              <span className="underline">
                {" "}
                Research and development it solutoin{" "}
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

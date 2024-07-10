import React from "react";
import { Link } from "react-router-dom";

const ByStates = () => {
  return (
    <div>
      <>
        {/* packages by duration */}
        <section className="duration-packages">
          <div className="container1">
            <div className="main-heading">
              <h2>
                India Tour Packages
                <br /> By Duration
              </h2>
              <p>
                <Link to={''}>
                  See All Tours{" "}
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </Link>
              </p>
            </div>
            <div className="duration-packages-content">
              <div className="row duration-row">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 duration-pack1">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-6 duration-left">
                      <figure>
                        <Link
                        to={''}
                        
                        >
                          <img
                            src="https://www.tourmyindia.com/tmimg/tajmahal-3_5.webp"
                            alt="tajmahal image"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="col-md-6 col-sm-6 col-6 duration-right">
                      <div className="row duration-sec">
                        <div className="col-md-12 duration-right1">
                          <figure>
                            <Link
                            to={''}
                            >
                              <img
                                src="https://www.tourmyindia.com/tmimg/banglore-3_5.webp"
                                alt="banglore palace image"
                              />
                            </Link>
                          </figure>
                        </div>
                        <div className="col-md-12">
                          <figure>
                            <Link
                              to={''}
                            >
                              <img
                                src="https://www.tourmyindia.com/tmimg/hawamahal-3_5.webp"
                                alt="hawamahal image"
                              />
                            </Link>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="duration-pack1-sec">
                    <h4>3 - 5 Days Tour Packages</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 duration-pack1">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-6 duration-left">
                      <figure>
                        <Link
                        to={''}
                        >
                          <img
                            src="https://www.tourmyindia.com/tmimg/india-gate-6_7.webp"
                            alt="india gate image"
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="col-md-6 col-sm-6 col-6 duration-right">
                      <div className="row duration-sec">
                        <div className="col-md-12 duration-right1">
                          <figure>
                            <Link
                            >
                              <img
                                src="https://www.tourmyindia.com/tmimg/karnataka-3_5.webp"
                                alt="karnataka image"
                              />
                            </Link>
                          </figure>
                        </div>
                        <div className="col-md-12">
                          <figure>
                            <Link
                            >
                              <img
                                src="https://www.tourmyindia.com/tmimg/uttarakhand-6_7.webp"
                                alt="uttarakhand image"
                              />
                            </Link>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="duration-pack1-sec">
                    <h4>6 - 7 Days Tour Packages</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 duration-pack1">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-6 duration-left">
                      <figure>
                        <Link
                        to={''}
                        >
                          <img src="https://www.tourmyindia.com/tmimg/yoga-tour.webp" alt="yoga image" />
                        </Link>
                      </figure>
                    </div>
                    <div className="col-md-6 col-sm-6 col-6 duration-right">
                      <div className="row duration-sec">
                        <div className="col-md-12 duration-right1">
                          <figure>
                            <Link
                              to={''}
                            >
                              <img
                                src="https://www.tourmyindia.com/tmimg/goa-1_7.webp"
                                alt="goa beach image"
                              />
                            </Link>
                          </figure>
                        </div>
                        <div className="col-md-12">
                          <figure>
                            <Link
                            to={''}
                            >
                              <img
                                src="https://www.tourmyindia.com/tmimg/ganges-1_7.webp"
                                alt="ganges image"
                              />
                            </Link>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="duration-pack1-sec">
                    <h4>1 - 7 Days Tour Packages</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default ByStates;

import React from "react";
import { Link } from "react-router-dom";

const ByZone = () => {
  return (
    <div>
      <>
        <section className="packages-zone">
          <div className="container1">
            <div className="main-heading">
              <h2>India Tour Packages by Zone</h2>
            </div>
            <div className="trend-listing">
              <ul className="nav" id="pills-tab01" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab01"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home01"
                    type="button"
                    role="tab"
                    aria-controls="pills-home01"
                    aria-selected="true"
                  >
                    North India
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab02"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile02"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile02"
                    aria-selected="false"
                  >
                    South India
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact-tab03"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact03"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact03"
                    aria-selected="false"
                  >
                    East India
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact-tab04"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact04"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact04"
                    aria-selected="false"
                  >
                    West India
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact-tab05"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact05"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact05"
                    aria-selected="false"
                  >
                    Central India
                  </button>
                </li>
              </ul>
            </div>
            <div className="tab-content" id="pills-tabContent01">
              <div
                className="tab-pane fade show active"
                id="pills-home01"
                role="tabpanel"
                aria-labelledby="pills-home-tab01"
              >
                <div className="row">
                  <div className="col-lg-5 col-md-12 col-sm-12">
                    <div className="trend-sec-left">
                      <Link to={""}>
                        <img
                          src="https://www.tourmyindia.com/tmimg/rajasthan-package.webp"
                          alt="rajasthan package"
                        />
                      </Link>
                      <div className="trend-left">
                        <h4>
                          <Link to="">Rajasthan</Link>
                        </h4>
                        <span>30+ Packages</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 col-sm-12">
                    <div className="row flex-wrap">
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trend-visit">
                        <div className="trend-sec-right">
                          <Link to={""}>
                            <img
                              src="https://www.tourmyindia.com/tmimg/uttarakhand01-package.webp"
                              alt="uttarakhand package"
                            />
                          </Link>
                          <div className="trend-right">
                            <h4>
                              <Link to={""}>Uttarakhand</Link>
                            </h4>
                            <span>50+ Packages</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trends-visit">
                        <div className="trend-sec-right">
                          <Link to={""}>
                            <img
                              src="https://www.tourmyindia.com/tmimg/himachal-package.webp"
                              alt="himachal package"
                            />
                          </Link>
                          <div className="trend-right">
                            <h4>
                              <Link to={""}>Himachal</Link>
                            </h4>
                            <span>60+ Packages</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trend-visit trnds-visit">
                        <div className="trend-sec-right">
                          <Link to={""}>
                            <img
                              src="https://www.tourmyindia.com/tmimg/j&k-package.webp"
                              alt="jammu & kashmir package"
                            />
                          </Link>
                          <div className="trend-right">
                            <h4>
                              <Link to={""}>Jammu &amp; Kashmir</Link>
                            </h4>
                            <span> 30+ Packages</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trends-visit">
                        <div className="trend-sec-right trending-right">
                          <Link to={""}>
                            <img
                              src="https://www.tourmyindia.com/tmimg/up-package.webp"
                              alt="varanasi"
                            />
                          </Link>
                          <div className="trend-right">
                            <h4>
                              <Link to={""}>Uttar Pradesh</Link>
                            </h4>
                            <span> 25+ Packages</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trend-visit">
                        <div className="trend-sec-right trending-right">
                          <Link to={""}>
                            <img
                              src="https://www.tourmyindia.com/tmimg/delhi-package.webp"
                              alt="lotus temple"
                            />
                          </Link>
                          <div className="trend-right">
                            <h4>
                              <Link to={""}>Delhi</Link>
                            </h4>
                            <span>20+ Packages</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trends-visit">
                        <div className="trend-sec-right trending-right">
                          <Link>
                            <img
                              src="https://www.tourmyindia.com/tmimg/ladakh-trend.webp"
                              alt="ladakh lake image"
                            />
                          </Link>
                          <div className="trend-right">
                            <h4>
                              <Link to={""}>Ladakh</Link>
                            </h4>
                            <span>25+ Packages</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile02"
                role="tabpanel"
                aria-labelledby="pills-profile-tab02"
              >
                <div className="row">
                  <div className="col-lg-5 col-md-12 col-sm-12">
                    <div className="trend-sec-left">
                      <Link to={""}>
                        <img
                          src="tmimg/kerala-package.webp"
                          alt="kerala package"
                          target="_blank"
                        />
                      </Link>
                      <div className="trend-left">
                        <h4>
                          <Link to={""}>Kerala</Link>
                        </h4>
                        <span>40+ Packages</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 col-sm-12">
                    <div className="row flex-wrap">
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trend-visit">
                        <div className="trend-sec-right">
                          <Link to={""}>
                            <img
                              src="tmimg/karnataka-package.webp"
                              alt="karnataka package"
                            />
                          </Link>
                          <div className="trend-right">
                            <h4>
                              <Link
                                href="https://www.tourmyindia.com/packages-tour-india/karnataka-holiday-packages/"
                                target="_blank"
                              >
                                Karnataka
                              </Link>
                            </h4>
                            <span>25+ Packages</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trends-visit">
                        <div className="trend-sec-right">
                          <Link to={""}>
                            <img
                              src="tmimg/tamilnadu-package.webp"
                              alt="tamilnadu package"
                            />
                          </Link>
                          <div className="trend-right">
                            <h4>
                              <Link to={""}>Tamil Nadu</Link>
                            </h4>
                            <span>20+ Packages</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trend-visit">
                        <div className="trend-sec-right">
                          <Link
                            href="https://www.tourmyindia.com/states/andaman/holiday-packages.html"
                            target="_blank"
                          >
                            <img
                              src="tmimg/andaman-package.webp"
                              alt="andaman package"
                            />
                          </Link>
                          <div className="trend-right">
                            <h4>
                              <Link
                                href="https://www.tourmyindia.com/states/andaman/holiday-packages.html"
                                target="_blank"
                              >
                                Andaman
                              </Link>
                            </h4>
                            <span>15+ Packages</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trends-visit">
                        <div className="trend-sec-right trending-right">
                          <Link to={""}>
                            <img
                              src="tmimg/puducherry-package.webp"
                              alt="puducherry package"
                            />
                          </Link>
                          <div className="trend-right">
                            <h4>
                              <Link to={""}>Puducherry</Link>
                            </h4>
                            <span>10+ Packages</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trend-visit">
                        <div className="trend-sec-right trending-right">
                          <a
                            href="https://www.tourmyindia.com/packages-tour-india/andhra-pradesh-tours/"
                            target="_blank"
                          >
                            <img
                              src="tmimg/andhra-package.webp"
                              alt="andhra package"
                            />
                          </a>
                          <div className="trend-right">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/packages-tour-india/andhra-pradesh-tours/"
                                target="_blank"
                              >
                                Andhra Pradesh
                              </a>
                            </h4>
                            <span>15+ Packages</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trends-visit">
                        <div className="trend-sec-right trending-right">
                          <a
                            href="https://www.tourmyindia.com/states/telangana/"
                            target="_blank"
                          >
                            <img
                              src="tmimg/telangana-package.webp"
                              alt="golden temple"
                            />
                          </a>
                          <div className="trend-right">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/telangana/"
                                target="_blank"
                              >
                                Telangana
                              </a>
                            </h4>
                            <span>10+ Packages</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact03"
                role="tabpanel"
                aria-labelledby="pills-contact-tab03"
              >
                <div className="row">
                  <div className="col-lg-5 col-md-12 col-sm-12">
                    <div className="trend-sec-left">
                      <a
                        href="https://www.tourmyindia.com/states/sikkim/sikkim-tour-packages.html"
                        target="_blank"
                      >
                        <img
                          src="tmimg/sikkim-package.webp"
                          alt="sikkim image"
                        />
                      </a>
                      <div className="trend-left">
                        <h4>
                          <a
                            href="https://www.tourmyindia.com/states/sikkim/sikkim-tour-packages.html"
                            target="_blank"
                          >
                            Sikkim
                          </a>
                        </h4>
                        <span>40+ Packages</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 col-sm-12">
                    <div className="row flex-wrap">
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trend-visit">
                        <div className="trend-sec-right">
                          <a
                            href="https://www.tourmyindia.com/packages-tour-india/arunachal-tours/"
                            target="_blank"
                          >
                            <img
                              src="tmimg/arunachal-package.webp"
                              alt="arunachal image"
                            />
                          </a>
                          <div className="trend-right">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/packages-tour-india/arunachal-tours/"
                                target="_blank"
                              >
                                Arunachal
                              </a>
                            </h4>
                            <span>15+ Packages</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trends-visit">
                        <div className="trend-sec-right">
                          <a
                            href="https://www.tourmyindia.com/packages-tour-india/meghalaya-tours/"
                            target="_blank"
                          >
                            <img
                              src="tmimg/meghalaya-package.webp"
                              alt="meghalaya image"
                            />
                          </a>
                          <div className="trend-right">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/packages-tour-india/meghalaya-tours/"
                                target="_blank"
                              >
                                Meghalaya
                              </a>
                            </h4>
                            <span>10+ Packages</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trend-visit">
                        <div className="trend-sec-right">
                          <a
                            href="https://www.tourmyindia.com/packages-tour-india/nagaland-tours/"
                            target="_blank"
                          >
                            <img
                              src="tmimg/nagaland-package.webp"
                              alt="nagaland image"
                            />
                          </a>
                          <div className="trend-right">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/packages-tour-india/nagaland-tours/"
                                target="_blank"
                              >
                                Nagaland
                              </a>
                            </h4>
                            <span>15+ Packages</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trends-visit">
                        <div className="trend-sec-right trending-right">
                          <a
                            href="https://www.tourmyindia.com/packages-tour-india/assam-tours/"
                            target="_blank"
                          >
                            <img
                              src="tmimg/assam-package.webp"
                              alt="assam image"
                            />
                          </a>
                          <div className="trend-right">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/packages-tour-india/assam-tours/"
                                target="_blank"
                              >
                                Assam
                              </a>
                            </h4>
                            <span>25+ Packages</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trend-visit">
                        <div className="trend-sec-right trending-right">
                          <a
                            href="https://www.tourmyindia.com/packages-tour-india/odisha-tours/"
                            target="_blank"
                          >
                            <img
                              src="tmimg/odisha-package.webp"
                              alt="odisha image"
                            />
                          </a>
                          <div className="trend-right">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/packages-tour-india/odisha-tours/"
                                target="_blank"
                              >
                                odisha
                              </a>
                            </h4>
                            <span>20+ Packages</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trends-visit">
                        <div className="trend-sec-right trending-right">
                          <a
                            href="https://www.tourmyindia.com/packages-tour-india/west-bengal-tours/"
                            target="_blank"
                          >
                            <img
                              src="tmimg/wb-package.webp"
                              alt="west bengal image"
                            />
                          </a>
                          <div className="trend-right">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/packages-tour-india/west-bengal-tours/"
                                target="_blank"
                              >
                                West Bengal
                              </a>
                            </h4>
                            <span>10+ Packages</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact04"
                role="tabpanel"
                aria-labelledby="pills-contact-tab04"
              >
                <div className="row">
                  <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                    <div className="trend-sec-left">
                      <a
                        href="https://www.tourmyindia.com/states/goa/goa-tour-packages.html"
                        target="_blank"
                      >
                        <img src="tmimg/goa-package.webp" alt="goa image" />
                      </a>
                      <div className="trend-left">
                        <h4>
                          <a
                            href="https://www.tourmyindia.com/states/goa/goa-tour-packages.html"
                            target="_blank"
                          >
                            Goa
                          </a>
                        </h4>
                        <span>15+ Packages</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                    <div className="row flex-wrap">
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trend-visit">
                        <div className="trend-sec-right">
                          <a
                            href="https://www.tourmyindia.com/packages-tour-india/gujarat-tours/"
                            target="_blank"
                          >
                            <img
                              src="tmimg/gujarat-package.webp"
                              alt="gujarat image"
                            />
                          </a>
                          <div className="trend-right">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/packages-tour-india/gujarat-tours/"
                                target="_blank"
                              >
                                Gujarat
                              </a>
                            </h4>
                            <span>30+ Packages</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trends-visit">
                        <div className="trend-sec-right">
                          <a
                            href="https://www.tourmyindia.com/packages-tour-india/maharashtra-tours/"
                            target="_blank"
                          >
                            <img
                              src="tmimg/maharashtra-package.webp"
                              alt="maharashtra image"
                            />
                          </a>
                          <div className="trend-right">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/packages-tour-india/maharashtra-tours/"
                                target="_blank"
                              >
                                Maharashtra
                              </a>
                            </h4>
                            <span>20+ Packages</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trend-visit">
                        <div className="trend-sec-right">
                          <a
                            href="https://www.tourmyindia.com/packages-tour-india/daman-diu-tours/"
                            target="_blank"
                          >
                            <img
                              src="tmimg/daman&diu-package.webp"
                              alt="Daman & Diu image"
                            />
                          </a>
                          <div className="trend-right">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/packages-tour-india/daman-diu-tours/"
                                target="_blank"
                              >
                                Daman &amp; Diu
                              </a>
                            </h4>
                            <span>5+ Packages</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trends-visit">
                        <div className="trend-sec-right trending-right">
                          <a
                            href="https://www.tourmyindia.com/packages-tour-india/dadra-nagar-haveli-tours/"
                            target="_blank"
                          >
                            <img
                              src="tmimg/dadra-package.webp"
                              alt="dadra & nagar haveli"
                            />
                          </a>
                          <div className="trend-right">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/packages-tour-india/dadra-nagar-haveli-tours/"
                                target="_blank"
                              >
                                Dadra &amp; Nagar Haveli
                              </a>
                            </h4>
                            <span>5+ Packages</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trend-visit">
                        <div className="trend-sec-right trending-right">
                          <a
                            href="https://www.tourmyindia.com/wildlife_sancturies/gir_national_park.html"
                            target="_blank"
                          >
                            <img
                              src="tmimg/gir-package.webp"
                              alt="Gir national park"
                            />
                          </a>
                          <div className="trend-right">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/wildlife_sancturies/gir_national_park.html"
                                target="_blank"
                              >
                                Gir National Park
                              </a>
                            </h4>
                            <span>10+ Packages</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trends-visit">
                        <div className="trend-sec-right trending-right">
                          <a
                            href="https://www.tourmyindia.com/states/maharashtra/pune-tour-packages.html"
                            target="_blank"
                          >
                            <img
                              src="tmimg/pune-package.webp"
                              alt="pune image"
                            />
                          </a>
                          <div className="trend-right">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/maharashtra/pune-tour-packages.html"
                                target="_blank"
                              >
                                Pune
                              </a>
                            </h4>
                            <span>10+ Packages</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact05"
                role="tabpanel"
                aria-labelledby="pills-contact-tab05"
              >
                <div className="row">
                  <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                    <div className="trend-sec-left">
                      <a
                        href="https://www.tourmyindia.com/packages-tour-india/mp-tours/"
                        target="_blank"
                      >
                        <img
                          src="tmimg/mp-package.webp"
                          alt="madhya pradesh image"
                        />
                      </a>
                      <div className="trend-left">
                        <h4>
                          <a
                            href="https://www.tourmyindia.com/packages-tour-india/mp-tours/"
                            target="_blank"
                          >
                            Madhya Pradesh
                          </a>
                        </h4>
                        <span>30+ Packages</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                    <div className="row flex-wrap">
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trend-visit">
                        <div className="trend-sec-right">
                          <a
                            href="https://www.tourmyindia.com/packagetours.html"
                            target="_blank"
                          >
                            <img
                              src="tmimg/chattisgarh-package.webp"
                              alt="chattisgarh image"
                            />
                          </a>
                          <div className="trend-right">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/packagetours.html"
                                target="_blank"
                              >
                                Chattisgarh
                              </a>
                            </h4>
                            <span>5+ Packages</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trends-visit">
                        <div className="trend-sec-right">
                          <a
                            href="https://www.tourmyindia.com/wildlife_sancturies/kanha-national-park.html"
                            target="_blank"
                          >
                            <img
                              src="tmimg/kahna-package.webp"
                              alt="kahna national park"
                            />
                          </a>
                          <div className="trend-right">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/wildlife_sancturies/kanha-national-park.html"
                                target="_blank"
                              >
                                Kanha National Park
                              </a>
                            </h4>
                            <span>15+ Packages</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trend-visit">
                        <div className="trend-sec-right">
                          <a
                            href="https://www.tourmyindia.com/packages-tour-india/honeymoon-tour-packages/khajuraho-tour.html"
                            target="_blank"
                          >
                            <img
                              src="tmimg/khajuraho-package.webp"
                              alt="Khajuraho image"
                            />
                          </a>
                          <div className="trend-right">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/packages-tour-india/honeymoon-tour-packages/khajuraho-tour.html"
                                target="_blank"
                              >
                                Khajuraho
                              </a>
                            </h4>
                            <span>10+ Packages</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trends-visit">
                        <div className="trend-sec-right trending-right">
                          <a
                            href="https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/bandhavgarh-tour-packages.html"
                            target="_blank"
                          >
                            <img
                              src="tmimg/bandhavgarh-package.webp"
                              alt="bandhavgarh"
                            />
                          </a>
                          <div className="trend-right">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/bandhavgarh-tour-packages.html"
                                target="_blank"
                              >
                                Bandhavgarh
                              </a>
                            </h4>
                            <span>15+ Packages</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trend-visit">
                        <div className="trend-sec-right trending-right">
                          <a
                            href="https://www.tourmyindia.com/states/madhyapradesh/bhopal.html"
                            target="_blank"
                          >
                            <img
                              src="tmimg/bhopal-package.webp"
                              alt="bhopal image"
                            />
                          </a>
                          <div className="trend-right">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/madhyapradesh/bhopal.html"
                                target="_blank"
                              >
                                Bhopal
                              </a>
                            </h4>
                            <span>20+ Packages</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 trends-visit">
                        <div className="trend-sec-right trending-right">
                          <a
                            href="https://www.tourmyindia.com/states/madhyapradesh/ujjain.html"
                            target="_blank"
                          >
                            <img
                              src="tmimg/ujjain-package.webp"
                              alt="ujjain image"
                            />
                          </a>
                          <div className="trend-right">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/madhyapradesh/ujjain.html"
                                target="_blank"
                              >
                                Ujjain
                              </a>
                            </h4>
                            <span>15+ Packages</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* packages by interest */}
        <section className="interesting-packages">
          <div className="container1">
            <div className="main-heading">
              <h2>
                India Holiday <br />
                Packages by Interest
              </h2>
            </div>
            <div className="tab-list">
              <ul className="nav mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Wildlife
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-service-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-service"
                    type="button"
                    role="tab"
                    aria-controls="pills-service"
                    aria-selected="false"
                  >
                    Honeymoon
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-adventure-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-adventure"
                    type="button"
                    role="tab"
                    aria-controls="pills-adventure"
                    aria-selected="false"
                  >
                    Adventure
                  </button>
                </li>
              </ul>
            </div>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="package-interest-content">
                  <div className="interest-content">
                    <figure>
                      <Link to={""}>
                        <img
                          src="https://www.tourmyindia.com/tmimg/indian-tiger.webp"
                          alt="tiger image"
                        />
                      </Link>
                    </figure>
                    <div className="interest-sec">
                      <span>13 Nights - 14 Days</span>
                      <h4>
                        <Link to={""}>India Tiger Tour</Link>
                      </h4>
                    </div>
                  </div>
                  <div className="interest-content">
                    <figure>
                      <Link to={""}>
                        <img
                          src="https://www.tourmyindia.com/tmimg/golden-tiger.webp"
                          alt="tiger image"
                        />
                      </Link>
                    </figure>
                    <div className="interest-sec">
                      <span>9 Nights - 10 Days</span>
                      <h4>
                        <Link to={""}>Golden Triangle with Tigers</Link>
                      </h4>
                    </div>
                  </div>
                  <div className="interest-content">
                    <figure>
                      <Link to={""}>
                        <img
                          src="https://www.tourmyindia.com/tmimg/rhino-tiger.webp"
                          alt="tiger image"
                        />
                      </Link>
                    </figure>
                    <div className="interest-sec">
                      <span>13 Nights - 14 Days</span>
                      <h4>
                        <Link to={""}>Rhino &amp; Tigers Tour</Link>
                      </h4>
                    </div>
                  </div>
                  <div className="interest-content">
                    <figure>
                      <Link to={""}>
                        <img
                          src="https://www.tourmyindia.com/tmimg/tiger-safari.webp"
                          alt="tiger image"
                        />
                      </Link>
                    </figure>
                    <div className="interest-sec">
                      <span>10 Nights - 11 Days</span>
                      <h4>
                        <Link to={""}>Tiger Safari Expedition</Link>
                      </h4>
                    </div>
                  </div>
                  <div className="interest-content">
                    <figure>
                      <Link to={""}>
                        <img
                          src="https://www.tourmyindia.com/tmimg/tiger-photography.webp"
                          alt="tiger image"
                        />
                      </Link>
                    </figure>
                    <div className="interest-sec">
                      <span>9 Nights - 10 Days</span>
                      <h4>
                        <Link>Tiger Photography</Link>
                      </h4>
                    </div>
                  </div>
                  <div className="interest-content">
                    <figure>
                      <Link to={""}>
                        <img
                          src="https://www.tourmyindia.com/tmimg/corbett-tiger.webp"
                          alt="tiger image"
                        />
                      </Link>
                    </figure>
                    <div className="interest-sec">
                      <span>7 Nights - 8 Days</span>
                      <h4>
                        <Link to={""}>Corbett Safari</Link>
                      </h4>
                    </div>
                  </div>
                  <div className="interest-content">
                    <figure>
                      <Link to={""}>
                        <img
                          src="https://www.tourmyindia.com/tmimg/north-birding.webp"
                          alt="bird image"
                        />
                      </Link>
                    </figure>
                    <div className="interest-sec">
                      <span>13 Nights - 14 Days</span>
                      <h4>
                        <Link to={""}>North India Birding</Link>
                      </h4>
                    </div>
                  </div>
                  <div className="interest-content">
                    <figure>
                      <Link to={""}>
                        <img
                          src="https://www.tourmyindia.com/tmimg/mp-tiger.webp"
                          alt="tiger image"
                        />
                      </Link>
                    </figure>
                    <div className="interest-sec">
                      <span>7 Nights - 8 Days</span>
                      <h4>
                        <Link to={""}>MP Wildlife Safari</Link>
                      </h4>
                    </div>
                  </div>
                  <div className="interest-content">
                    <figure>
                      <Link to={""}>
                        <img
                          src="https://www.tourmyindia.com/tmimg/kaziranga-tiger.webp"
                          alt="tiger image"
                        />
                      </Link>
                    </figure>
                    <div className="interest-sec">
                      <span>4 Nights - 5 Days</span>
                      <h4>
                        <Link to={""}>Kaziranga Wildlife Safari </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="interest-content">
                    <figure>
                      <Link>
                        <img
                          src="https://www.tourmyindia.com/tmimg/gir-safari.webp"
                          alt="lion image"
                        />
                      </Link>
                    </figure>
                    <div className="interest-sec">
                      <span>6 Nights - 7 Days</span>
                      <h4>
                        <Link to={""}>Gir Lion Safari Tour</Link>
                      </h4>
                    </div>
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

export default ByZone;

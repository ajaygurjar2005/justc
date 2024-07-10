import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [destinations, setDestinations] = useState(false);
  const [holidays, setHolidays] = useState(false);
  const [packages, setPackage] = useState(false);
  const navButton = () => {
    setIsVisible(!isVisible);
  };
  const destinationsButtons = () => {
    setDestinations(!destinations);
  };
  const holidaysButtons = () => {
    setHolidays(!holidays);
  };

  const packageButtons = () => {
    setPackage(!packages);
  };


  return (
    <div>
      <header className="header-main" style={{ position: "relative", fontSize:"40px" }}>
        <Link to="" className="logo">
          <img
            src="webicon.ico"
            alt="logo"
          />
        </Link>
        <nav className="navigation" >
          <ul>
            <li className="dropdown">
              <Link to={""} style={{fontSize:'14px'}}>Destinations  {" "}
              {/*?xml version="1.0" encoding="utf-8"?*/}
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="11px"
                height="7px"
                viewBox="0 0 122.88 80.593"
                enableBackground="new 0 0 122.88 80.593"
                xmlSpace="preserve"
              >
                <g>
                  <polygon points="122.88,0 122.88,30.82 61.44,80.593 0,30.82 0,0 61.44,49.772 122.88,0" />
                </g>
              </svg>
            
            </Link>
              <ul className="drop-menu destinations-menu">
                <div className="drop-menu-submenu1">
                  <div className="container2">
                    <div className="left">
                      <ul>
                        <li>
                          <h2>North India</h2>

                          <ul className="wid-dms">
                            <li>
                              <Link to={""}>Rajasthan</Link>
                            </li>
                            <li>
                              <Link to={""}>Himachal Pradesh</Link>
                            </li>
                            <li>
                              <Link to={""}>Uttarakhand</Link>
                            </li>
                            <li>
                              <Link to={""}>Uttarpradesh</Link>
                            </li>
                            <li className="more">
                              <Link to={""}>
                                <span>More...</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <h2>South India</h2>
                          <ul className="wid-dms">
                            <li>
                              <Link to={""}>Kerala</Link>
                            </li>
                            <li>
                              <Link to={""}>Karnataka</Link>
                            </li>
                            <li>
                              <Link to={""}>Tamil Nadu</Link>
                            </li>
                            <li>
                              <Link to={""}>Andhra Pradesh</Link>
                            </li>
                            <li className="more">
                              <Link to={""}>
                                <span>More...</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <h2>East India</h2>
                          <ul className="wid-dms">
                            <li>
                              <Link to={""}>Sikkim</Link>
                            </li>
                            <li>
                              <Link to={""}>Assam</Link>
                            </li>
                            <li>
                              <Link to={""}>Nagaland</Link>
                            </li>
                            <li>
                              <Link to={""}>Tripura</Link>
                            </li>
                            <li>
                              <Link to={""}>Jharkhand</Link>
                            </li>
                            <li className="more">
                              <Link to={""}>
                                <span>More...</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <h2>West India</h2>
                          <ul className="wid-dms">
                            <li>
                              <Link to={""}>Goa</Link>
                            </li>
                            <li>
                              <Link to={""}>Gujarat</Link>
                            </li>
                            <li>
                              <Link to={""}>Maharashtra</Link>
                            </li>
                            <li className="more">
                              <Link to={""}>
                                <span>More...</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <h2>Central India</h2>
                          <ul className="wid-dms">
                            <li>
                              <Link to={""}>Madhya Pradesh</Link>
                            </li>
                            <li>
                              <Link to={""}>Chhattisgarh</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <h2>Union Territories</h2>
                          <ul className="wid-dms">
                            <li>
                              <Link to={""}>Jammu and Kashmir</Link>
                            </li>
                            <li>
                              <Link to={""}>Ladakh</Link>
                            </li>
                            <li>
                              <Link to={""}>Andaman and Nicobar Islands</Link>
                            </li>
                            <li>
                              <Link to={""}>Chandigarh</Link>
                            </li>
                            <li>
                              <Link to={""}>Dadra and Nagar Haveli</Link>
                            </li>
                            <li>
                              <Link to={""}>Daman and Diu</Link>
                            </li>
                            <li>
                              <Link to={""}>Puducherry</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="right">
                      <ul>
                        <li>
                          <Link to={""}>
                            <img
                              src="https://www.tourmyindia.com/imgnew/destination-packages-menu.jpg"
                              alt="package"
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
            <li className="dropdown">
              <Link to={""} style={{fontSize:"14px"}}>Holiday Ideas  <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="11px"
              height="7px"
              viewBox="0 0 122.88 80.593"
              enableBackground="new 0 0 122.88 80.593"
              xmlSpace="preserve"
            >
              <g>
                <polygon points="122.88,0 122.88,30.82 61.44,80.593 0,30.82 0,0 61.44,49.772 122.88,0" />
              </g>
            </svg></Link>
              <ul className="drop-menu holiday-width-set">
                <div className="drop-menu-sub1">
                  <div className="container2">
                    <div className="left">
                      <div className="drop-menu-submenu1">
                        <ul className="holiday-idea3">
                          <li>
                            <h2>Tourism Destinations by Interest</h2>
                            <ul className="wid-dms">
                              <li>
                                <Link to={""}>Wildlife</Link>
                              </li>
                              <li>
                                <Link to={""}>Hill Station</Link>
                              </li>
                              <li>
                                <Link to={""}>Beaches</Link>
                              </li>
                              <li>
                                <Link to={""}>Yoga and Ayurveda</Link>
                              </li>
                              <li>
                                <Link to={""}>Heritage</Link>
                              </li>
                              <li>
                                <Link to={""}>Honeymoon</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <ul className="holiday-idea1">
                          <li>
                            <h2>Adventure Tourism</h2>
                            <ul className="wid-dms">
                              <li>
                                <Link to={""}>Trekking</Link>
                              </li>
                              <li>
                                <Link to={""}>Skiing</Link>
                              </li>
                              <li>
                                <Link to={""}>Motor Biking</Link>
                              </li>
                              <li>
                                <Link to={""}>Peak Climbing</Link>
                              </li>
                              <li>
                                <Link to={""}>Mountain Biking</Link>
                              </li>
                              <li>
                                <Link to={""}>River Rafting</Link>
                              </li>
                              <li>
                                <Link to={""}>Horse Safari</Link>
                              </li>
                              <li>
                                <Link to={""}>Camel Safari</Link>
                              </li>
                              <li>
                                <Link to={""}>Jeep Safari</Link>
                              </li>
                              <li className="more">
                                <Link to={""}>
                                  <span>More....</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <ul className="holiday-idea2">
                          <li>
                            <h2>Pilgrimage Tourism</h2>
                            <ul className="wid-dms">
                              <li>
                                <Link to={""}>Hindu</Link>
                              </li>
                              <li>
                                <Link to={""}>Sikh</Link>
                              </li>
                              <li>
                                <Link to={""}>Christianity</Link>
                              </li>
                              <li>
                                <Link to={""}>Buddhism</Link>
                              </li>
                              <li>
                                <Link to={""}>Jain</Link>
                              </li>
                              <li>
                                <Link to={""}>Muslim</Link>
                              </li>
                              <li className="more">
                                <Link to={""}>
                                  <span>More....</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="right">
                      <ul>
                        <li>
                          <Link to={""}>
                            <img
                              src="https://www.tourmyindia.com/imgnew/holiday-idea-packages-menu.jpg"
                              alt="package"
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
            <li className="dropdown">
              <Link to={""} style={{fontSize:"14px"}}>Packages  <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="11px"
              height="7px"
              viewBox="0 0 122.88 80.593"
              enableBackground="new 0 0 122.88 80.593"
              xmlSpace="preserve"
            >
              <g>
                <polygon points="122.88,0 122.88,30.82 61.44,80.593 0,30.82 0,0 61.44,49.772 122.88,0" />
              </g>
            </svg></Link>
              <ul className="drop-menu pak-widthset">
                <div className="drop-menu-sub1">
                  <div className="drop-menu-submenu1">
                    <div className="container2">
                      <div className="left">
                        <ul className="wid-dms4 pakg">
                          <li>
                            <h2>Packages by State</h2>
                            <ul className="wid-dms pakg">
                              <li>
                                <Link to={""}>Jammu & Kashmir</Link>
                              </li>
                              <li>
                                <Link to={""}>Rajasthan</Link>
                              </li>
                              <li>
                                <Link to={""}>Kerala</Link>
                              </li>
                              <li>
                                <Link to={""}>Uttarakhand</Link>
                              </li>
                              <li>
                                <Link to={""}>Himachal</Link>
                              </li>
                              <li>
                                <Link to={""}>Madhya Pradesh</Link>
                              </li>
                              <li>
                                <Link to={""}>Karnataka</Link>
                              </li>
                              <li>
                                <Link to={""}>Maharashtra</Link>
                              </li>
                              <li>
                                <Link to={""}>Gujarat</Link>
                              </li>
                              <li className="more">
                                <Link to={""}>
                                  <span>More...</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <ul className="wid-dms4 pakg">
                          <li>
                            <h2>Holidays by Interest</h2>
                            <ul className="wid-dms">
                              <li>
                                <Link to={""}>Wildlife</Link>
                              </li>
                              <li>
                                <Link to={""}>Adventure</Link>
                              </li>
                              <li>
                                <Link to={""}>Honeymoon</Link>
                              </li>
                              <li>
                                <Link to={""}>Beach</Link>
                              </li>
                              <li>
                                <Link to={""}>Pilgrimage</Link>
                              </li>
                              <li>
                                <Link to={""}>Hill Station</Link>
                              </li>
                              <li>
                                <Link to={""}>Heritage Tours</Link>
                              </li>
                              <li>
                                <Link to={""}>Ayurveda Tours</Link>
                              </li>
                              <li>
                                <Link to={""}>Cultural</Link>
                              </li>
                              <li>
                                <Link to={""}>Special Interest</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <ul className="wid-dms4 pakg ptp">
                          <li>
                            <h2>Popular Tour Packages</h2>
                            <ul className="wid-dms pti">
                              <li>
                                <Link to={""}>Golden Triangle Tour</Link>
                              </li>
                              <li>
                                <Link to={""}>Classical India Tour</Link>
                              </li>
                              <li>
                                <Link to={""}>
                                  Golden Triangle with Tiger Tour
                                </Link>
                              </li>
                              <li>
                                <Link to={""}>Sikkim Darjeeling Tour</Link>
                              </li>
                              <li>
                                <Link to={""}>Frozen River Trek</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <ul className="wid-dms4 pakg">
                          <li>
                            <h2>Luxury Train Tour</h2>
                            <ul className="wid-dms">
                              <li>
                                <Link to={""}>Palace on Wheels</Link>
                              </li>
                              <li>
                                <Link to={""}>Heritage on Wheels</Link>
                              </li>
                              <li>
                                <Link to={""}>Maharaja Express</Link>
                              </li>
                              <li>
                                <Link to={""}>Royal Rajasthan on Wheels</Link>
                              </li>
                              <li>
                                <Link to={""}>Buddhist Circuit Train</Link>
                              </li>
                              <li className="more">
                                <Link to={""}>
                                  <span>More....</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <ul className="wid-dms4 pakg">
                          <li>
                            <h2>Special Packages</h2>
                            <ul className="wid-dms">
                              <li>
                                <Link to={""}>Indian Wildlife Tour</Link>
                              </li>
                              <li>
                                <Link to={""}>Temple Trails Tour India</Link>
                              </li>
                              <li>
                                <Link to={""}>Buddhist Circuit Tours</Link>
                              </li>
                              <li>
                                <Link to={""}>Himalayan Wonder</Link>
                              </li>
                              <li className="more">
                                <Link to={""}>
                                  <span>More....</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <ul className="wid-dms4 pakg">
                          <li>
                            <h2>Fixed Departure Tour</h2>
                            <ul className="wid-dms">
                              <li>
                                <Link to={""}>Chadar Trek</Link>
                              </li>
                              <li>
                                <Link to={""}>Chopta - Chandrashila Trek</Link>
                              </li>
                              <li>
                                <Link to={""}>Snow Leopard</Link>
                              </li>
                              <li>
                                <Link to={""}>Dzongri Goecha La Trek</Link>
                              </li>
                              <li className="more">
                                <Link to={""}>
                                  <span>More....</span>
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className="right">
                        <ul>
                          <li>
                            <Link to={""}>
                              <img
                                src="https://www.tourmyindia.com/imgnew/packages-menu.jpg"
                                alt="package"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
            <li className="dropdown" >
              <Link to={""} style={{fontSize:"13px"}}>Places to Stay</Link>
            </li>
            <li className="dropdown">
              <Link to={""} style={{fontSize:"13px"}}>Weekend Getaways</Link>
            </li>
          </ul>
        </nav>
        <div className="nav-right">
          <ul>
            <li>
              <Link to={""}>
                <img
                  src="https://www.tourmyindia.com/imgnew/destinaton-wedding.svg"
                  alt="image"
                />{" "}
                Destination Weddings
              </Link>
            </li>
            <li>
              <Link>
                <img
                  src="https://www.tourmyindia.com/imgnew/mics.svg"
                  alt="image"
                />
                Contact Us
              </Link>
            </li>
            <li>
              <Link to={"/Rajasthan-tour"}>
                <img
                  src="https://www.tourmyindia.com/imgnew/medical-tourism.svg"
                  alt="image"
                />{""}
                North Tourism
              </Link>
            </li>
          </ul>
        </div>
        <Link
          href="javascript:void(0);"
          aria-haspopup="true"
          tabIndex={0}
          id="onclic"
          onClick={() => navButton()}
          className="tmimenu_btn slicknav_open"
          style={{ outline: "medium none" }}
        >
          <div className="tmimenu_icon">
            <span />
            <span />
            <span />
          </div>
        </Link>
        <div
          className="u-vmenu d-md-none"
          id="u-vmenu"
          style={{ display: `${isVisible ? "block" : "none"}` }}
        >
          <ul>
            <li>
              <Link
                to={""}
                onClick={() => destinationsButtons()}
                className="curisor"
                style={{ fontSize: "25px" }}
              >
                Destinations {"      "} {destinations ? "-" : "+"}
              </Link>
              <span />
              <ul style={{ display: `${destinations ? "block" : "none"}` }}>
                <li>
                  <Link to={""}>North India</Link>
                  <span />
                  <ul>
                    <li>
                      <Link to="">Rajasthan</Link>
                    </li>
                    <li>
                      <Link to="">Himachal Pradesh</Link>
                    </li>
                    <li>
                      <Link to="">Uttarakhand</Link>
                    </li>
                    <li>
                      <Link to="">Uttarpradesh</Link>
                    </li>
                    <li className="more">
                      <Link to="">More...</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={""}>South India</Link>
                  <span />
                  <ul>
                    <li>
                      <Link to="">Kerala</Link>
                    </li>
                    <li>
                      <Link to="">Karnataka</Link>
                    </li>
                    <li>
                      <Link to="">Tamil Nadu</Link>
                    </li>
                    <li>
                      <Link to="">Andhra Pradesh</Link>
                    </li>
                    <li className="more">
                      <Link to="">More...</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={""}>East India</Link>
                  <span />
                  <ul>
                    <li>
                      <Link to="">Sikkim</Link>
                    </li>
                    <li>
                      <Link to="">Assam</Link>
                    </li>
                    <li>
                      <Link to="">Nagaland</Link>
                    </li>
                    <li>
                      <Link to="">Tripura</Link>
                    </li>
                    <li>
                      <Link to="">Jharkhand</Link>
                    </li>
                    <li className="more">
                      <Link to="">More...</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={""}>West India</Link>
                  <span />
                  <ul>
                    <li>
                      <Link to="">Goa</Link>
                    </li>
                    <li>
                      <Link to="">Gujarat</Link>
                    </li>
                    <li>
                      <Link to="">Maharashtra</Link>
                    </li>
                    <li className="more">
                      <Link to="">More...</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={""}>Central India</Link>
                  <span />
                  <ul>
                    <li>
                      <Link to="">Madhya Pradesh</Link>
                    </li>
                    <li>
                      <Link to="">Chhattisgarh</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={""}>Union Territories</Link>
                  <span />
                  <ul>
                    <li>
                      <Link to="">Jammu and Kashmir</Link>
                    </li>
                    <li>
                      <Link to="">Ladakh</Link>
                    </li>
                    <li>
                      <Link to="">Andaman and Nicobar Islands</Link>
                    </li>
                    <li>
                      <Link to="">Chandigarh</Link>
                    </li>
                    <li>
                      <Link to="">Dadra and Nagar Haveli</Link>
                    </li>
                    <li>
                      <Link to="">Daman and Diu</Link>
                    </li>
                    <li>
                      <Link to="">Puducherry</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to={""}
                onClick={() => holidaysButtons()}
                className="curisor"
                style={{ fontSize: "25px" }}
              >
                Holiday Ideas {"      "} {holidays ? "-" : "+"}
              </Link>
              <span />
              <ul style={{ display: `${holidays ? "block" : "none"}` }}>
                <li>
                  <Link to={""}>Tourism Destinations by Interest</Link>
                  <span />
                  <ul>
                    <li>
                      <Link to="">Wildlife</Link>
                    </li>
                    <li>
                      <Link to="">Hill Station</Link>
                    </li>
                    <li>
                      <Link to="">Beaches</Link>
                    </li>
                    <li>
                      <Link to="">Yoga and Ayurveda</Link>
                    </li>
                    <li>
                      <Link to="">Heritage</Link>
                    </li>
                    <li>
                      <Link to="">Honeymoon</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={""}>Adventure Tourism</Link>
                  <span />
                  <ul>
                    <li>
                      <Link to="">Trekking</Link>
                    </li>
                    <li>
                      <Link to="">Skiing</Link>
                    </li>
                    <li>
                      <Link to="">Motor Biking</Link>
                    </li>
                    <li>
                      <Link to="">Peak Climbing</Link>
                    </li>
                    <li>
                      <Link to="">Mountain Biking</Link>
                    </li>
                    <li>
                      <Link to="">River Rafting</Link>
                    </li>
                    <li>
                      <Link to="">Horse Safari</Link>
                    </li>
                    <li>
                      <Link to="">Camel Safari</Link>
                    </li>
                    <li>
                      <Link to="">Jeep Safari</Link>
                    </li>
                    <li className="more">
                      <Link to="">More....</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={""}>Pilgrimage Tourism</Link>
                  <span />
                  <ul>
                    <li>
                      <Link to="">Hindu</Link>
                    </li>
                    <li>
                      <Link to="">Sikh</Link>
                    </li>
                    <li>
                      <Link to="">Christianity</Link>
                    </li>
                    <li>
                      <Link to="">Buddhism</Link>
                    </li>
                    <li>
                      <Link to="">Jain</Link>
                    </li>
                    <li>
                      <Link to="">Muslim</Link>
                    </li>
                    <li className="more">
                      <Link to="">More....</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to={""}
                onClick={() => packageButtons()}
                className="curisor"
                style={{ fontSize: "25px" }}
              >
                Packages {packages ? "-" : "+"}
              </Link>
              <span />
              <ul style={{ display: `${packages ? "block" : "none"}` }}>
                <li>
                  <Link to={""}>Packages by State</Link>
                  <span />
                  <ul>
                    <li>
                      <Link to="">Jammu &amp; Kashmir</Link>
                    </li>
                    <li>
                      <Link to="">Rajasthan</Link>
                    </li>
                    <li>
                      <Link to="">Kerala</Link>
                    </li>
                    <li>
                      <Link to="">Uttarakhand</Link>
                    </li>
                    <li>
                      <Link to="">Himachal</Link>
                    </li>
                    <li>
                      <Link to="">Madhya Pradesh</Link>
                    </li>
                    <li>
                      <Link to="">Karnataka</Link>
                    </li>
                    <li>
                      <Link to="">Maharashtra</Link>
                    </li>
                    <li>
                      <Link to="">Gujarat</Link>
                    </li>
                    <li className="more">
                      <Link to="">More...</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={""}>Holidays by Interest</Link>
                  <span />
                  <ul>
                    <li>
                      <Link to="">Wildlife</Link>
                    </li>
                    <li>
                      <Link to="">Adventure</Link>
                    </li>
                    <li>
                      <Link to="">Honeymoon</Link>
                    </li>
                    <li>
                      <Link to="">Beach</Link>
                    </li>
                    <li>
                      <Link to="">Pilgrimage</Link>
                    </li>
                    <li>
                      <Link to="">Hill Station</Link>
                    </li>
                    <li>
                      <Link to="">Heritage Tours</Link>
                    </li>
                    <li>
                      <Link to="">Ayurveda Tours</Link>
                    </li>
                    <li>
                      <Link to="">Cultural</Link>
                    </li>
                    <li>
                      <Link to="">Special Interest</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={""}>Popular Tour Packages</Link>
                  <span />
                  <ul>
                    <li>
                      <Link to="">Golden Triangle Tour</Link>
                    </li>
                    <li>
                      <Link to="">Classical India Tour</Link>
                    </li>
                    <li>
                      <Link to="">Golden Triangle with Tiger Tour</Link>
                    </li>
                    <li>
                      <Link to="">Sikkim Darjeeling Tour</Link>
                    </li>
                    <li>
                      <Link to="">Frozen River Trek</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={""}>Luxury Train Tour</Link>
                  <span />
                  <ul>
                    <li>
                      <Link to="">Palace on Wheels</Link>
                    </li>
                    <li>
                      <Link to="">Heritage on Wheels</Link>
                    </li>
                    <li>
                      <Link to="">Maharaja Express</Link>
                    </li>
                    <li>
                      <Link to="">Royal Rajasthan on Wheels</Link>
                    </li>
                    <li>
                      <Link to="">Buddhist Circuit Train</Link>
                    </li>
                    <li className="more">
                      <Link to="">More....</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={""}>Special Packages</Link>
                  <span />
                  <ul>
                    <li>
                      <Link to="">Indian Wildlife Tour</Link>
                    </li>
                    <li>
                      <Link to="">Temple Trails Tour India</Link>
                    </li>
                    <li>
                      <Link to="">Buddhist Circuit Tours</Link>
                    </li>
                    <li>
                      <Link to="">Himalayan Wonder</Link>
                    </li>
                    <li className="more">
                      <Link to="">More....</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={""}>Fixed Departure Tour</Link>
                  <span />
                  <ul>
                    <li>
                      <Link to="">Chadar Trek</Link>
                    </li>
                    <li>
                      <Link to="">Chopta - Chandrashila Trek</Link>
                    </li>
                    <li>
                      <Link to="">Snow Leopard</Link>
                    </li>
                    <li>
                      <Link to="">Dzongri Goecha La Trek</Link>
                    </li>
                    <li className="more">
                      <Link to="">More....</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to={""}
                
                className="curisor"
                style={{ fontSize: "25px" }}
              >
                Places to Stay
              </Link>
              <span />
            </li>
            <li>
              <Link
                to={""}
                className="curisor"
                style={{ fontSize: "25px" }}
              >
                Weekend Getaways
              </Link>
              <span />
            </li>
            <li>
              <Link to={''}>
                Destinantion Weddings
              </Link>
            </li>
            <li>
              <Link to={''}>Contact</Link>
            </li>
            <li>
              <Link to={'/Rajasthan-tour'}>
                North Tourism
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;

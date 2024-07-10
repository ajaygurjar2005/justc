import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer.js/Footer";
import { Link } from "react-router-dom";

const Rajasthan = () => {
  return (
    <div>
      <html key="1">
        <head>
          <meta charSet="UTF-8" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <title>
            Rajasthan Tour Packages with up to 40% Off | Tour My India
          </title>
        </head>
        <body>
          <Header />
          <section className="banner">
            <div className="hero-section-banner">
              <figure>
                <img
                  alt="rajasthan-banner"
                  src="images/rajasthan-banner.webp"
                />
              </figure>
            </div>
            <div className="banner-content-in">
              <p>
                It's time for Exploring
                <strong>
                  {" "}
                  <br />
                  Rajasthan
                </strong>
              </p>
            </div>
          </section>
          <section className="rajasthan-tour-packages-section common-padding">
            <div className="scrn-container">
              <div className="row tour-packages-sec">
                <div className="col-lg-7 col-md-7 tour-packages-col desktop-view-tour">
                  <div className="main-heading">
                    <h1>Rajasthan Tour Packages </h1>
                  </div>
                  <div className="package-tour-content">
                    <div className="package-tour-content-title">
                      <p>
                        Discover the incredible beauty of the land of the royals
                        as we take you to explore Rajasthan's most glorious
                        palaces and forts. With our Rajasthan tour packages, you
                        will find yourself immersed in the charm and grandeur of
                        the state.{" "}
                      </p>
                    </div>
                    <div className="package-tour-content-title">
                      <p>
                        Our Rajasthan tour packages make sure that you have the
                        most seamless travel experience while you get the best
                        of this colorful and vibrant destination. Choose from
                        our tour packages and cater them according to your
                        specific requirements, all at the best prices. Spending
                        your holidays in Rajasthan with us will provide you with
                        an opportunity to explore the state's regal and
                        enchanting architecture, vibrant culture, and rich
                        wildlife, all wrapped up in a blanket of warm
                        hospitality.{" "}
                      </p>
                    </div>
                    <div className="package-tour-content-title">
                      <p>
                        Tour My India's exclusively designed holiday packages
                        cover the major heritage attractions from the popular
                        tourist destinations of Rajasthan, such as Jaipur,
                        Udaipur, Jaisalmer, Bikaner, among many others. Avail
                        the best prices on Rajasthan tour packages 2024/2025 for
                        a family vacation, honeymoon tours, and weekend tour
                        packages by booking Tour My India for your next vacation
                        and discover the beauty of the state like never before!{" "}
                      </p>
                    </div>
                    <div
                      id="hero-section"
                      style={{
                        display: "none",
                      }}
                    >
                      <div className="package-tour-content-title"></div>
                      <div className="package-tour-font2">
                        <h2>Popular Tour Packages for Rajasthan</h2>
                      </div>
                      <div className="package-tour-content-title">
                        <div className="table-form pt-3">
                          <table className="table table-hover table-bordered ">
                            <thead>
                              <tr className="table-form-content">
                                <th scope="col">Package Name</th>
                                <th scope="col">Destination Covered </th>
                                <th scope="col">Trip Duration </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="table-tr-content">
                                <td className="scale">
                                  <Link to={""}>
                                    7-day Golden Triangle Tour
                                  </Link>
                                </td>
                                <td>Jaipur, Delhi, Agra</td>
                                <td>6 Nights 7 Days</td>
                              </tr>
                              <tr className="table-tr-content">
                                <td className="scale">
                                  <Link to={""}>
                                    Golden Triangle Tour with Tigers
                                  </Link>
                                </td>
                                <td>
                                  Delhi, Jaipur, Agra, Bandhavgarh & Kanha
                                </td>
                                <td>13 Nights 14 Days</td>
                              </tr>
                              <tr className="table-tr-content">
                                <td className="scale">
                                  <Link to={""}>
                                    Golden Triangle with Ranthambore Tour
                                  </Link>
                                </td>
                                <td>
                                  Delhi, Jaipur, Ranthambore, Fatehpur Sikhri &
                                  Agra
                                </td>
                                <td>8 Nights 9 Days</td>
                              </tr>
                              <tr className="table-tr-content">
                                <td className="scale">
                                  <Link to={""}>Best of Rajasthan Tour</Link>
                                </td>
                                <td>
                                  Delhi, Udaipur, Jodhpur, Jaisalmer, Bikaner,
                                  Nawalgarh & Jaipur
                                </td>
                                <td>10 Nights 11 Days</td>
                              </tr>
                              <tr className="table-tr-content">
                                <td className="scale">
                                  <Link to={""}>
                                    {" "}
                                    Forts & Palaces Tour of Rajasthan
                                  </Link>
                                </td>
                                <td>
                                  Delhi, Mukundgarh, Bikaner, Jaisalmer,Jodhpur,
                                  Udaipur, Jaipur & Agra
                                </td>
                                <td>13 Nights 14 Days</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="show-more Information-btn-bottom  pt-2 pb-2">
                    <Link
                      className="toggle-active read visit-btn-hover visit-btn-an"
                      to={""}
                    >
                      Load More{" "}
                      <i aria-hidden="true" className="fa fa-angle-right" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="package-tour-col">
                    <img
                      alt="rajastha-assets/images"
                      src="/images/rajasthan-img.webp"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="rajasthan-tour-section bg-color common-padding">
            <div className="scrn-container">
              <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-8 pl-0">
                  <div className="most-popular-rajasthan-content rajasthan-packages-container-top">
                    <div className="package-tour-title">
                      <span>Rajasthan</span>
                    </div>
                    <div className="most-popular-rajasthan-heading package-tour-heading">
                      <h2>Rajasthan Tour Packages by Interest</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rajasthan-tour-container">
                <div className="row">
                  <div className="col-lg-5 col-md-12 col-sm-12">
                    <div className="rajasthan-sec-left">
                      <Link to={""}>
                        <img
                          alt="rajasthan package"
                          src="images/rajasthan-package.webp"
                        />
                      </Link>
                      <div className="rajasthan-left">
                        <h4>
                          <Link>Rajasthan Golden Triangle Tour</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12 col-sm-12">
                    <div className="row flex-wrap">
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 rajasthan-visit">
                        <div className="rajasthan-sec-right rajasthaning-right-in">
                          <Link>
                            <img
                              alt="rajasthan family"
                              src="images/rajasthan-family.webp"
                            />
                          </Link>
                          <div className="rajasthan-right">
                            <h4>
                              <Link to={""}>
                                Rajasthan Family Tour Packages
                              </Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 rajasthans-visit">
                        <div className="rajasthan-sec-right rajasthaning-right-in">
                          <Link to={""}>
                            <img
                              alt="rajasthan wildlife "
                              src="images/rajasthan-wildlife1.webp"
                            />
                          </Link>
                          <div className="rajasthan-right">
                            <h4>
                              <Link to={""}>Rajasthan Wildlife Packages</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 rajasthan-visit ">
                        <div className="rajasthan-sec-right rajasthaning-right-in">
                          <Link to={""}>
                            <img
                              alt="rajasthan honeymoon"
                              src="images/rajasthan-honeymoon.webp"
                            />
                          </Link>
                          <div className="rajasthan-right">
                            <h4>
                              <Link to={""}>Rajasthan Honeymoon Packages </Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 rajasthans-visit">
                        <div className="rajasthan-sec-right rajasthaning-right">
                          <Link to={""}>
                            <img
                              alt="heritage"
                              src="images/rajasthan-heritage.webp"
                            />
                          </Link>
                          <div className="rajasthan-right">
                            <h4>
                              <Link to={""}>Rajasthan Heritage Packages</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 rajasthan-visit">
                        <div className="rajasthan-sec-right rajasthaning-right">
                          <Link to={""}>
                            <img
                              alt="rajasthan culture"
                              src="images/rajasthan-culture.webp"
                            />
                          </Link>
                          <div className="rajasthan-right">
                            <h4>
                              <Link to={""}>Rajasthan Cultural Tours</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-6 rajasthans-visit">
                        <div className="rajasthan-sec-right rajasthaning-right">
                          <Link>
                            <img
                              alt="rajasthan adventure"
                              src="images/rajasthan-adventure.webp"
                            />
                          </Link>
                          <div className="rajasthan-right">
                            <h4>
                              <Link to={""}>Rajasthan Adventure Tours</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="rajasthan-packages-section common-padding-in">
            <div className="scrn-container">
              <div className="rajasthan-packages-container-top">
                <div className="row">
                  <div className="col-sm-12 col-md-8 col-lg-8 pl-0">
                    <div className="package-tour-title">
                      <span> Family Tour</span>
                    </div>
                    <div className="package-tour-heading">
                      <h2>Rajasthan Family Tour Packages</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rajasthan-packages-container">
                <div className="card-row row">
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 card-hover-box">
                    <div className="card-section-content card-box-row">
                      <div className="packages-iamges">
                        <Link to={""}>
                          <figure>
                            <img
                              alt="Desert Romance"
                              src="images/desert-romance-tour.webp"
                            />
                          </figure>
                        </Link>
                        <div className="package-tour-time">
                          <span>14 Nights - 15 Days</span>
                        </div>
                      </div>
                      <div className="packages-card-content-heading">
                        <h3>
                          <Link to={""}>Desert Romance</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 card-hover-box">
                    <div className="card-section-content card-box-row">
                      <div className="packages-iamges">
                        <Link to={""}>
                          <figure>
                            <img
                              alt="Off Track Rajasthan"
                              src="images/off-track-tour-rajasthan.webp"
                            />
                          </figure>
                        </Link>
                        <div className="package-tour-time">
                          <span>14 Nights - 15 Days</span>
                        </div>
                      </div>
                      <div className="packages-card-content-heading">
                        <h3>
                          <Link to={""}>Off Track Rajasthan</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 card-hover-box">
                    <div className="card-section-content card-box-row">
                      <div className="packages-iamges">
                        <Link to={""}>
                          <figure>
                            <img
                              alt="Rajasthan Rendezvous"
                              src="images/rajasthan-rendezvous-tour.webp"
                            />
                          </figure>
                        </Link>
                        <div className="package-tour-time">
                          <span>12 Nights - 13 Days</span>
                        </div>
                      </div>
                      <div className="packages-card-content-heading">
                        <h3>
                          <Link to={""}>Rajasthan Rendezvous</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 card-hover-box">
                    <div className="card-section-content card-box-row">
                      <div className="packages-iamges">
                        <Link to={""}>
                          <figure>
                            <img
                              alt="Golden Triangle Tour"
                              src="images/delhi-popular.webp"
                            />
                          </figure>
                        </Link>
                        <div className="package-tour-time">
                          <span>3 Nights - 4 Days</span>
                        </div>
                      </div>
                      <div className="packages-card-content-heading">
                        <h3>
                          <Link to={""}>Golden Triangle Tour</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 card-hover-box">
                    <div className="card-section-content card-box-row">
                      <div className="packages-iamges">
                        <Link to={""}>
                          <figure>
                            <img
                              alt="Golden Triangle Tour"
                              src="images/3nights-4days-golden-triangle-tour2.webp"
                            />
                          </figure>
                        </Link>
                        <div className="package-tour-time">
                          <span>4 Nights - 5 Days</span>
                        </div>
                      </div>
                      <div className="packages-card-content-heading">
                        <h3>
                          <Link to={""}>Golden Triangle Tour</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 card-hover-box">
                    <div className="card-section-content card-box-row">
                      <div className="packages-iamges">
                        <Link to={""}>
                          <figure>
                            <img
                              alt="Golden Triangle Tour"
                              src="images/jaipur-popular.webp"
                            />
                          </figure>
                        </Link>
                        <div className="package-tour-time">
                          <span>5 Nights - 6 Days</span>
                        </div>
                      </div>
                      <div className="packages-card-content-heading">
                        <h3>
                          <Link to={""}>Golden Triangle Tour</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 card-hover-box">
                    <div className="card-section-content card-box-row">
                      <div className="packages-iamges">
                        <Link to={""}>
                          <figure>
                            <img
                              alt="Golden Triangle Tour"
                              src="images/jaipur1-popular.webp"
                            />
                          </figure>
                        </Link>
                        <div className="package-tour-time">
                          <span>6 Nights - 7 Days</span>
                        </div>
                      </div>
                      <div className="packages-card-content-heading">
                        <h3>
                          <Link to={""}>Golden Triangle Tour</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 card-hover-box">
                    <div className="card-section-content card-box-row">
                      <div className="packages-iamges">
                        <Link to={""}>
                          <figure>
                            <img
                              alt="Golden Triangle Tour"
                              src="images/delhi1-popular.webp"
                            />
                          </figure>
                        </Link>
                        <div className="package-tour-time">
                          <span>7 Nights - 8 Days</span>
                        </div>
                      </div>
                      <div className="packages-card-content-heading">
                        <h3>
                          <Link to={""}>Golden Triangle Tour</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="show-more Information-btn-bottom  pt-2 pb-2">
                  <Link
                    className="toggle-active read visit-btn-hover visit-btn-an"
                    to={""}
                  >
                    Load More{" "}
                    <i aria-hidden="true" className="fa fa-angle-right" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="honeymoon-tour-section common-padding-in">
            <div className="scrn-container">
              <div className="rajasthan-packages-container-top">
                <div className="row">
                  <div className="col-sm-12 col-md-8 col-lg-8 pl-0">
                    <div className="package-tour-title">
                      <span> Honeymoon Tour</span>
                    </div>
                    <div className="package-tour-heading">
                      <h2>Rajasthan Honeymoon Tour Packages</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rajasthan-packages-container">
                <div className="card-row row">
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 card-hover-box">
                    <div className="card-section-content card-box-row">
                      <div className="packages-iamges">
                        <Link to={""}>
                          <figure>
                            <img
                              alt="Romance Of Rajasthan"
                              src="images/romance-of-rajasthan.webp"
                            />
                          </figure>
                        </Link>
                        <div className="package-tour-time">
                          <span>4 Nights - 5 Days</span>
                        </div>
                      </div>
                      <div className="packages-card-content-heading">
                        <h3>
                          <Link to={""}>Romance Of Rajasthan</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 card-hover-box">
                    <div className="card-section-content card-box-row">
                      <div className="packages-iamges">
                        <Link to={""}>
                          <figure>
                            <img
                              alt="Romantic Rajasthan"
                              src="images/romatic-rajasthan.webp"
                            />
                          </figure>
                        </Link>
                        <div className="package-tour-time">
                          <span>15 Nights - 16 Days</span>
                        </div>
                      </div>
                      <div className="packages-card-content-heading">
                        <h3>
                          <Link to={""}>Romantic Rajasthan</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 card-hover-box">
                    <div className="card-section-content card-box-row">
                      <div className="packages-iamges">
                        <Link to={""}>
                          <figure>
                            <img
                              alt="Jaipur Honeymoon Package"
                              src="images/jaipur-honeymoon-tour.webp"
                            />
                          </figure>
                        </Link>
                        <div className="package-tour-time">
                          <span>3 Nights - 4 Days</span>
                        </div>
                      </div>
                      <div className="packages-card-content-heading">
                        <h3>
                          <Link to={""}>Jaipur Honeymoon Package</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 card-hover-box">
                    <div className="card-section-content card-box-row">
                      <div className="packages-iamges">
                        <Link to={""}>
                          <figure>
                            <img
                              alt="Udaipur Honeymoon Package"
                              src="images/udaipur-honeymoon-package-tour.webp"
                            />
                          </figure>
                        </Link>
                        <div className="package-tour-time">
                          <span>6 Nights - 7 Days</span>
                        </div>
                      </div>
                      <div className="packages-card-content-heading">
                        <h3>
                          <Link to={""}>Udaipur Honeymoon Package</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 card-hover-box">
                    <div className="card-section-content card-box-row">
                      <div className="packages-iamges">
                        <Link to={""}>
                          <figure>
                            <img
                              alt="Jaisalmer Honeymoon Package"
                              src="images/jaisalmer-honeymoon-package.webp"
                            />
                          </figure>
                        </Link>
                        <div className="package-tour-time">
                          <span>4 Nights - 5 Days</span>
                        </div>
                      </div>
                      <div className="packages-card-content-heading">
                        <h3>
                          <Link to={""}>Jaisalmer Honeymoon Package</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="heritage-tour-section common-padding-in">
            <div className="scrn-container">
              <div className="rajasthan-packages-container-top">
                <div className="row">
                  <div className="col-sm-12 col-md-8 col-lg-8 pl-0">
                    <div className="package-tour-title">
                      <span>Heritage Tour</span>
                    </div>
                    <div className="package-tour-heading">
                      <h2>Rajasthan Heritage Packages</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rajasthan-packages-container">
                <div className="card-row row">
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 card-hover-box">
                    <div className="card-section-content card-box-row">
                      <div className="packages-iamges">
                        <Link to={""}>
                          <figure>
                            <img
                              alt="Golden Triangle Tour With Amritsar"
                              src="images/golden-triangle-with-amritsar-tour.webp"
                            />
                          </figure>
                        </Link>
                        <div className="package-tour-time">
                          <span>7 Nights - 8 Days</span>
                        </div>
                      </div>
                      <div className="packages-card-content-heading">
                        <h3>
                          <Link>Golden Triangle Tour With Amritsar</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 card-hover-box">
                    <div className="card-section-content card-box-row">
                      <div className="packages-iamges">
                        <Link to={""}>
                          <figure>
                            <img
                              alt="Forts And Palaces Of Rajasthan"
                              src="images/forts-and-palaces-of-rajasthan.webp"
                            />
                          </figure>
                        </Link>
                        <div className="package-tour-time">
                          <span>13 Nights - 14 Days</span>
                        </div>
                      </div>
                      <div className="packages-card-content-heading">
                        <h3>
                          <Link to={""}>Forts And Palaces Of Rajasthan</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 card-hover-box">
                    <div className="card-section-content card-box-row">
                      <div className="packages-iamges">
                        <Link to={""}>
                          <figure>
                            <img
                              alt="Best Of Rajasthan"
                              src="images/best-of-rajasthan2.webp"
                            />
                          </figure>
                        </Link>
                        <div className="package-tour-time">
                          <span>12 Nights - 13 Days</span>
                        </div>
                      </div>
                      <div className="packages-card-content-heading">
                        <h3>
                          <Link to={""}>Best Of Rajasthan</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 card-hover-box">
                    <div className="card-section-content card-box-row">
                      <div className="packages-iamges">
                        <Link to={""}>
                          <figure>
                            <img
                              alt="Forts Of Rajasthan"
                              src="images/forts-of-rajasthan2.webp"
                            />
                          </figure>
                        </Link>
                        <div className="package-tour-time">
                          <span>15 Nights - 16 Days</span>
                        </div>
                      </div>
                      <div className="packages-card-content-heading">
                        <h3>
                          <Link to={""}>Forts Of Rajasthan</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 card-hover-box">
                    <div className="card-section-content card-box-row">
                      <div className="packages-iamges">
                        <Link to={""}>
                          <figure>
                            <img
                              alt="Rajput Heritage Tour India"
                              src="images/rajput.webp"
                            />
                          </figure>
                        </Link>
                        <div className="package-tour-time">
                          <span>17 Nights - 18 Days</span>
                        </div>
                      </div>
                      <div className="packages-card-content-heading">
                        <h3>
                          <Link to={""}>Rajput Heritage Tour India</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="cultural-tour-section common-padding-in">
            <div className="scrn-container">
              <div className="rajasthan-packages-container-top">
                <div className="row">
                  <div className="col-sm-12 col-md-8 col-lg-8 pl-0">
                    <div className="package-tour-title">
                      <span>Cultural Tour</span>
                    </div>
                    <div className="package-tour-heading">
                      <h2>Rajasthan Cultural Tour Packages</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rajasthan-packages-container">
                <div className="card-row row">
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 card-hover-box">
                    <div className="card-section-content card-box-row">
                      <div className="packages-iamges">
                        <Link to={""}>
                          <figure>
                            <img
                              alt="Classical India Tour"
                              src="images/classical-india-tour2.webp"
                            />
                          </figure>
                        </Link>
                        <div className="package-tour-time">
                          <span>10 Nights - 11 Days</span>
                        </div>
                      </div>
                      <div className="packages-card-content-heading">
                        <h3>
                          <Link to={""}>Classical India Tour</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 card-hover-box">
                    <div className="card-section-content card-box-row">
                      <div className="packages-iamges">
                        <Link to={""}>
                          <figure>
                            <img
                              alt="Best Of North India Tour"
                              src="images/3nights-4days-golden-triangle-tour2.webp"
                            />
                          </figure>
                        </Link>
                        <div className="package-tour-time">
                          <span>12 Nights - 13 Days</span>
                        </div>
                      </div>
                      <div className="packages-card-content-heading">
                        <h3>
                          <Link to={""}>Best Of North India Tour</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 card-hover-box">
                    <div className="card-section-content card-box-row">
                      <div className="packages-iamges">
                        <Link to={""}>
                          <figure>
                            <img
                              alt="Best Of Rajasthan"
                              src="images/best-of-rajasthan2.webp"
                            />
                          </figure>
                        </Link>
                        <div className="package-tour-time">
                          <span>6 Nights - 7 Days</span>
                        </div>
                      </div>
                      <div className="packages-card-content-heading">
                        <h3>
                          <Link to={""}>Best Of Rajasthan</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 card-hover-box">
                    <div className="card-section-content card-box-row">
                      <div className="packages-iamges">
                        <Link to={""}>
                          <figure>
                            <img
                              alt="Forts And Palaces Of Rajasthan"
                              src="images/forts-and-palaces-of-rajasthan.webp"
                            />
                          </figure>
                        </Link>
                        <div className="package-tour-time">
                          <span>10 Nights - 11 Days</span>
                        </div>
                      </div>
                      <div className="packages-card-content-heading">
                        <h3>
                          <Link to={""}>Forts And Palaces Of Rajasthan</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 card-hover-box">
                    <div className="card-section-content card-box-row">
                      <div className="packages-iamges">
                        <Link to={""}>
                          <figure>
                            <img
                              alt="Mystical India Tour"
                              src="images/mystical-india-tour.webp"
                            />
                          </figure>
                        </Link>
                        <div className="package-tour-time">
                          <span>16 Nights - 17 Days</span>
                        </div>
                      </div>
                      <div className="packages-card-content-heading">
                        <h3>
                          <Link to={""}>Mystical India Tour</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 card-hover-box">
                    <div className="card-section-content card-box-row">
                      <div className="packages-iamges">
                        <Link to={""}>
                          <figure>
                            <img
                              alt="Cultural Tour India"
                              src="images/cultural_tour.webp"
                            />
                          </figure>
                        </Link>
                        <div className="package-tour-time">
                          <span>13 Nights - 14 Days</span>
                        </div>
                      </div>
                      <div className="packages-card-content-heading">
                        <h3>
                          <Link to={""}>Cultural Tour India</Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="popular-rajasthan-travel-guides-section common-padding bg-color">
            <div className="scrn-container">
              <div className="popular-rajasthan-travel-guides-container">
                <div className="row">
                  <div className="col-sm-12 col-md-8 col-lg-8 pl-0">
                    <div className="most-popular-rajasthan-content rajasthan-packages-container-top">
                      <div className="package-tour-title">
                        <span>POPULAR</span>
                      </div>
                      <div className="most-popular-rajasthan-heading package-tour-heading">
                        <h2>Rajasthan Destinations Travel Guides</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row travel-guide-sec">
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
                    <div className="card-travel-guides-box card-box-row ">
                      <figure>
                        <Link to={""}>
                          <img alt="uaipur" src="images/uaipur-card-img.webp" />
                        </Link>
                      </figure>
                      <div className="card-travel-guides-content">
                        <h4>
                          <Link to={""}>Udaipur</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
                    <div className="card-travel-guides-box card-box-row ">
                      <figure>
                        <Link to={""}>
                          <img alt="jaipur" src="images/jaipur-car-img.webp" />
                        </Link>
                      </figure>
                      <div className="card-travel-guides-content">
                        <h4>
                          <a href="https://www.tourmyindia.com/states/rajasthan/rajasthan_jaipur.html">
                            Jaipur
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div className="card-travel-guides-box card-box-row">
                      <figure>
                        <Link to="">
                          <img
                            alt="jaisalmer"
                            src="images/jaisalmer-card-img.webp"
                          />
                        </Link>
                      </figure>
                      <div className="card-travel-guides-content">
                        <h4>
                          <Link to="">Jaisalmer</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div className="card-travel-guides-box card-box-row">
                      <figure>
                        <Link to="">
                          <img
                            alt="jodhpur"
                            src="images/jodhpur-card-img.webp"
                          />
                        </Link>
                      </figure>
                      <div className="card-travel-guides-content">
                        <h4>
                          <Link to="">Jodhpur</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div className="card-travel-guides-box card-box-row">
                      <figure>
                        <Link to="">
                          <img
                            alt="bikaner"
                            src="images/bikaner-card-img.webp"
                          />
                        </Link>
                      </figure>
                      <div className="card-travel-guides-content">
                        <h4>
                          <Link to="">Bikaner</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div className="card-travel-guides-box card-box-row">
                      <figure>
                        <Link to="">
                          <img
                            alt="bharatpur"
                            src="images/bharatpur-card-img.webp"
                          />
                        </Link>
                      </figure>
                      <div className="card-travel-guides-content">
                        <h4>
                          <Link to="">Bharatpur</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div className="card-travel-guides-box card-box-row">
                      <figure>
                        <Link to="">
                          <img alt="Ajmer" src="images/ajmer-card-img.webp" />
                        </Link>
                      </figure>
                      <div className="card-travel-guides-content">
                        <h4>
                          <Link to="">Ajmer</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div className="card-travel-guides-box card-box-row">
                      <figure>
                        <Link to="">
                          <img alt="alwar" src="images/alwar-card-img.webp" />
                        </Link>
                      </figure>
                      <div className="card-travel-guides-content">
                        <h4>
                          <Link to="">Alwar</Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div id="rajasthan-description-in">
                    <div className="row">
                      <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card-travel-guides-box card-box-row">
                          <figure>
                            <Link to="">
                              <img
                                alt="Bundi"
                                src="images/bundi-card-img.webp"
                              />
                            </Link>
                          </figure>
                          <div className="card-travel-guides-content">
                            <h4>
                              <Link to="">Bundi</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card-travel-guides-box card-box-row">
                          <figure>
                            <Link to="">
                              <img
                                alt="Chittorgarh"
                                src="images/chittorgarh-card-img.webp"
                              />
                            </Link>
                          </figure>
                          <div className="card-travel-guides-content">
                            <h4>
                              <Link to="">Chittorgarh</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card-travel-guides-box card-box-row">
                          <figure>
                            <Link to="">
                              <img
                                alt="dungarpur"
                                src="images/dungarpur-card-img.webp"
                              />
                            </Link>
                          </figure>
                          <div className="card-travel-guides-content">
                            <h4>
                              <Link to="">Dungarpur</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card-travel-guides-box card-box-row">
                          <figure>
                            <Link to="">
                              <img
                                alt="jhalawer"
                                src="images/jhalawer-card-img.webp"
                              />
                            </Link>
                          </figure>
                          <div className="card-travel-guides-content">
                            <h4>
                              <Link to="">Jhalawar</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card-travel-guides-box card-box-row">
                          <figure>
                            <Link to="">
                              <img
                                alt="kota"
                                src="images/rajkota-card-img.webp"
                              />
                            </Link>
                          </figure>
                          <div className="card-travel-guides-content">
                            <h4>
                              <Link to="">Kota</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card-travel-guides-box card-box-row">
                          <figure>
                            <Link to="">
                              <img
                                alt="imount-abu"
                                src="images/mount-abu-card-img.webp"
                              />
                            </Link>
                          </figure>
                          <div className="card-travel-guides-content">
                            <h4>
                              <Link to="">Mount Abu</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card-travel-guides-box card-box-row">
                          <figure>
                            <Link to="">
                              <img
                                alt="pushkar-imge"
                                src="images/pushkar-card-img.webp"
                              />
                            </Link>
                          </figure>
                          <div className="card-travel-guides-content">
                            <h4>
                              <Link to="">Pushkar</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card-travel-guides-box card-box-row">
                          <figure>
                            <Link to="">
                              <img
                                alt="Ranakpur"
                                src="images/ranakpur-card-img.webp"
                              />
                            </Link>
                          </figure>
                          <div className="card-travel-guides-content">
                            <h4>
                              <Link to="">Ranakpur</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card-travel-guides-box card-box-row">
                          <figure>
                            <Link to="">
                              <img
                                alt="shekhawati"
                                src="images/shekhawati-card-img.webp"
                              />
                            </Link>
                          </figure>
                          <div className="card-travel-guides-content">
                            <h4>
                              <Link to="">Shekhawati</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="show-more Information-btn-bottom  pt-2 pb-2">
                    <Link
                      className="toggle-active read visit-btn-hover visit-btn-an"
                      href="#rajasthan-description-in"
                    >
                      Load More{" "}
                      <i aria-hidden="true" className="fa fa-angle-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="more-information-section ">
            <div className="scrn-container">
              <div className="more-information-container-custom">
                <div className="more-information-heading">
                  <h2>About Rajasthan Tourism Packages</h2>
                </div>
                <div className="more-information-content-row">
                  <div className="packages-content-p">
                    <p>
                      The north Indian state of Rajasthan is renowned for its
                      heritage and is among the most visited places by travel
                      enthusiasts from around the globe, out of which it is the
                      capital city of Jaipur which attracts Indian and
                      international tourists alike, being part of the Golden
                      Triangle Circuit.{" "}
                    </p>
                  </div>
                  <div className="packages-content-p">
                    <p>
                      The state is home to numerous historical forts and
                      palaces, known for their unique legends that will keep you
                      intrigued. Along with its many architectural wonders,
                      visitors are also captivated by the state's vibrant fairs,
                      festivals, as well as its wildlife that draw people in.
                      With over 30 national parks and wildlife sanctuaries, the
                      state is a haven for wildlife, including the majestic
                      Bengal tigers.{" "}
                    </p>
                  </div>
                </div>
                <div className="more-information-in-w">
                  <h3>Highlights of Rajasthan Tourism Packages</h3>
                  <div className="more-information-listing">
                    <ul>
                      <li>
                        Exploring majestic, historical marvels such as the Amer
                        Fort in Jaipur, Chittor Fort in Chittorgarh, and the
                        Jaisalmer Fort in Jaisalmer.
                      </li>
                      <li>
                        Discovering Rajasthan's vibrant festivals and fairs that
                        are organized throughout the year such as the Kite
                        Festival, Jaisalmer Desert Festival, and the Bikaner
                        Camel Festival.
                      </li>
                      <li>
                        Going on desert adventures in the Thar Desert that
                        include desert camping, dune bashing, parasailing, camel
                        safaris, and witnessing traditional performances by
                        local artists.
                      </li>
                      <li>
                        Going on wildlife adventures across the various national
                        parks and sanctuaries such as Ranthambore National Park
                        and Sariska National Park.{" "}
                      </li>
                      <li>
                        Staying at heritage palace turned luxury hotels built in
                        historical palaces that will make your stay the most
                        memorable one.
                      </li>
                      <li>
                        Attending spiritual retreats at calm and serene places
                        such as the Birla Mandir, Brahma Temple, and Ajmer
                        Sharif.
                      </li>
                      <li>
                        Shopping for souvenirs and handicrafts at markets such
                        as Bada Bazaar, Bapu Bazaar, and Johari Bazaar for the
                        shopaholics
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="more-information-in-w">
                  <h3>Top Places to Visit in Rajasthan Sightseeing Tour</h3>
                  <div className="packages-content-p">
                    <p>
                      From the array of colors in Chanderi sarees to the
                      delightful sweetness of Ghewar, Rajasthan is more than
                      just a state, for it is a cultural heritage that runs deep
                      in the veins of those who have embraced it. While the
                      Rajasthan tourism bucket list is endless, there are
                      certain places that truly capture the essence of this
                      magnificent land.
                    </p>
                  </div>
                  <div className="table-from-section">
                    <table className="table table-hover table-bordered ">
                      <tbody>
                        <tr className="table-form-content">
                          <th>Destination Name</th>
                          <th>Popular Places/Attractions to Explore</th>
                        </tr>
                        <tr className="table-tr-content">
                          <td>Udaipur </td>
                          <td>
                            City Palace , Lake Pichola, Jag Mandir, Fateh Sagar
                            Lake, Jagdish Temple
                          </td>
                        </tr>
                        <tr className="table-tr-content">
                          <td>Jaipur</td>
                          <td>
                            Amer Fort ,City Palace ,Hawa Mahal, Jantar Mantar ,
                            Nahargarh Fort
                          </td>
                        </tr>
                        <tr className="table-tr-content">
                          <td>Bikaner</td>
                          <td>
                            Junagarh Fort ,Karni Mata Temple ,Lalgarh Palace,
                            National Research Centre on Camel
                          </td>
                        </tr>
                        <tr className="table-tr-content">
                          <td>Chittorgarh</td>
                          <td>
                            Chittorgarh Fort ,Vijay Stambh ,Kirti Stambh, Rana
                            Kumbha Palace , Padmini Palace
                          </td>
                        </tr>
                        <tr className="table-tr-content">
                          <td>Jaisalmer</td>
                          <td>
                            Jaisalmer Fort , Sam Sand Dunes ,Patwon Ki Haveli
                            ,Gadisar Lake ,Bada Bagh
                          </td>
                        </tr>
                        <tr className="table-tr-content">
                          <td>Jodhpur</td>
                          <td>
                            Mehrangarh Fort ,Jaswant Thada,Umaid Bhawan Palace ,
                            Mandore Gardens, Clock Tower
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="packages-content-p">
                    <p>
                      Whether you're planning for a week or just a couple of
                      days, you wouldn't want to miss the exciting array of
                      activities that Rajasthan has to offer. From breathtaking
                      experiences to adorable encounters, here are some
                      must-include activities for your trip to Rajasthan.
                    </p>
                  </div>
                  <div className="more-information-listing">
                    <ul>
                      <li>
                        Trekking at Mount Abu and Udaipur have good trekking
                        trails.
                      </li>
                      <li>Elephant Rides that can be done near Amer Fort.</li>
                      <li>
                        Boating in a lake at Udaipur that can be visited for
                        boating.
                      </li>
                      <li>
                        Hot Air Balloon Ride as you see Rajasthan from the air.{" "}
                      </li>
                      <li>
                        Camel Safari in the Thar Desert with a splendid desert
                        experience.
                      </li>
                      <li>
                        Desert Camping under the clear night sky with local
                        music and fun activities.
                      </li>
                      <li>
                        Wildlife Jungle Safari at the national parks of
                        Ranthambore, Sariska, and Jhalana.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="more-information-in-w">
                  <h3>The Perfect Souvenirs to Buy from Rajasthan</h3>
                  <div className="packages-content-p">
                    <p>
                      Rajasthan has countless souvenirs for you to take home as
                      a memory of your trip to Rajasthan. Here is what you can
                      take back with you:
                    </p>
                  </div>
                  <div className="more-information-listing ">
                    <ul>
                      <li>Jewels from Johri Bazaar at Jaipur.</li>
                      <li>Handicrafts from Nehru Market at Jaipur.</li>
                      <li>
                        Leather products from Mahatma Gandhi Road at Jaipur.
                      </li>
                      <li>
                        Clothes and accessories from Nehru Bazaar at Jaipur.
                      </li>
                      <li>
                        Wooden and stone carved articles from Kishanpole and
                        Chandpole Bazaars at Jaipur.
                      </li>
                      <li>
                        Puppets and traditional toys from Jaipur, Udaipur,
                        Bikaner, and Ajmer.
                      </li>
                    </ul>
                  </div>
                  <div className="packages-content-p">
                    <p>
                      Book Rajasthan Tour Packages with Tour My India and avail
                      the best deal on your tour. Choose from our tour packages
                      that are budget-friendly and cater to both long and short
                      trips and will help you cover every aspect of Rajasthan,
                      including forts, lakes, wildlife, and the desert. With us,
                      you won't miss out on anything and will be sure to
                      experience only the best on this royal journey to
                      Rajasthan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="quick-links-setion common-padding">
            <div className="scrn-container">
              <div className="top-quick-links-content">
                <div className=" row">
                  <div className="col-sm-12 col-md-8 col-lg-8 pl-0">
                    <div className="package-tour-heading-in">
                      <h4>Quick Links</h4>
                    </div>
                    <div className="package-tour-heading-p">
                      <p>These Popular Destinations Have A Lot To Offer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="quick-content-listing">
                  <div className="row">
                    <div className="col-md-3 col-sm-6 col-6 quick-content-col">
                      <h3 className="rajasthan-footer-sec-in-w">
                        <Link to="">About Rajasthan</Link>
                      </h3>
                      <ul className="quicks-package-listing-content">
                        <li>
                          <Link to="">Rajasthan Tourism</Link>
                        </li>
                        <li>
                          <Link to="">People Culture of Rajasthan</Link>
                        </li>
                        <li>
                          <Link to="">Rajasthan Festivals</Link>
                        </li>
                        <li>
                          <Link to="">Rajasthan Folk Dance Music</Link>
                        </li>
                        <li>
                          <Link to="">Rajasthan Food</Link>
                        </li>
                        <li>
                          <Link to="">Things to Buy from Rajasthan</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6 quick-content-col">
                      <h3 className="rajasthan-footer-sec-in-w">
                        <Link to="">Rajasthan Destinations</Link>
                      </h3>
                      <ul className="quicks-package-listing-content">
                        <li>
                          <Link to="">Jaipur Tourism</Link>
                        </li>
                        <li>
                          <Link to="">Udaipur Tourism</Link>
                        </li>
                        <li>
                          <Link to="">Jodhpur Tourism</Link>
                        </li>
                        <li>
                          <Link to="">Bikaner Tourism</Link>
                        </li>
                        <li>
                          <Link to="">Pushkar Tourism</Link>
                        </li>
                        <li>
                          <Link to="">Jaisalmer Tourism</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6 quick-content-col">
                      <h3 className="rajasthan-footer-sec-in-w">
                        <Link to="">Rajasthan Tourism Packages</Link>
                      </h3>
                      <ul className="quicks-package-listing-content">
                        <li>
                          <Link to="">Jaipur Tour Packages</Link>
                        </li>
                        <li>
                          <Link to="">Udaipur Tour Packages</Link>
                        </li>
                        <li>
                          <Link to="">Jaisalmer Tour Packages</Link>
                        </li>
                        <li>
                          <Link to="">Jodhpur Tour Packages</Link>
                        </li>
                        <li>
                          <Link to="">Bikaner Tour Packages</Link>
                        </li>
                        <li>
                          <Link to="">Pushkar Tour Packages</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6 quick-content-col">
                      <h3 className="rajasthan-footer-sec-in-w">
                        <Link to="">Rajasthan Holidays by Interest</Link>
                      </h3>
                      <ul className="quicks-package-listing-content">
                        <li>
                          <Link to="">Rajasthan Honeymoon Packages</Link>
                        </li>
                        <li>
                          <Link to="">Rajasthan Family Packages</Link>
                        </li>
                        <li>
                          <Link to="">Rajasthan Golden Triangle Packages</Link>
                        </li>
                        <li>
                          <Link to="">Rajasthan Religious Packages</Link>
                        </li>
                        <li>
                          <Link to="">Rajasthan Heritage Packages</Link>
                        </li>
                        <li>
                          <Link to="">Rajasthan Wildlife Packages</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row pt-3">
                    <div className="col-md-3 col-sm-6 col-6 quick-content-col">
                      <h3 className="rajasthan-footer-sec-in-w">
                        <Link to="">Top Things to Do in Rajasthan</Link>
                      </h3>
                      <ul className="quicks-package-listing-content">
                        <li>
                          <Link to="">Wildlife Safari</Link>
                        </li>
                        <li>
                          <Link to="">Desert Camping</Link>
                        </li>
                        <li>
                          <Link to={""}>Camel Safari</Link>
                        </li>
                        <li>
                          <Link to={""}>Cultural Performances</Link>
                        </li>
                        <li>
                          <Link>Bird Watching</Link>
                        </li>
                        <li>
                          <Link to="">Yoga & Ayurveda</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6 quick-content-col">
                      <h3 className="rajasthan-footer-sec-in-w">
                        <Link to="">Rajasthan Attractions</Link>
                      </h3>
                      <ul className="quicks-package-listing-content">
                        <li>
                          <Link to="">Jaipur Attractions</Link>
                        </li>
                        <li>
                          <Link to="">Udaipur Attractions</Link>
                        </li>
                        <li>
                          <Link to="">Jaisalmer Attractions</Link>
                        </li>
                        <li>
                          <Link to="">Bikaner Attractions</Link>
                        </li>
                        <li>
                          <Link to="">Pushkar Attractions</Link>
                        </li>
                        <li>
                          <Link to="">Jodhpur Attractions</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6 quick-content-col">
                      <h3 className="rajasthan-footer-sec-in-w">
                        <Link to="">Hotels in Rajasthan</Link>
                      </h3>
                      <ul className="quicks-package-listing-content">
                        <li>
                          <Link to="">Hotels in Jaipur</Link>
                        </li>
                        <li>
                          <Link to="">Hotels in Udaipur</Link>
                        </li>
                        <li>
                          <Link to="">Hotel in Bikaner</Link>
                        </li>
                        <li>
                          <Link to="">Hotels in Jaisalmer</Link>
                        </li>
                        <li>
                          <Link to="">Hotels in Pushkar</Link>
                        </li>
                        <li>
                          <Link to="">Hotels in Jodhpur</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6 quick-content-col">
                      <h3 className="rajasthan-footer-sec-in-w">
                        <Link to="">Other Imp Links</Link>
                      </h3>
                      <ul className="quicks-package-listing-content">
                        <li>
                          <Link to="">Best Time to Visit Rajasthan</Link>
                        </li>
                        <li>
                          <Link to="">How to Reach Rajasthan</Link>
                        </li>
                        <li>
                          <Link to="">Rajasthan Tourism Map</Link>
                        </li>
                        <li>
                          <Link to="">Rajasthan Summer Weather</Link>
                        </li>
                        <li>
                          <Link to="">Rajasthan Monsoon Weather</Link>
                        </li>
                        <li>
                          <Link to="">Rajasthan Winter Weather</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="bg-4">
            <Footer />
          </div>
        </body>
      </html>
    </div>
  );
};

export default Rajasthan;

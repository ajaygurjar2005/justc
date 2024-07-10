import React from "react";
import { Link } from "react-router-dom";

const BySeason = () => {
  return (
    <div>
      <>
        <section className="season-tour">
          <div className="container1">
            <div className="main-heading">
              <h2>India Tours By Season</h2>
            </div>
            <div className="trend-listing">
              <ul className="nav" id="pills-tab11" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab11"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home11"
                    type="button"
                    role="tab"
                    aria-controls="pills-home11"
                    aria-selected="true"
                  >
                    Winter
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab11"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile11"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile11"
                    aria-selected="false"
                  >
                    Summer
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact-tab11"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact11"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact11"
                    aria-selected="false"
                  >
                    Mansoon
                  </button>
                </li>
              </ul>
            </div>
            <div className="tab-content" id="pills-tabContent11">
              <div
                className="tab-pane fade show active"
                id="pills-home11"
                role="tabpanel"
                aria-labelledby="pills-home-tab11"
              >
                <div className="seasonal-tour">
                  <div className="season-tour-listing">
                  </div>
                  <div className="tab-content" id="pills-tabContent12">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home12"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab12"
                    >
                      <div className="row season-row">
                        <div className="col-lg-4 col-md-12 season-left1">
                          <div className="season-left">
                            <h3>Manali</h3>
                            <p style={{ fontSize: "14px", textDecoration: "none" }}>
                              Manali in winter is truly a paradise on earth.
                              This enchanting hill station in Himachal Pradesh
                              is one of the best places for a winter vacation in
                              India, transforming into a snowy wonderland that
                              offers breathtaking views and thrilling activities
                              like skiing and snowboarding. Embrace the magical
                              allure of winter in Manali. Experience the warmth
                              of local culture, enjoy hot Himachali delicacies,
                              and find serenity amidst snow-covered peaks.
                            </p>
                            <Link to={''}>
                              See All Tours
                              <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                          <div className="season-right">
                            <div className="season-content">
                              <figure>
                                <Link
                                to={''}
                                >
                                  <img
                                    src="https://www.tourmyindia.com/tmimg/manali-winter.webp"
                                    alt="manali image"
                                  />
                                </Link>
                              </figure>
                              <div className="interest-sec">
                                <span>3 Nights - 4 Days</span>
                                <h4>
                                  <Link
                                  to={''}
                                  >
                                    Manali Tour Package
                                  </Link>
                                </h4>
                              </div>
                            </div>
                            <div className="season-content">
                              <figure>
                                <Link
                                  to={''}
                                >
                                  <img
                                    src="https://www.tourmyindia.com/tmimg/manali-shimla.webp"
                                    alt="manali image"
                                  />
                                </Link>
                              </figure>
                              <div className="interest-sec">
                                <span>5 Nights - 6 Days</span>
                                <h4>
                                  <Link
                                  to={''}
                                  >
                                    Shimla Manali Tour
                                  </Link>
                                </h4>
                              </div>
                            </div>
                            <div className="season-content">
                              <figure>
                                <Link
                                to={''}
                                >
                                  <img
                                    src="https://www.tourmyindia.com/tmimg/manali-kullu.webp"
                                    alt="manali image"
                                  />
                                </Link>
                              </figure>
                              <div className="interest-sec">
                                <span>4 Nights - 5 Days</span>
                                <h4>
                                  <Link
                                  to={''}
                                  >
                                    Kullu Manali Tour
                                  </Link>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile12"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab12"
                    >
                      <div className="row season-row">
                        <div className="col-lg-4 col-md-12 season-left1">
                          <div className="season-left">
                            <h3>Kashmir</h3>
                            <p>
                              Experience the mesmerizing beauty of Kashmir
                              during winter. Known as the 'Paradise on Earth,'
                              Kashmir is one of the best destinations to visit
                              in winter in India. Enjoy a magical gondola ride
                              in Gulmarg, explore the frozen Dal Lake, and
                              indulge in local Kashmiri cuisine for a memorable
                              trip. In winter, the entire Kashmir valley is
                              blanketed in pristine snow, creating a captivating
                              landscape that beckons travelers from around the
                              globe to witness and experience the enchantment of
                              live snowfall.
                            </p>
                            <Link to={''}>
                              See All Tours
                              <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                          <div className="season-right">
                            <div className="season-content">
                              <figure>
                                <Link
                                to={''}
                                >
                                  <img
                                    src="tmimg/kashmir-winter.webp"
                                    alt="kashmir image"
                                  />
                                </Link>
                              </figure>
                              <div className="interest-sec">
                                <span>6 Nights - 7 Days</span>
                                <h4>
                                  <Link
                                  to={''}
                                  >
                                    Splendor of Kashmir
                                  </Link>
                                </h4>
                              </div>
                            </div>
                            <div className="season-content">
                              <figure>
                                <Link
                                to={''}
                                >
                                  <img
                                    src="tmimg/kashmir-ramantic.webp"
                                    alt="kashmir image"
                                  />
                                </Link>
                              </figure>
                              <div className="interest-sec">
                                <span>5 Nights - 6 Days</span>
                                <h4>
                                  <Link
                                  to={''}
                                  >
                                    Romantic Getaway To Kashmir
                                  </Link>
                                </h4>
                              </div>
                            </div>
                            <div className="season-content">
                              <figure>
                                <Link
                                to={''}
                                >
                                  <img
                                    src="tmimg/kashmir-houseboat.webp"
                                    alt="kashmir image"
                                  />
                                </Link>
                              </figure>
                              <div className="interest-sec">
                                <span>4 Nights - 5 Days</span>
                                <h4>
                                  <Link
                                  to={''}
                                  >
                                    Kashmir Houseboat Tour
                                    <br /> With Sonmarg And Pahalgam
                                  </Link>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-contact12"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab12"
                    >
                      <div className="row season-row">
                        <div className="col-lg-4 col-md-12 season-left1">
                          <div className="season-left">
                            <h3>Nainital</h3>
                            <p>
                              Nainital, known for its mesmerizing beauty and
                              serene landscapes, stands out as one of the best
                              places to visit for a winter holiday vacation in
                              India. With its snow-laden peaks, tranquil Naini
                              Lake, charming local markets, and warm culture,
                              Nainital offers an unforgettable winter retreat.
                            </p>
                            <a href="https://www.tourmyindia.com/states/uttarakhand/nainital-tour-packages.html">
                              See All Tours
                              <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                          <div className="season-right">
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/packages-tour-india/hill-stations/delhi-nainital-tour.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/nainital-winter.webp"
                                    alt="nainital image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>3 Nights - 4 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/packages-tour-india/hill-stations/delhi-nainital-tour.html"
                                    target="_blank"
                                  >
                                    Delhi Nainital Tour
                                  </a>
                                </h4>
                              </div>
                            </div>
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/packages-tour-india/hill-stations/nainital-with-mukteshwar.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/nainital-mukt.webp"
                                    alt="nainital image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>3 Nights - 4 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/packages-tour-india/hill-stations/nainital-with-mukteshwar.html"
                                    target="_blank"
                                  >
                                    Nainital with Mukteshwar
                                  </a>
                                </h4>
                              </div>
                            </div>
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/packages-tour-india/hill-stations/nainital-with-ranikhet.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/ranikhet.webp"
                                    alt="ranikhet image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>4 Nights - 5 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/packages-tour-india/hill-stations/nainital-with-ranikhet.html"
                                    target="_blank"
                                  >
                                    Nainital with Ranikhet Tour
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-drum12"
                      role="tabpanel"
                      aria-labelledby="pills-drum-tab12"
                    >
                      <div className="row season-row">
                        <div className="col-lg-4 col-md-12 season-left1">
                          <div className="season-left">
                            <h3>Shimla</h3>
                            <p>
                              Shimla, known for its enchanting snowfall, is one
                              of the most visited destinations in Himachal,
                              making it an ideal spot for a winter holiday
                              vacation. From serene walks on the Mall Road to
                              fun-filled skiing adventures, Shimla transforms
                              into a winter wonderland that promises
                              unforgettable experiences.
                            </p>
                            <a href="https://www.tourmyindia.com/packages-tour-india/hill-stations/himachal-hill-stations-tours.html">
                              See All Tours
                              <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                          <div className="season-right">
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/packages-tour-india/hill-stations/shimla-hill-station-tour.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/shimla-hilly.webp"
                                    alt="shimla image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>2 Nights - 3 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/packages-tour-india/hill-stations/shimla-hill-station-tour.html"
                                    target="_blank"
                                  >
                                    Shimla Hill Station Tour
                                  </a>
                                </h4>
                              </div>
                            </div>
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/packages-tour-india/hill-stations/himachal-hill-station-tour.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/shimla-hidimba.webp"
                                    alt="shimla image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>7 Nights - 8 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/packages-tour-india/hill-stations/himachal-hill-station-tour.html"
                                    target="_blank"
                                  >
                                    Himachal Hill Station Tour
                                  </a>
                                </h4>
                              </div>
                            </div>
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/packages-tour-india/hill-stations/shimla-manali-amritsar-tour.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/manali-shimla.webp"
                                    alt="shimla image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>6 Nights - 7 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/packages-tour-india/hill-stations/shimla-manali-amritsar-tour.html"
                                    target="_blank"
                                  >
                                    Shimla Manali Amritsar Tour
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile11"
                role="tabpanel"
                aria-labelledby="pills-profile-tab11"
              >
                <div className="seasonal-tour">
                  <div className="season-tour-listing">
                    <ul className="nav" id="pills-tab20" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-home-tab20"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home20"
                          type="button"
                          role="tab"
                          aria-controls="pills-home20"
                          aria-selected="true"
                        >
                          Darjeeling
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-profile-tab20"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile20"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile20"
                          aria-selected="false"
                        >
                          Sikkim
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-contact-tab20"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-contact20"
                          type="button"
                          role="tab"
                          aria-controls="pills-contact20"
                          aria-selected="false"
                        >
                          Gulmarg
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-drum-tab20"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-drum20"
                          type="button"
                          role="tab"
                          aria-controls="pills-drum20"
                          aria-selected="false"
                        >
                          Mussoorie
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" id="pills-tabContent20">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home20"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab20"
                    >
                      <div className="row season-row">
                        <div className="col-lg-4 col-md-12 season-left1">
                          <div className="season-left">
                            <h3>Darjeeling</h3>
                            <p>
                              Darjeeling, a quintessential hill station, is an
                              ideal destination for a family tour during the
                              summer holidays. Surrounded by emerald-green tea
                              gardens and offering breathtaking views of the
                              Himalayas, Darjeeling is a nature lover's
                              paradise, offering a cool respite from the summer
                              heat and bustling city life.
                            </p>
                            <a href="https://www.tourmyindia.com/packages-tour-india/hill-stations/darjeeling-tour-packages.html">
                              See All Tours
                              <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                          <div className="season-right">
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/states/sikkim/darjeeling-gantok-tour.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/darjeeling-gangtok.webp"
                                    alt="gangtok image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>4 Nights - 5 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/states/sikkim/darjeeling-gantok-tour.html"
                                    target="_blank"
                                  >
                                    Darjeeling Gangtok Tour
                                  </a>
                                </h4>
                              </div>
                            </div>
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/states/sikkim/darjeeling-pelling-tour.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/darjeeling-summer.webp"
                                    alt="darjeeling image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>4 Nights - 5 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/states/sikkim/darjeeling-pelling-tour.html"
                                    target="_blank"
                                  >
                                    Darjeeling Pelling Tour
                                  </a>
                                </h4>
                              </div>
                            </div>
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/states/sikkim/gangtok-pelling-darjeeling-family-tour.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/darjeeling-pelling.webp"
                                    alt="darjeeling image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>6 Nights - 7 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/states/sikkim/gangtok-pelling-darjeeling-family-tour.html"
                                    target="_blank"
                                  >
                                    Gangtok Pelling Darjeeling Family Tour
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile20"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab20"
                    >
                      <div className="row season-row">
                        <div className="col-lg-4 col-md-12 season-left1">
                          <div className="season-left">
                            <h3>Sikkim</h3>
                            <p>
                              As a gem of North East India, Sikkim stands out as
                              a must-visit getaway for a summer family tour.
                              This nature lover's paradise, teeming with
                              tranquil lakes and vibrant flora, offers a
                              refreshing escape from the summer heat. Planning a
                              trip to Sikkim in the summer guarantees an
                              unforgettable holiday amidst serene landscapes.
                            </p>
                            <a href="https://www.tourmyindia.com/states/sikkim/sikkim-tour-packages.html">
                              See All Tours
                              <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                          <div className="season-right">
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/states/sikkim/best-of-sikkim-tour.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/sikkim-summer.webp"
                                    alt="sikkim image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>8 Nights - 9 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/states/sikkim/best-of-sikkim-tour.html"
                                    target="_blank"
                                  >
                                    Best of Sikkim Tour
                                  </a>
                                </h4>
                              </div>
                            </div>
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/states/sikkim/gangtok-north-sikkim-tour.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/sikkim-gang.webp"
                                    alt="sikkim image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>5 Nights - 6 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/states/sikkim/gangtok-north-sikkim-tour.html"
                                    target="_blank"
                                  >
                                    Gangtok North Sikkim Tour
                                  </a>
                                </h4>
                              </div>
                            </div>
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/states/sikkim/gangtok-lachung-tour.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/darjeeling-gangtok.webp"
                                    alt="sikkim image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>5 Nights - 6 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/states/sikkim/gangtok-lachung-tour.html"
                                    target="_blank"
                                  >
                                    Gangtok Lachung Tour
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-contact20"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab20"
                    >
                      <div className="row season-row">
                        <div className="col-lg-4 col-md-12 season-left1">
                          <div className="season-left">
                            <h3>Gulmarg</h3>
                            <p>
                              Gulmarg, a top summer getaway in Jammu and
                              Kashmir, is an exceptional hill station to plan a
                              trip, be it for a family vacation or a romantic
                              honeymoon tour. Immersed in nature's splendor,
                              Gulmarg offers lush green meadows and scenic
                              trails, making it an enchanting escape during the
                              summer.
                            </p>
                            <a href="https://www.tourmyindia.com/states/jammu-kashmir/gulmarg-tour-packages.html">
                              See All Tours
                              <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                          <div className="season-right">
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/states/jammu-kashmir/best-of-kashmir.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/kashmir-summer.webp"
                                    alt="kashmir image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>5 Nights - 6 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/states/jammu-kashmir/best-of-kashmir.html"
                                    target="_blank"
                                  >
                                    Best of Kashmir
                                  </a>
                                </h4>
                              </div>
                            </div>
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/states/jammu-kashmir/kashmir-honeymoon-tour.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/kashmir-ramantic.webp"
                                    alt="kashmir image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>6 Nights - 7 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/states/jammu-kashmir/kashmir-honeymoon-tour.html"
                                    target="_blank"
                                  >
                                    Kashmir Honeymoon Tour
                                  </a>
                                </h4>
                              </div>
                            </div>
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/states/jammu-kashmir/magical-kashmir.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/kashmir-houseboat.webp"
                                    alt="kashmir image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>6 Nights - 7 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/states/jammu-kashmir/magical-kashmir.html"
                                    target="_blank"
                                  >
                                    Magical Kashmir
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-drum20"
                      role="tabpanel"
                      aria-labelledby="pills-drum-tab20"
                    >
                      <div className="row season-row">
                        <div className="col-lg-4 col-md-12 season-left1">
                          <div className="season-left">
                            <h3>Mussoorie</h3>
                            <p>
                              Mussoorie, nestled in the foothills of the
                              Himalayas in Uttarakhand, is an idyllic
                              destination to plan a summer holiday. Known as the
                              'Queen of Hills,' this charming hill station
                              offers breathtaking views of the mountain ranges,
                              tranquil trails through lush landscapes, and a
                              refreshing escape from the summer heat.
                            </p>
                            <a href="https://www.tourmyindia.com/states/uttarakhand/mussoorie-tour-packages.html">
                              See All Tours
                              <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                          <div className="season-right">
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/packages-tour-india/hill-stations/mussoorie-rishikesh-tour.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/mussoorie-camp.webp"
                                    alt="mussoorie image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>3 Nights - 4 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/packages-tour-india/hill-stations/mussoorie-rishikesh-tour.html"
                                    target="_blank"
                                  >
                                    Mussoorie Rishikesh Tour
                                  </a>
                                </h4>
                              </div>
                            </div>
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/packages-tour-india/hill-stations/corbett-with-mussoorie-tour.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/mussoorie-summer.webp"
                                    alt="mussoorie image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>4 Nights - 5 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/packages-tour-india/hill-stations/corbett-with-mussoorie-tour.html"
                                    target="_blank"
                                  >
                                    Corbett National Park - Mussoorie Tour
                                  </a>
                                </h4>
                              </div>
                            </div>
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/packages-tour-india/hill-stations/corbett-with-nainital-and-mussoorie.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/mussoorie-naini.webp"
                                    alt="mussoorie image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>6 Nights - 7 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/packages-tour-india/hill-stations/corbett-with-nainital-and-mussoorie.html"
                                    target="_blank"
                                  >
                                    Corbett with Nainital and Mussoorie Tour
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact11"
                role="tabpanel"
                aria-labelledby="pills-contact-tab11"
              >
                <div className="seasonal-tour">
                  <div className="season-tour-listing">
                    <ul className="nav" id="pills-tab21" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-home-tab21"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home21"
                          type="button"
                          role="tab"
                          aria-controls="pills-home21"
                          aria-selected="true"
                        >
                          Goa
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-profile-tab21"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile21"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile21"
                          aria-selected="false"
                        >
                          Munnar
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-contact-tab21"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-contact21"
                          type="button"
                          role="tab"
                          aria-controls="pills-contact21"
                          aria-selected="false"
                        >
                          Udaipur
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-drum-tab21"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-drum21"
                          type="button"
                          role="tab"
                          aria-controls="pills-drum21"
                          aria-selected="false"
                        >
                          Valley Of Flowers
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" id="pills-tabContent21">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home21"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab21"
                    >
                      <div className="row season-row">
                        <div className="col-lg-4 col-md-12 season-left1">
                          <div className="season-left">
                            <h3>Goa</h3>
                            <p>
                              As one of the best monsoon getaways, Goa offers an
                              enthralling holiday experience. Its rain-kissed
                              beaches, lush wildlife sanctuaries, and vibrant
                              local culture make it perfect for planning a
                              monsoon trip. Witness the magic of Goa in the
                              rains, where nature comes alive in all its
                              tropical glory.
                            </p>
                            <a href="https://www.tourmyindia.com/states/goa/goa-tour-packages.html">
                              See All Tours
                              <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                          <div className="season-right">
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/packages-tour-india/beach-travel-packages/golden-triangle-with-goa.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/goa-golden.webp"
                                    alt="goa image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>11 Nights - 12 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/packages-tour-india/beach-travel-packages/golden-triangle-with-goa.html"
                                    target="_blank"
                                  >
                                    Golden Triangle Tour with Goa
                                  </a>
                                </h4>
                              </div>
                            </div>
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/packages-tour-india/beach-travel-packages/golden-beaches-of-goa.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/goa-beache.webp"
                                    alt="goa image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>5 Nights - 6 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/packages-tour-india/beach-travel-packages/golden-beaches-of-goa.html"
                                    target="_blank"
                                  >
                                    Golden Beaches Of Goa
                                  </a>
                                </h4>
                              </div>
                            </div>
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/packages-tour-india/honeymoon-tour-packages/goa-honeymoon-tour.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/goa-honey.webp"
                                    alt="goa image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>5 Nights - 6 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/packages-tour-india/honeymoon-tour-packages/goa-honeymoon-tour.html"
                                    target="_blank"
                                  >
                                    Goa Honeymoon Tour
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile21"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab21"
                    >
                      <div className="row season-row">
                        <div className="col-lg-4 col-md-12 season-left1">
                          <div className="season-left">
                            <h3>Munnar</h3>
                            <p>
                              Munnar, the best getaway in Kerala, transforms
                              into a green paradise during the monsoon. Nestled
                              amidst the mountains, this wildlife-rich
                              destination offers a lush landscape that is
                              perfect for nature photography. A monsoon holiday
                              in Munnar guarantees a memorable South Indian
                              experience, with nature in full bloom.
                            </p>
                            <a href="https://www.tourmyindia.com/states/kerala/munnar-tour-packages.html">
                              See All Tours
                              <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                          <div className="season-right">
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/packages-tour-india/hill-stations/munnar-hill-station-tour.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/munnar-hillss.webp"
                                    alt="munnar image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>3 Nights - 4 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/packages-tour-india/hill-stations/munnar-hill-station-tour.html"
                                    target="_blank"
                                  >
                                    Munnar Hills Tour Package
                                  </a>
                                </h4>
                              </div>
                            </div>
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/packages-tour-india/kerala-travel-packages/munnar-honeymoon-tour.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/munnar-honeymoon.webp"
                                    alt="munnar image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>3 Nights - 4 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/packages-tour-india/kerala-travel-packages/munnar-honeymoon-tour.html"
                                    target="_blank"
                                  >
                                    Munnar Honeymoon Tour
                                  </a>
                                </h4>
                              </div>
                            </div>
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/packages-tour-india/hill-stations/ooty-munnar-kodaikanal-tour.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/munnar-ooty.webp"
                                    alt="munnar image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>6 Nights - 7 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/packages-tour-india/hill-stations/ooty-munnar-kodaikanal-tour.html"
                                    target="_blank"
                                  >
                                    Ooty Munnar Kodaikanal Tour
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-contact21"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab21"
                    >
                      <div className="row season-row">
                        <div className="col-lg-4 col-md-12 season-left1">
                          <div className="season-left">
                            <h3>Udaipur</h3>
                            <p>
                              If you're looking for a monsoon getaway in India,
                              Udaipur is a must-explore place in Rajasthan.
                              Known as the 'City of Lakes,' Udaipur offers
                              stunning views of glistening waters and lush
                              landscapes during the monsoon. Its palaces and
                              havelis add a historical charm, making your
                              holiday truly memorable.
                            </p>
                            <a href="https://www.tourmyindia.com/states/rajasthan/udaipur-tour-packages.html">
                              See All Tours
                              <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                          <div className="season-right">
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/states/rajasthan/udaipur-sightseeing-tour.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/udaipur-romantic.webp"
                                    alt="udaipur image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>2 Nights - 3 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/states/rajasthan/udaipur-sightseeing-tour.html"
                                    target="_blank"
                                  >
                                    Udaipur Sightseeing Tour
                                  </a>
                                </h4>
                              </div>
                            </div>
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/states/rajasthan/udaipur-honeymoon-package-tour.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/udaipur-fatehsagar.webp"
                                    alt="udaipur image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>6 Nights - 7 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/states/rajasthan/udaipur-honeymoon-package-tour.html"
                                    target="_blank"
                                  >
                                    Udaipur Honeymoon Package
                                  </a>
                                </h4>
                              </div>
                            </div>
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/states/rajasthan/udaipur-tour-with-kumbhalgarh-chittorgarh.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/udaipur-city-palace.webp"
                                    alt="udaipur image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>6 Nights - 7 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/states/rajasthan/udaipur-tour-with-kumbhalgarh-chittorgarh.html"
                                    target="_blank"
                                  >
                                    Udaipur Kumbhalgarh Chittorgarh Tour
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-drum21"
                      role="tabpanel"
                      aria-labelledby="pills-drum-tab21"
                    >
                      <div className="row season-row">
                        <div className="col-lg-4 col-md-12 season-left1">
                          <div className="season-left">
                            <h3>Valley Of Flowers</h3>
                            <p>
                              Located in the Himalayas, the Valley of Flowers is
                              one of the best monsoon destinations to visit from
                              June to mid-September. This UNESCO World Heritage
                              Site showcases rich flora and fauna, offering
                              breathtaking views that are perfect for nature
                              photography. The valley's vibrant blossoms during
                              the monsoon truly captivate the senses.
                            </p>
                            <a href="https://www.tourmyindia.com/packages-tour-india/hill-stations/uttarakhand-hill-stations-tours.html">
                              See All Tours
                              <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                          <div className="season-right">
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/treks/valley-of-flowers-trek.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/valley-flower.webp"
                                    alt="uttarakhand image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>6 Nights - 7 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/treks/valley-of-flowers-trek.html"
                                    target="_blank"
                                  >
                                    Valley of Flowers Trek
                                  </a>
                                </h4>
                              </div>
                            </div>
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/packages-tour-india/pilgrimage-tour-packages/chardham-with-valley-of-flowers.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/uk-valley.webp"
                                    alt="uttarakhand image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>13 Nights - 14 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/packages-tour-india/pilgrimage-tour-packages/chardham-with-valley-of-flowers.html"
                                    target="_blank"
                                  >
                                    Chardham Yatra With Valley Of Flowers
                                  </a>
                                </h4>
                              </div>
                            </div>
                            <div className="season-content">
                              <figure>
                                <a
                                  href="https://www.tourmyindia.com/packages-tour-india/uttarakhand/best-of-garhwal.html"
                                  target="_blank"
                                >
                                  <img
                                    src="tmimg/uk-garhwal.webp"
                                    alt="uttarakhand image"
                                  />
                                </a>
                              </figure>
                              <div className="interest-sec">
                                <span>7 Nights - 8 Days</span>
                                <h4>
                                  <a
                                    href="https://www.tourmyindia.com/packages-tour-india/uttarakhand/best-of-garhwal.html"
                                    target="_blank"
                                  >
                                    Best of Garhwal Tour
                                  </a>
                                </h4>
                              </div>
                            </div>
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
        {/* tour by month */}
        <section className="month-tour">
          <div className="container1">
            <div className="main-heading">
              <h2>India Tours By Month</h2>
              <p>
                <a href="#">
                  See All Tours{" "}
                  <i className="fa fa-angle-right" aria-hidden="true" />
                </a>
              </p>
            </div>
            <div className="seasonal-tour">
              <div className="season-tour-listing">
                <ul className="nav tabs-scroll" id="pills-tab13" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab13"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home13"
                      type="button"
                      role="tab"
                      aria-controls="pills-home13"
                      aria-selected="true"
                    >
                      January
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab13"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile13"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile13"
                      aria-selected="false"
                    >
                      February
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab13"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact13"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact13"
                      aria-selected="false"
                    >
                      March
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-drum-tab13"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-drum13"
                      type="button"
                      role="tab"
                      aria-controls="pills-drum13"
                      aria-selected="false"
                    >
                      April
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-beat-tab13"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-beat13"
                      type="button"
                      role="tab"
                      aria-controls="pills-beat13"
                      aria-selected="false"
                    >
                      May
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-june-tab13"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-june13"
                      type="button"
                      role="tab"
                      aria-controls="pills-june13"
                      aria-selected="false"
                    >
                      June
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-july-tab13"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-july13"
                      type="button"
                      role="tab"
                      aria-controls="pills-july13"
                      aria-selected="false"
                    >
                      July
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-aug-tab13"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-aug13"
                      type="button"
                      role="tab"
                      aria-controls="pills-aug13"
                      aria-selected="false"
                    >
                      August
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-sept-tab13"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-sept13"
                      type="button"
                      role="tab"
                      aria-controls="pills-sept13"
                      aria-selected="false"
                    >
                      September
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-oct-tab13"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-oct13"
                      type="button"
                      role="tab"
                      aria-controls="pills-oct13"
                      aria-selected="false"
                    >
                      October
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-nov-tab13"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-nov13"
                      type="button"
                      role="tab"
                      aria-controls="pills-nov13"
                      aria-selected="false"
                    >
                      November
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-dec-tab13"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-dec13"
                      type="button"
                      role="tab"
                      aria-controls="pills-dec13"
                      aria-selected="false"
                    >
                      December
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="pills-tabContent13">
                <div
                  className="tab-pane fade show active"
                  id="pills-home13"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab13"
                >
                  <div className="row season-row">
                    <div className="col-lg-4 col-md-12 season-left1">
                      <div className="season-left">
                        <h3>January</h3>
                        <p>
                          Planning a vacation in January? Consider the pristine
                          landscapes of Manali and Nainital in Himachal Pradesh
                          or the ski slopes of Auli in Uttarakhand. These are
                          some of the best places to visit in India during
                          January, offering enchanting snowfall, mesmerizing
                          mountain views, and thrilling winter sports.
                        </p>
                        <Link to={''}>
                          View More
                          <i className="fa fa-angle-right" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                      <div className="season-right">
                        <div className="season-content">
                          <figure>
                            <Link
                             to={''}
                            >
                              <img
                                src="https://www.tourmyindia.com/tmimg/manali-jan.webp"
                                alt="manali image"
                              />
                            </Link>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <Link
                              >
                                Manali
                              </Link>
                            </h4>
                          </div>
                        </div>
                        <div className="season-content">
                          <figure>
                            <Link
                            to={''}
                            >
                              <img
                                src="https://www.tourmyindia.com/tmimg/nainital-jan.webp"
                                alt="nainital image"
                              />
                            </Link>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <Link
                              to={''}
                              >
                                Nainital
                              </Link>
                            </h4>
                          </div>
                        </div>
                        <div className="season-content">
                          <figure>
                            <Link
                            to={''}
                            >
                              <img src="https://www.tourmyindia.com/tmimg/auli-jan.webp" alt="auli image" />
                            </Link>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <Link
                              >
                                Auli
                              </Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile13"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab13"
                >
                  <div className="row season-row">
                    <div className="col-lg-4 col-md-12 season-left1">
                      <div className="season-left">
                        <h3>february</h3>
                        <p>
                          Looking for an ideal February vacation? Explore the
                          royal heritage of Jaipur and Udaipur, or experience
                          thrilling wildlife encounters in Ranthambore,
                          Rajasthan. Alternatively, you could immerse in the
                          tranquil beauty of Uttarakhand and Himachal. These
                          destinations offer unique experiences, making them the
                          best places to visit in India in February.
                        </p>
                        <a href="https://www.tourmyindia.com/blog/top-best-places-to-visit-in-february-in-india/">
                          View More
                          <i className="fa fa-angle-right" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                      <div className="season-right">
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/wildlife_sancturies/ranthambore-national-park.html"
                              target="_blank"
                            >
                              <img
                                src="tmimg/ranthambore-feb.webp"
                                alt="ranthambore image"
                              />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/wildlife_sancturies/ranthambore-national-park.html"
                                target="_blank"
                              >
                                Ranthambore
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/states/rajasthan/rajasthan_jaipur.html"
                              target="_blank"
                            >
                              <img
                                src="tmimg/jaipur-feb.webp"
                                alt="jaipur image"
                              />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/rajasthan/rajasthan_jaipur.html"
                                target="_blank"
                              >
                                Jaipur
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/states/rajasthan/rajasthan_udaipur.html"
                              target="_blank"
                            >
                              <img
                                src="tmimg/udaipur-feb.webp"
                                alt="udaipur image"
                              />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/rajasthan/rajasthan_udaipur.html"
                                target="_blank"
                              >
                                Udaipur
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-contact13"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab13"
                >
                  <div className="row season-row">
                    <div className="col-lg-4 col-md-12 season-left1">
                      <div className="season-left">
                        <h3>March</h3>
                        <p>
                          With pleasant weather and mild temperatures in March,
                          Shimla and Wayanad provide a refreshing retreat amidst
                          hill stations and wildlife respectively.
                          Alternatively, Jaisalmer in Rajasthan offers a rich
                          heritage experience. Whether it's the charm of
                          Himachal, Uttarakhand's tranquility, or the allure of
                          Kerala, March is an ideal time for exploration.
                        </p>
                        <a href="https://www.tourmyindia.com/blog/best-places-visit-march/">
                          View More
                          <i className="fa fa-angle-right" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                      <div className="season-right">
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/states/himachal/shimla.html"
                              target="_blank"
                            >
                              <img
                                src="tmimg/shimla-mar.webp"
                                alt="shimla image"
                              />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/himachal/shimla.html"
                                target="_blank"
                              >
                                Shimla
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/states/kerala/wayanad.html"
                              target="_blank"
                            >
                              <img
                                src="tmimg/wayanad-mar.webp"
                                alt="wayanad image"
                              />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/kerala/wayanad.html"
                                target="_blank"
                              >
                                Wayanad
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/states/rajasthan/rajasthan_jaisalmer.html"
                              target="_blank"
                            >
                              <img
                                src="tmimg/jaisalmer1-mar.webp"
                                alt="jaisalmer image"
                              />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/rajasthan/rajasthan_jaisalmer.html"
                                target="_blank"
                              >
                                Jaisalmer
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-drum13"
                  role="tabpanel"
                  aria-labelledby="pills-drum-tab13"
                >
                  <div className="row season-row">
                    <div className="col-lg-4 col-md-12 season-left1">
                      <div className="season-left">
                        <h3>April</h3>
                        <p>
                          April is the perfect time to enjoy the picturesque
                          hill station of Darjeeling in West Bengal, or embark
                          on a thrilling jungle safari in Jim Corbett National
                          Park in Uttarakhand. Alternatively, you can explore
                          the "Queen of Hill Stations", Ooty, for its serene
                          landscapes and colonial heritage.
                        </p>
                        <a href="https://www.tourmyindia.com/blog/best-places-visit-april-india/">
                          View More
                          <i className="fa fa-angle-right" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                      <div className="season-right">
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/hill_stations/darjeeling.html"
                              target="_blank"
                            >
                              <img
                                src="tmimg/darjeeling-apr.webp"
                                alt="darjeeling image"
                              />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/hill_stations/darjeeling.html"
                                target="_blank"
                              >
                                Darjeeling
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/wildlife_sancturies/jim-corbett-national-park.html"
                              target="_blank"
                            >
                              <img
                                src="tmimg/jim-corbett-apr.webp"
                                alt="jim-corbett image"
                              />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/wildlife_sancturies/jim-corbett-national-park.html"
                                target="_blank"
                              >
                                Jim Corbett National Park
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/states/tamilnadu/ooty.html"
                              target="_blank"
                            >
                              <img src="tmimg/ooty-apr.webp" alt="ooty image" />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/tamilnadu/ooty.html"
                                target="_blank"
                              >
                                Ooty
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-beat13"
                  role="tabpanel"
                  aria-labelledby="pills-beat-tab13"
                >
                  <div className="row season-row">
                    <div className="col-lg-4 col-md-12 season-left1">
                      <div className="season-left">
                        <h3>May</h3>
                        <p>
                          In the month of May, escape to the pristine beaches of
                          Andaman, or embark on the spiritual journey of the
                          Chardham Yatra in Uttarakhand. If adventure calls you,
                          Ladakh's stark beauty awaits. Hill stations in Kerala
                          and the mesmerizing landscapes of Northeast India also
                          offer respite from the summer heat.
                        </p>
                        <a href="https://www.tourmyindia.com/blog/best-places-visit-may-month-india/">
                          View More
                          <i className="fa fa-angle-right" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                      <div className="season-right">
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/states/andaman/"
                              target="_blank"
                            >
                              <img
                                src="tmimg/andaman-may.webp"
                                alt="andaman image"
                              />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/andaman/"
                                target="_blank"
                              >
                                Andaman
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/chardham/"
                              target="_blank"
                            >
                              <img
                                src="tmimg/chardham-may.webp"
                                alt="chardham image"
                              />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/chardham/"
                                target="_blank"
                              >
                                Chardham
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/states/ladakh/"
                              target="_blank"
                            >
                              <img
                                src="tmimg/ladakh-may.webp"
                                alt="ladakh image"
                              />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/ladakh/"
                                target="_blank"
                              >
                                Ladakh
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-june13"
                  role="tabpanel"
                  aria-labelledby="pills-june-tab13"
                >
                  <div className="row season-row">
                    <div className="col-lg-4 col-md-12 season-left1">
                      <div className="season-left">
                        <h3>June</h3>
                        <p>
                          The month of June is ideal for exploring the rugged
                          beauty of Ladakh, the serene landscapes of Sikkim in
                          Northeast India, or the charming hill stations of
                          Manali in Himachal Pradesh. Each of these destinations
                          offers unique experiences, making them some of the
                          best places to explore in June.
                        </p>
                        <a href="https://www.tourmyindia.com/blog/best-places-visit-june-india/">
                          View More
                          <i className="fa fa-angle-right" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                      <div className="season-right">
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/states/ladakh/"
                              target="_blank"
                            >
                              <img
                                src="tmimg/ladakh-may.webp"
                                alt="leh-ladakh image"
                              />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/ladakh/"
                                target="_blank"
                              >
                                Leh - Ladakh
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/states/himachal/kullu-manali.html"
                              target="_blank"
                            >
                              <img
                                src="tmimg/manali-jan.webp"
                                alt="manali image"
                              />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/himachal/kullu-manali.html"
                                target="_blank"
                              >
                                Manali
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/states/sikkim/"
                              target="_blank"
                            >
                              <img
                                src="tmimg/sikkim-june.webp"
                                alt="sikkim image"
                              />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/sikkim/"
                                target="_blank"
                              >
                                Sikkim
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-july13"
                  role="tabpanel"
                  aria-labelledby="pills-july-tab13"
                >
                  <div className="row season-row">
                    <div className="col-lg-4 col-md-12 season-left1">
                      <div className="season-left">
                        <h3>July</h3>
                        <p>
                          Embrace the monsoon season with a visit to Goa's
                          rain-kissed beaches or the vibrant Valley of Flowers
                          in Uttarakhand. Alternatively, Kerala offers an
                          enriching monsoon tourism experience with its
                          backwaters, Ayurvedic treatments, and lush greenery.
                          These destinations truly come alive with the magic of
                          rains in July.
                        </p>
                        <a href="https://www.tourmyindia.com/blog/best-places-visit-july-india/">
                          View More
                          <i className="fa fa-angle-right" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                      <div className="season-right">
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/states/goa/"
                              target="_blank"
                            >
                              <img src="tmimg/goa-july.webp" alt="goa image" />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/goa/"
                                target="_blank"
                              >
                                Goa
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/treks/valley-of-flowers-trek.html"
                              target="_blank"
                            >
                              <img
                                src="tmimg/valley-of-flowers-july.webp"
                                alt="valley of flowers image"
                              />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/treks/valley-of-flowers-trek.html"
                                target="_blank"
                              >
                                Valley Of Flowers
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/states/kerala/"
                              target="_blank"
                            >
                              <img
                                src="tmimg/kerala-july.webp"
                                alt="kerala image"
                              />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/kerala/"
                                target="_blank"
                              >
                                Kerala
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-aug13"
                  role="tabpanel"
                  aria-labelledby="pills-aug-tab13"
                >
                  <div className="row season-row">
                    <div className="col-lg-4 col-md-12 season-left1">
                      <div className="season-left">
                        <h3>August</h3>
                        <p>
                          Experience the mesmerizing monsoon in August at places
                          like the high-altitude desert of Ladakh or the
                          tea-covered hills of Munnar. Visit the Valley of
                          Flowers in full bloom or witness the rejuvenating
                          effect of monsoon rains in Kerala. These destinations
                          promise a unique monsoon getaway, creating
                          unforgettable holiday memories.
                        </p>
                        <a href="https://www.tourmyindia.com/blog/top-things-to-do-and-see-in-august-in-india/">
                          View More
                          <i className="fa fa-angle-right" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                      <div className="season-right">
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/states/ladakh/"
                              target="_blank"
                            >
                              <img
                                src="tmimg/ladakh-may.webp"
                                alt="ladakh image"
                              />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/ladakh/"
                                target="_blank"
                              >
                                Ladakh
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/states/kerala/munnar.html"
                              target="_blank"
                            >
                              <img
                                src="tmimg/munnar-aug.webp"
                                alt="munnar image"
                              />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/kerala/munnar.html"
                                target="_blank"
                              >
                                Munnar
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/treks/valley-of-flowers-trek.html"
                              target="_blank"
                            >
                              <img
                                src="tmimg/valley-of-flowers-july.webp"
                                alt="valley of flowers image"
                              />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/treks/valley-of-flowers-trek.html"
                                target="_blank"
                              >
                                Valley Of Flowers
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-sept13"
                  role="tabpanel"
                  aria-labelledby="pills-sept-tab13"
                >
                  <div className="row season-row">
                    <div className="col-lg-4 col-md-12 season-left1">
                      <div className="season-left">
                        <h3>September</h3>
                        <p>
                          With the beginning of the tourism season in India,
                          September is the perfect time to visit a variety of
                          destinations. Explore the royal heritage of Rajasthan,
                          enjoy Goa's serene beaches, or soak in the tranquil
                          beauty of Himachal. Whether you choose North India's
                          mountainous terrains or South India's tranquil
                          backwaters, September promises an unforgettable
                          journey.
                        </p>
                        <a href="https://www.tourmyindia.com/blog/destinations-in-india-visit-in-september/">
                          View More
                          <i className="fa fa-angle-right" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                      <div className="season-right">
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/states/rajasthan/"
                              target="_blank"
                            >
                              <img
                                src="tmimg/rajasthan-sept.webp"
                                alt="rajasthan image"
                              />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/rajasthan/"
                                target="_blank"
                              >
                                Rajasthan
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/states/goa/"
                              target="_blank"
                            >
                              <img src="tmimg/goa-july.webp" alt="goa image" />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/goa/"
                                target="_blank"
                              >
                                Goa
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/states/himachal/"
                              target="_blank"
                            >
                              <img
                                src="tmimg/shimla-mar.webp"
                                alt="shimla image"
                              />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/himachal/"
                                target="_blank"
                              >
                                Himachal
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-oct13"
                  role="tabpanel"
                  aria-labelledby="pills-oct-tab13"
                >
                  <div className="row season-row">
                    <div className="col-lg-4 col-md-12 season-left1">
                      <div className="season-left">
                        <h3>October</h3>
                        <p>
                          October marks the opening of wildlife sanctuaries and
                          national parks in India, making it a great time for
                          wildlife jungle safari tours. Explore the majestic
                          tigers of Ranthambore, the biodiversity of
                          Bandhavgarh, or the rich fauna in Corbett. Immerse
                          yourself in nature's splendor for an unforgettable
                          October excursion.
                        </p>
                        <a href="https://www.tourmyindia.com/blog/best-places-to-visit-october/">
                          View More
                          <i className="fa fa-angle-right" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                      <div className="season-right">
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/wildlife_sancturies/ranthambore-national-park.html"
                              target="_blank"
                            >
                              <img
                                src="tmimg/ranthambore-feb.webp"
                                alt="ranthambore image"
                              />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/wildlife_sancturies/ranthambore-national-park.html"
                                target="_blank"
                              >
                                Ranthambore National Park
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/wildlife_sancturies/bandhavgarh-national-park.html"
                              target="_blank"
                            >
                              <img
                                src="tmimg/bandhavgarh-oct.webp"
                                alt="bandhavgarh image"
                              />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/wildlife_sancturies/bandhavgarh-national-park.html"
                                target="_blank"
                              >
                                Bandhavgarh National Park
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/wildlife_sancturies/jim-corbett-national-park.html"
                              target="_blank"
                            >
                              <img
                                src="tmimg/jim-corbett-apr.webp"
                                alt="jim corbett image"
                              />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/wildlife_sancturies/jim-corbett-national-park.html"
                                target="_blank"
                              >
                                Corbett National Park
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-nov13"
                  role="tabpanel"
                  aria-labelledby="pills-nov-tab13"
                >
                  <div className="row season-row">
                    <div className="col-lg-4 col-md-12 season-left1">
                      <div className="season-left">
                        <h3>November</h3>
                        <p>
                          As the winter season begins in November, India offers
                          pleasant weather ideal for sightseeing and adventure.
                          Explore the majestic heritage of places like Agra and
                          Varanasi, or indulge in thrilling treks in Uttarakhand
                          and the Himalayas. With a perfect blend of culture and
                          adventure, November promises an unforgettable travel
                          experience.
                        </p>
                        <a href="https://www.tourmyindia.com/blog/best-places-to-visit-november-india/">
                          View More
                          <i className="fa fa-angle-right" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                      <div className="season-right">
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/states/uttarpradesh/agra.html"
                              target="_blank"
                            >
                              <img src="tmimg/agra-nov.webp" alt="agra image" />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/uttarpradesh/agra.html"
                                target="_blank"
                              >
                                Agra
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/states/uttarpradesh/varanasi.html"
                              target="_blank"
                            >
                              <img
                                src="tmimg/varanasi-nov.webp"
                                alt="varanasi image"
                              />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/uttarpradesh/varanasi.html"
                                target="_blank"
                              >
                                Varanasi
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/states/uttarakhand/"
                              target="_blank"
                            >
                              <img
                                src="tmimg/uttarakhand-nov.webp"
                                alt="uttarakhand image"
                              />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/uttarakhand/"
                                target="_blank"
                              >
                                Uttarakhand
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-dec13"
                  role="tabpanel"
                  aria-labelledby="pills-dec-tab13"
                >
                  <div className="row season-row">
                    <div className="col-lg-4 col-md-12 season-left1">
                      <div className="season-left">
                        <h3>December</h3>
                        <p>
                          December is the perfect month to plan for a New Year
                          &amp; Christmas vacation, with destinations like Goa
                          and Mumbai offering vibrant celebrations and luxury.
                          If you prefer a winter wonderland, hill resorts in
                          Auli present a snow-laden paradise. Whether it's beach
                          parties or cozy bonfires, these destinations make
                          December memorable.
                        </p>
                        <a href="https://www.tourmyindia.com/blog/top-places-to-visit-in-decemeber-in-india/">
                          View More
                          <i className="fa fa-angle-right" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-12">
                      <div className="season-right">
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/states/goa/"
                              target="_blank"
                            >
                              <img src="tmimg/goa-july.webp" alt="goa image" />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/goa/"
                                target="_blank"
                              >
                                Goa
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/states/maharashtra/mumbai.html"
                              target="_blank"
                            >
                              <img
                                src="tmimg/mumbai-dec.webp"
                                alt="mumbai image"
                              />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/maharashtra/mumbai.html"
                                target="_blank"
                              >
                                Mumbai
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="season-content">
                          <figure>
                            <a
                              href="https://www.tourmyindia.com/states/uttarakhand/auli.html"
                              target="_blank"
                            >
                              <img src="tmimg/auli-jan.webp" alt="auli image" />
                            </a>
                          </figure>
                          <div className="interest-sec">
                            <h4>
                              <a
                                href="https://www.tourmyindia.com/states/uttarakhand/auli.html"
                                target="_blank"
                              >
                                Auli
                              </a>
                            </h4>
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
      </>
    </div>
  );
};

export default BySeason;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const HolidaysGuide = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <section className="travel-guides">
        <div className="container1">
          <div className="main-heading">
            <h2>India Travel Guides</h2>
          </div>
          <div className="row travel-guide-sec">
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 ">
              <div className="guide-content">
                <figure>
                  <Link
                  to={''}
                  >
                    <img
                      src="https://www.tourmyindia.com/tmimg/j&k-tourism.webp"
                      alt="j&k image"
                    />
                  </Link>
                </figure>
                <h4>
                  <Link to={''}
                  >
                    Jammu Kashmir Tourism Guide
                  </Link>
                </h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 ">
              <div className="guide-content">
                <figure>
                  <Link to={''}
                  >
                    <img
                      src="https://www.tourmyindia.com/tmimg/rajasthan-tourism.webp"
                      alt="rajasthan image"
                    />
                  </Link>
                </figure>
                <h4>
                  <Link to={''}
                  >
                    Rajasthan Tourism Guide
                  </Link>
                </h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 ">
              <div className="guide-content">
                <figure>
                  <Link to={''}
                  >
                    <img
                      src="https://www.tourmyindia.com/tmimg/kerala-tourism.webp"
                      alt="kerala image"
                    />
                  </Link>
                </figure>
                <h4>
                  <Link
                   to={''}
                  >
                    Kerala Tourism Guide{" "}
                  </Link>
                </h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 ">
              <div className="guide-content">
                <figure>
                  <Link
                  to={''}
                  >
                    <img
                      src="https://www.tourmyindia.com/tmimg/ladakh-tourism.webp"
                      alt="ladakh image"
                    />
                  </Link>
                </figure>
                <h4>
                  <Link to={''}
                  >
                    Ladakh Tourism Guide
                  </Link>
                </h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 ">
              <div className="guide-content">
                <figure>
                  <Link to={''}
                  >
                    <img
                      src="https://www.tourmyindia.com/tmimg/himachal-tourism.webp"
                      alt="himachal image"
                    />
                  </Link>
                </figure>
                <h4>
                  <Link
                  to={''}
                  >
                    Himachal Tourism Guide
                  </Link>
                </h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 ">
              <div className="guide-content">
                <figure>
                  <Link to={''}
                  >
                    <img
                      src="https://www.tourmyindia.com/tmimg/sikkim-tourism.webp"
                      alt="sikkim image"
                    />
                  </Link>
                </figure>
                <h4>
                  <Link
                  to={''}
                  >
                    Sikkim Tourism Guide
                  </Link>
                </h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 ">
              <div className="guide-content">
                <figure>
                  <Link
                  to={''}
                  >
                    <img
                      src="https://www.tourmyindia.com/tmimg/uttarakhand-tourism.webp"
                      alt="uttarakhand image"
                    />
                  </Link>
                </figure>
                <h4>
                  <Link to={''}
                  >
                    Uttarakhand Tourism Guide
                  </Link>
                </h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 ">
              <div className="guide-content">
                <figure>
                  <Link
                  to={''}
                  >
                    <img
                      src="https://www.tourmyindia.com/tmimg/goa-tourism.webp"
                      alt="goa image"
                    />
                  </Link>
                </figure>
                <h4>
                  <Link to={''}
                  >
                    Goa Tourism Guide{" "}
                  </Link>
                </h4>
              </div>
            </div>

            {isVisible && (
              <div
                id="collapse01"
                className="row travel-guide-sec"
                //   style={{display:"none"}}
              >
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="guide-content">
                    <figure>
                      <Link to={''}
                      >
                        <img
                          src="https://www.tourmyindia.com/tmimg/mp-tourism.webp"
                          alt="madhya pradesh image"
                        />
                      </Link>
                    </figure>
                    <h4>
                      <Link
                      to={''}
                      >
                        MP Tourism Guide
                      </Link>
                    </h4>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="guide-content">
                    <figure>
                      <Link
                      to={''}
                      >
                        <img
                          src="https://www.tourmyindia.com/tmimg/karnataka-tourism.webp"
                          alt="karnataka image"
                        />
                      </Link>
                    </figure>
                    <h4>
                      <Link
                      to={''}
                      >
                        Karnataka Tourism Guide
                      </Link>
                    </h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="guide-content">
                    <figure>
                      <Link
                      to={''}
                      >
                        <img
                          src="https://www.tourmyindia.com/tmimg/tamilnadu-tourism.webp"
                          alt="tamilnadu image"
                        />
                      </Link>
                    </figure>
                    <h4>
                      <Link to={''}
                      >
                        Tamil Nadu Tourism Guide{" "}
                      </Link>
                    </h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="guide-content">
                    <figure>
                      <Link
                      to={''}
                      >
                        <img
                          src="https://www.tourmyindia.com/tmimg/tamilnadu-tourism.webp"
                          alt="andaman image"
                        />
                      </Link>
                    </figure>
                    <h4>
                      <Link
                      to={''}
                      >
                        Andaman Tourism Guide
                      </Link>
                    </h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="guide-content">
                    <figure>
                      <Link to={''}
                      >
                        <img
                          src="https://www.tourmyindia.com/tmimg/assam-tourism.webp"
                          alt="assam image"
                        />
                      </Link>
                    </figure>
                    <h4>
                      <Link to={''}
                      >
                        Assam Tourism Guide{" "}
                      </Link>
                    </h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="guide-content">
                    <figure>
                      <Link to={''}
                      >
                        <img
                          src="https://www.tourmyindia.com/tmimg/arunachal-tourism.webp"
                          alt="arunachal image"
                        />
                      </Link>
                    </figure>
                    <h4>
                      <Link to={''}
                      >
                        Arunachal Tourism Guide
                      </Link>
                    </h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="guide-content">
                    <figure>
                      <Link
                      >
                        <img
                          src="https://www.tourmyindia.com/tmimg/delhi-tourism.webp"
                          alt="delhi image"
                        />
                      </Link>
                    </figure>
                    <h4>
                      <Link to={''}
                      >
                        Delhi Tourism Guide
                      </Link>
                    </h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="guide-content">
                    <figure>
                      <Link 
                      to={''}
                      >
                        <img
                          src="https://www.tourmyindia.com/tmimg/up-tourism.webp"
                          alt="up image"
                        />
                      </Link>
                    </figure>
                    <h4>
                      <Link to={''}
                      >
                        UP Tourism Guide
                      </Link>
                    </h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="guide-content">
                    <figure>
                      <Link to={''}
                      >
                        <img
                          src="https://www.tourmyindia.com/tmimg/gujarat-tourism.webp"
                          alt="gujarat image"
                        />
                      </Link>
                    </figure>
                    <h4>
                      <Link to={''}
                      >
                        Gujarat Travel Guide
                      </Link>
                    </h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="guide-content">
                    <figure>
                      <Link to={''}
                      >
                        <img
                          src="https://www.tourmyindia.com/tmimg/nagaland-tourism.webp"
                          alt="nagaland image"
                        />
                      </Link>
                    </figure>
                    <h4>
                      <Link to={''}
                      >
                        Nagaland Travel Guide{" "}
                      </Link>
                    </h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="guide-content">
                    <figure>
                      <Link to={''}
                      >
                        <img
                          src="https://www.tourmyindia.com/tmimg/odisa-tourism.webp"
                          alt="odisa image"
                        />
                      </Link>
                    </figure>
                    <h4>
                      <Link
                      to={''}
                      >
                        Odisha Travel Guide
                      </Link>
                    </h4>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="guide-content">
                    <figure>
                      <Link
                      to={''}
                      >
                        <img
                          src="https://www.tourmyindia.com/tmimg/meghalaya-tourism.webp"
                          alt="meghalaya image"
                        />
                      </Link>
                    </figure>
                    <h4>
                      <Link to={''}
                      >
                        Meghalaya Travel Guide{" "}
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            )}

            <button
              className="toggle-active-load load-more"
              id="view"
              onClick={() => toggleVisibility()}
            >
              {isVisible ? "Less" : "View all"}
            </button>
          </div>
        </div>
      </section>
      <section className="more-info">
        <div className="container1">
          <div className="info-sec">
            <div className="main-heading">
              <h2>
                About India <br />
                Tour Packages
              </h2>
            </div>
            <div className="more-info-content">
              <p>
                In India, no two vacations are the same, just as no two tour
                packages are identical. Each holiday in India is unique due to
                the country's diverse culture, history, and landscape.
                Therefore, India offers both international and domestic
                travellers the opportunity to enjoy the beauty of dreamy
                beaches, surreal hill stations, wildlife-rich forests, and
                expansive deserts on one hand, and impressive palaces, majestic
                forts, gigantic temples, and cenotaphs on the other. The country
                boasts a holistic experience, meaning your vacation in India
                isn't confined to just history, culture, and landscape;
                unforgettable spiritual journeys and adrenaline-filled adventure
                tours await as well. At Tour My India, we're experts at crafting
                holiday packages that incorporate all these experiences.
              </p>
              <p>
                If there is an experience worth having in India, we have it
                covered for you. We ensure your family tours in hill stations
                like Nainital, Mussoorie, Shimla, or beach destinations like Goa
                are hassle-free. We also ensure that your honeymoon stays as
                romantic as it should be. History lovers can rest assured that
                their heritage tours to iconic places like the Taj Mahal, Ajanta
                &amp; Ellora, the group of temples in Khajuraho, or
                architecturally marvelous Rajasthan will be insightful.
                Pilgrimage tours for people of all faiths are also guaranteed to
                be flawless. Our years of experience ensure your corporate tours
                in India are as rewarding and perfectly executed as your annual
                performances.
              </p>
              <p>
                Since India is a land of adventure, we make sure every
                adrenaline-rushing activity like trekking in the Himalayas,
                river rafting, skiing, mountain biking, etc., is available
                through our carefully designed adventure tour packages. Wildlife
                lovers can be assured of thrilling adventures with sightings of
                rare and exotic species like the Royal Bengal Tiger and the
                one-horned rhinoceros at some of the best wildlife destinations
                in the country like Ranthambore, Corbett, and Kaziranga National
                Parks. We have all the amazing India tour packages prepared and
                waiting for you. Choose from our wide range of holiday packages
                in India to unlock an unforgettable and unmatched travel
                experience for yourself.
              </p>
              <h5>India Wildlife Tours</h5>
              <p>
                India's wildlife tours offer enthralling experiences to wildlife
                enthusiasts through their remarkable diversity. We aim to
                highlight the best of this in our wildlife tour packages,
                ensuring there's something for every wildlife lover. Whether
                it's tiger safari tours, snow leopard tours, rhino tours, or
                bird watching tours, we promise a thrilling adventure in India.
                So, get ready with your camera to capture some of the best
                wildlife shots with us!
              </p>
              <h5>Heritage Tours in India</h5>
              <p>
                India boasts a rich history and architectural marvels, with
                landmarks like the Taj Mahal, the forts and palaces of
                Rajasthan, Mahabalipuram in the south, and Ajanta &amp; Ellora
                in the west serving as stunning examples of its heritage. To
                witness and experience this rich heritage firsthand, choose from
                our range of India heritage tour packages. These tours offer a
                closer look at the intricate carvings and architectural
                masterpieces, and a walk through unforgettable monuments rich
                with tales and legends. Embark on an unmatched heritage holiday
                in India with us.
              </p>
              <h5>Hill Station Tours in India</h5>
              <p>
                If you wish to experience nature at its finest in India, a
                holiday in a hill station is an excellent idea. Enjoy a vacation
                in scenic hilly locations adorned with colonial-era buildings,
                surrounded by forests, and boasting spectacular mountain views,
                all under a canopy of fresh, chilly air. In winter, you can
                delight in snowfall and partake in activities like skiing. With
                our hill station tour packages, you can enjoy the best holiday
                experiences in premier Indian hill stations like Kashmir,
                Nainital, Manali, Mussoorie, Shimla, Ooty, Munnar, Darjeeling,
                Gangtok, and more.
              </p>
              <h5>Beach Tours in India</h5>
              <p>
                The picturesque beaches in India promise a vacation that's hard
                to forget, and with our top-notch beach tour packages, the
                experience becomes even more memorable. Explore the Indian
                coastline and indulge in adventure activities that deliver a
                hefty adrenaline rush. Our beach tour packages are your gateway
                to a relaxing and romantic seaside getaway, an adventure-packed
                venture, or a holiday filled with family memories. The best
                places for beach holidays in India include Goa, the Andamans,
                Kerala, Odisha, and Lakshadweep.
              </p>
              <h5>Honeymoon Tour Packages</h5>
              <p>
                A honeymoon is a journey that will remain etched in your memory
                for the rest of your life. Make the most of your first holiday
                together in India with our specially curated honeymoon tour
                packages. With the finest hotels and a range of activities to
                choose from, we ensure that you'll relish every moment of your
                invaluable romantic vacation. Popular destinations for honeymoon
                tours in India include Kashmir, Goa, Kerala, Uttarakhand,
                Himachal, Rajasthan, Sikkim, Lakshadweep, and the Andamans.
              </p>
              <h5>Ayurveda &amp; Meditation Tours in India</h5>
              <p>
                Since ancient times, India has been a pioneer in Ayurveda
                therapy and treatments. This age-old science promises an
                unmissable opportunity for a wellness experience in the country.
                With our Ayurveda tours in India, you can achieve complete
                rejuvenation for your body, mind, and soul. Enjoy Ayurvedic
                massages and treatments at some of the best Ayurveda resorts and
                centres in India, all while taking in incredible vistas and
                experiencing the finest of Indian hospitality.
              </p>
              <h5>Cultural Tours in India</h5>
              <p>
                India's rich culture, with its vibrant festivals, remarkable
                traditions, amazing arts and crafts, scrumptious food, and
                brilliant dance and music, captivates travellers from around the
                world. Boasting a diversity of religions and customs, India
                truly celebrates cultural pluralism. With our all-inclusive
                India cultural tour packages, travellers can partake in unique
                celebrations, explore intriguing rituals, and experience
                impeccable hospitality, ensuring that your cultural holidays in
                India are truly unforgettable.
              </p>
              <h5>Adventure Tours India</h5>
              <p>
                The diverse Indian topography, characterized by the towering
                Himalayas, dense forests, rugged terrains, alpine lakes and
                meadows, and powerful sea waves, provides a wealth of
                opportunities for spine-tingling adventure sports. With our
                adventure tour packages, you can enjoy a wide range of
                exhilarating activities, from trekking and river rafting to
                paragliding and windsurfing, as well as mountain biking, peak
                climbing, and much more. Adventure tourism in India invites you
                to a world of thrill and excitement.
              </p>
              <h5>Luxury Tours in India</h5>
              <p>
                Allow luxury to be your constant companion during your holidays
                as you plan a stay at the top luxury hotels in India. The
                country also offers many luxurious royal train journeys, such as
                the Maharaja Express, Royal Chariot, and Palace on Wheels, for
                unforgettable luxury holiday experiences. Revel in the best of
                relaxation, pampering, and comfort while exploring India's
                diversity and boundless beauty. Immerse yourself in luxurious
                experiences, whether travelling on luxury trains and cruises or
                indulging in spa and meditation sessions. Transform your
                vacation into an extraordinary experience, one that acquaints
                you with true luxury. Our luxury tour packages deliver the
                finest hospitality and promise to leave you with lifelong
                memories.
              </p>
              <p>
                <em>
                  Please note that all our tour packages can be tailored to your
                  preferences. If you wish to personalize your itinerary based
                  on your specific requirements, feel free to email us with the
                  details. Our travel experts will be delighted to curate the
                  perfect itinerary to ensure you have a trip filled with
                  lasting memories. For more information or to discuss your
                  plans further, please give us a call at +91-9212777223/24.
                </em>
              </p>
              {/* <div id="collapse02" style="display: none;">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga repellendus est labore tenetur cumque quibusdam voluptatum. Beatae ut hic saepe rerum nostrum? Sed iste voluptates necessitatibus. Harum et optio eligendi.</p>
                  </div>
                  <button href="#collapse02" class="toggle-active more">Read More<i class="fa fa-angle-right" aria-hidden="true"></i></button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HolidaysGuide;

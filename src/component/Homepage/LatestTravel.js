import React from "react";
import { Link } from "react-router-dom";

const LatestTravel = () => {
  return (
    <div>
      <div className="container">
        <h3 className="highlight1">Our Latest Travel Stories</h3>
      </div>
      <div className="blog">
        <div className="container">
          <h3 className="highlight">Exclusive collection of travel blogs</h3>
          <div className="blog-area">
            <div className="blog-box">
              <Link to={''}>
                <figure>
                  <img src="https://www.tourmyindia.com/blog/wp-content/uploads/2024/06/Trekking-in-the-Himalayas.jpg" />
                </figure>{" "}
                <span>June 10,2024</span>
                <h3>
                  Uttarakhand’s Trekking Tragedy: What Can We Learn About Having
                  Safe Treks?
                </h3>
              </Link>
            </div>
            <div className="blog-box">
              <Link to={''}>
                <figure>
                  <img src="https://www.tourmyindia.com/blog/wp-content/uploads/2024/06/Best-Places-to-Visit-in-Kerala-with-Family.jpg" />
                </figure>{" "}
                <span>June 6,2024</span>
                <h3>
                  6 Best Places to Visit in Kerala with Family &amp; Kids on
                  Your Next Vacation
                </h3>
              </Link>
            </div>
            <div className="blog-box">
              <Link to={''}>
                <figure>
                  <img src="https://www.tourmyindia.com/blog/wp-content/uploads/2024/06/Best-Resorts-Near-Delhi-for-Family-Trip.jpg" />
                </figure>{" "}
                <span>June 4,2024</span>
                <h3>
                  22 Top Resorts that Make for Great Weekend Getaways from Delhi
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestTravel;

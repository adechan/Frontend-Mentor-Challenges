import React from "react";
import "./Banner.css";
import BannerImage from "../../assets/image-intro-desktop.jpg";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__info">
        <div className="banner__description">
          <p className="banner__line"></p>
          <h3>Humanizing</h3>
          <h3> your insurance.</h3>
          <p>
            Get your life insurance coverage easier and faser. We blend our
            expertise and technology to help you find the plan that's right for
            you. Ensure you and your loved ones are protected.
          </p>
          <p>VIEW PLANS</p>
        </div>

        <img src={BannerImage} alt="" />
      </div>
    </div>
  );
}

export default Banner;

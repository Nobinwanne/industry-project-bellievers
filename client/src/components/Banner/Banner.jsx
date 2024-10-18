import React from "react";
import "./Banner.scss";

function Banner() {
  return (
    <div className="banner">
      If you are in crisis, please go to your local hospital, call 9-1-1
      immediately or locate a .
      <a href="https://988.ca/community-resources" target="_blank">
        Crisis center in your region
      </a>
      . Call or text 9-8-8 anytime if you're thinking of suicide.
    </div>
  );
}

export default Banner;

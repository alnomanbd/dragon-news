import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-semibold mb-3">Find Us On</h1>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn join-item justify-start">
          <FaFacebook /> Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaInstagram /> Instagram
        </button>
        <button className="btn join-item justify-start">
          <FaTwitter /> Twitter
        </button>
      </div>
    </div>
  );
};

export default FindUs;

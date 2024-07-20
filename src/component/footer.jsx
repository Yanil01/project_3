import React from "react";
import StarRating from "."; // Assuming StarRating component is in the same directory
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Copyright © 2024 Your Portfolio. All rights reserved.</p>
        <div className="rating">
          <StarRating noOfStars={5} /> {/* Render StarRating component */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

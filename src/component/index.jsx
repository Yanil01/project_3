import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0); // State to keep track of the selected rating
  const [hover, setHover] = useState(0); // State to keep track of the hovered rating

  // Function to handle click on a star
  function handleClick(index) {
    setRating(index); // Update the rating state with the clicked star index
  }

  // Function to handle mouse enter on a star
  function handleMouseEnter(index) {
    setHover(index); // Update the hover state with the star index being hovered over
  }

  // Function to handle mouse leave from the star rating component
  function handleMouseLeave() {
    setHover(rating); // Reset hover state to current rating when mouse leaves
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        const starIndex = index + 1; // Calculate the star index (1-based)

        return (
          <FaStar
            key={index}
            className={
              starIndex <= (hover || rating) ? "star active" : "star inactive"
            }
            onClick={() => handleClick(starIndex)}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseLeave={handleMouseLeave}
            size={30} // Adjust the size of the stars as per your design
          />
        );
      })}
    </div>
  );
}

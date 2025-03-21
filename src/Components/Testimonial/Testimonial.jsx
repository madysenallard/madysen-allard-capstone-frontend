import React from "react";
import "./Testimonial.scss";

function TestimonialCard({ name, location, review, rating }) {
  return (
    <div className="testimonial-card">
      <div className="stars">{"★".repeat(rating)}</div>
      <p className="review">"{review}"</p>
      <div className="user-info">
        <p className="name">{name}</p>
        <p className="location">{location}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;

import React from "react";
import "./Testimonial.scss";

function TestimonialCard({ name, location, review, rating }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__stars">{"★".repeat(rating)}</div>
      <p className="testimonial-card__review">"{review}"</p>
      <div className="testimonial-card__user-info">
        <p className="testimonial-card__name">{name}</p>
        <p className="testimonial-card__location">{location}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;

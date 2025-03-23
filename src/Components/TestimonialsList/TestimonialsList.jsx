import React from "react";
import TestimonialCard from "../Testimonial/Testimonial.jsx";
import "./testimonialsList.scss";

function TestimonialsList() {
  const testimonialContent = [
    {
      name: "Jake M.",
      location: "California",
      review:
        "Breakpoint is my ultimate surf companion! The real-time weather updates and surf spot guides make trip planning so easy.",
      rating: 5,
    },
    {
      name: "Emily R.",
      location: "Australia",
      review:
        "I love how Breakpoint connects surfers while promoting ocean conservation. It's a must-have for any eco-conscious wave rider!",
      rating: 5,
    },
    {
      name: "Tyler S.",
      location: "Hawaii",
      review:
        "From finding the best waves to sharing my surf shots with the community, Breakpoint has it all. Highly recommend!",
      rating: 5,
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__title">What Surfers Say</h2>
        <div className="testimonials__testimonial-list">
          {testimonialContent.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsList;

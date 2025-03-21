import connectPic from "../../Assets/Photos/connect-pic.jpg";
import conservationPic from "../../Assets/Photos/conservation-pic.jpg";
import homePic from "../../Assets/Photos/home-pic.jpg";
import mapPic from "../../Assets/Photos/map-pic.jpg";
import TestimonialsList from "../../Components/TestimonialsList/TestimonialsList";
import { useState } from "react";
import "../Homepage/HomePage.scss";

function HomePage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [imgPanelOpen, isImgPanelOpen] = useState(false);

  const panelImgArr = [connectPic, conservationPic, homePic, mapPic];

  const textContent = [
    {
      title: "Welcome to Breakpoint",
      description:
        "Welcome to our surfing community – here you'll find resources to enhance your wave-riding experience, from top surf locations to conservation practices.",
    },
    {
      title: "Conservation",
      description:
        "Learn how to protect our oceans and marine wildlife through eco-conscious surfing practices and become a guardian of the waters we love.",
    },
    {
      title: "Maps & Weather",
      description:
        "Discover premier surf spots near any city and access real-time weather conditions to plan your perfect surf session.",
    },
    {
      title: "Connect",
      description:
        "Share your surfing photos and connect with fellow wave enthusiasts in our dedicated surfing community.",
    },
  ];

  return (
    <div className="home">
      <div className="home__hero">
        <h1 className="home__title">Breakpoint</h1>
        <h3 className="home__subtitle">A Surfer's Guide</h3>
        <p className="home__about">
          Find the best surf spots with real-time weather updates, learn
          eco-friendly surfing practices, and connect with fellow surfers by
          sharing your best moments. Ride the waves, protect the ocean, and be
          part of the community!
        </p>
      </div>
      <h2 className="home__desc-title">About Us</h2>
      <div className="home__panels-box">
        {panelImgArr.map((imgUrl, index) => (
          <div
            className={`home__panel ${index === activeIndex ? "active" : ""}`}
            key={index}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            <img
              className="home__panel-pic"
              src={imgUrl}
              alt={textContent[index].title}
            />
            <div className="home__panel-content">
              <h3 className="home__panel-title">{textContent[index].title}</h3>
              <p className="home__panel-desc">
                {textContent[index].description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="home__bottom-box">
        <div className="home__main-content">
          <ul className="home__surf-list">
            <h3 className="home__bottom-title">
              World's Top Surf Spots - Discover Them Here
            </h3>
            <li className="home__list-item">
              <p className="home__item-name">Pipeline, Oahu</p>
              <p className="home__item-desc">
                Known for its hollow barrels, Pipeline is one of the most iconic
                surf spots in the world. The powerful waves here are for
                experienced surfers, but watching pros in action is a must-do!
              </p>
            </li>
            <li className="home__list-item">
              <p className="home__item-name">Jeffrey’s Bay, South Africa</p>
              <p className="home__item-desc">
                Famous for its long, consistent right-hand point breaks,
                Jeffrey’s Bay offers a smooth, fast ride. Perfect for surfers
                looking to cruise through some of the longest waves out there.
              </p>
            </li>
            <li className="home__list-item">
              <p className="home__item-name">Uluwatu, Bali, Indonesia</p>
              <p className="home__item-desc">
                Uluwatu’s stunning reef breaks and crystal-clear waters are
                perfect for surfers of all levels. With breathtaking clifftop
                views, it’s as much about the experience as it is about the
                waves.
              </p>
            </li>
            <li className="home__list-item">
              <p className="home__item-name">Nazaré, Portugal</p>
              <p className="home__item-desc">
                Nazaré is home to some of the largest waves ever surfed. Massive
                swells that can reach over 100 feet make it a mecca for big-wave
                surfers. If you want to see surfing at its most extreme, Nazaré
                is the place.
              </p>
            </li>
            <li className="home__list-item">
              <p className="home__item-name">Cerritos, Mexico</p>
              <p className="home__item-desc">
                Cerritos is a hidden gem for surfers, offering consistent waves
                and a laid-back vibe. Known for its smooth point breaks and
                beginner-friendly surf, it’s also a great spot for experienced
                surfers looking for long rides. With warm waters and reliable
                swells year-round, Cerritos is a must-visit destination for any
                surfer.
              </p>
            </li>
          </ul>
          <div className="home__testimonials">
            <TestimonialsList />
          </div>
        </div>
      </div>
      <button className="home__cta-btn">Find Your Next Wave</button>
    </div>
  );
}

export default HomePage;

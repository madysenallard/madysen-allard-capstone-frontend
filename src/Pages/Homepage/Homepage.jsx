import connectPic from "../../Assets/Photos/connect-pic.jpg";
import conservationPic from "../../Assets/Photos/conservation-pic.jpg";
import homePic from "../../Assets/Photos/home-pic.jpg";
import mapPic from "../../Assets/Photos/map-pic.jpg";
import { useState } from "react";

function HomePage() {
  const [activeIndex, setActiveIndex] = useState(null);

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
    <>
      <h1>Breakpoint</h1>
      <h3>A Surfer's Guide</h3>
      <h2>About Us</h2>
      <div className="panels-container">
        {panelImgArr.map((imgUrl, index) => (
          <div
            className={`panel ${index === activeIndex ? "active" : ""}`}
            key={index}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            <img src={imgUrl} alt={textContent[index].title} />
            <div className="panel-content">
              <h3>{textContent[index].title}</h3>
              <p>{textContent[index].description}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h3>World's top surf spots - Discover them here!</h3>
        <ul>
          <li>
            <p>Pipeline, Oahu</p>
            <p>
              Known for its hollow barrels, Pipeline is one of the most iconic
              surf spots in the world. The powerful waves here are for
              experienced surfers, but watching pros in action is a must-do!
            </p>
          </li>
          <li>
            <p>Jeffrey’s Bay, South Africa</p>
            <p>
              Famous for its long, consistent right-hand point breaks, Jeffrey’s
              Bay offers a smooth, fast ride. Perfect for surfers looking to
              cruise through some of the longest waves out there.
            </p>
          </li>
          <li>
            <p>Uluwatu, Bali, Indonesia</p>
            <p>
              Uluwatu’s stunning reef breaks and crystal-clear waters are
              perfect for surfers of all levels. With breathtaking clifftop
              views, it’s as much about the experience as it is about the waves.
            </p>
          </li>
          <li>
            <p>Nazaré, Portugal</p>
            <p>
              Nazaré is home to some of the largest waves ever surfed. Massive
              swells that can reach over 100 feet make it a mecca for big-wave
              surfers. If you want to see surfing at its most extreme, Nazaré is
              the place.
            </p>
          </li>
          <li>
            <p>Hossegor, France</p>
            <p>
              Europe’s surfing capital, Hossegor, delivers fast beach breaks and
              heavy barrels. Whether you’re a beginner or a pro, this spot is
              known for consistent waves year-round.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default HomePage;

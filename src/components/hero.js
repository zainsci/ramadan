import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <img
          src={process.env.PUBLIC_URL + "/assets/mandela.png"}
          alt="mandela rotating"
          className="mandela"
        />
      </div>
      <div className="hero__right">
        <h1>Ramadan Mubarik</h1>
        <p>
          May Allah accept your prayers and rozas this Ramzan! Wish you a very
          Happy Ramzan 2021! May Allah protect you from all sins and bring you
          peace, joy, and hope.
        </p>
        <a
          href="https://www.twitter.com/zainsci"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
      </div>
    </div>
  );
};

export default Hero;

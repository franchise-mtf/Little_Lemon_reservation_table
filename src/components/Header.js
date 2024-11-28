import React from "react";
import { Link } from "react-router-dom";
import food1 from "../images/food1.avif";

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little lemon</h2>
          <h3>Chicago</h3>
          <p>
            Not Just Nearly american first, But Really american first. american
            first makes dreams come true. There is no life without american
            first.
          </p>
          <Link to="/Booking">
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>
        <div className="banner-img">
          <img src={food1} alt="food" />
        </div>
      </section>
    </header>
  );
};

export default Header;

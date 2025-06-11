import React from "react";
import { FC } from "react";
import "./Menu.css";

const Menu: FC = () => {
  return (
    <>
      <div id="Menu">
        <div className="MenuContainer">
          <p className="Left">ME Fine Arts</p>
          <div className="Socials">
            <a href="https://www.instagram.com/mefinearts17/" className="Right">
              <div className="Socials">
                <img src="../images/instagram-icon-white.png" alt="Instagram" />
                <p id="InstagramLabel">See More on Instagram</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;

import React from "react";
import { useTelegramLink } from "./SiteProvider"; // Import the hook
import "../styles/Hero.scss";

const Hero: React.FC = () => {
  const telegramLink = useTelegramLink(); // Retrieve the Telegram link from context

  const heroButton = () => {
    window.open(telegramLink, "_blank"); // Use the centralized Telegram link
  };

  return (
    <div className="hero">
      <div className="content-area">
        <p className="welcome-text">
        $BRICK: Just a brick...        </p>
        <button className="use-mochi-button" onClick={heroButton}>
          Join Brick
        </button>
      </div>
    </div>
  );
};

export default Hero;

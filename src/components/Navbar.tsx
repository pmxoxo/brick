import React from "react";
import { useSiteTitle, useTelegramLink, useTwitterLink } from "./SiteProvider";
import IconButton from "./IconButton";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import "../styles/Navbar.scss";

const Navbar: React.FC = () => {
  const { siteTitle } = useSiteTitle();
  const telegramLink = useTelegramLink();
  const twitterLink = useTwitterLink();

  const handleIconClick = (socialNetwork: string) => {
    switch (socialNetwork) {
      case "Twitter":
        window.open(twitterLink, "_blank");
        break;
      case "Telegram":
        window.open(telegramLink, "_blank");
        break;
      default:
        console.log(`${socialNetwork} icon clicked!`);
        break;
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">
          <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1>{siteTitle}</h1>
          </a>
        </div>
        <div className="social-icons">
          <IconButton
            className="social-icon"
            icon={<FaTwitter />}
            onClick={() => handleIconClick("Twitter")}
          />
          <IconButton
            className="social-icon"
            icon={<FaTelegramPlane />}
            onClick={() => handleIconClick("Telegram")}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

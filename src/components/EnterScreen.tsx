// EnterScreen.tsx
import React, { useState } from "react";
import { useSiteTitle } from "./SiteProvider"; // Import the hook
import AnimatedOverlay from './AnimatedOverlay';
import "../styles/EnterScreen.scss";

interface EnterScreenProps {
  onEnter: () => void; // Prop for the click handler
}

const EnterScreen: React.FC<EnterScreenProps> = ({ onEnter }) => {
  const [showOverlay, setShowOverlay] = useState(true);
  const { siteTitle } = useSiteTitle(); // Use the site title from context

  const handleEnter = () => {
    setShowOverlay(false);
    onEnter();
  };

  return (
    <div className="enter-screen">
      {showOverlay && <AnimatedOverlay />}
      <h1 className="enter-header">{siteTitle}</h1> {/* Use dynamic site title */}
      <button className="enter-button" onClick={handleEnter}>
        Enter
      </button>
    </div>
  );
};

export default EnterScreen;

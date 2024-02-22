import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import { useSiteTitle } from "./components/SiteProvider";
import Navbar from "./components/Navbar";
import FullScreenVideo from "./components/FullScreenVideo";
import AudioPlayer from "./components/AudioPlayer";
import EnterScreen from "./components/EnterScreen";
import Hero from "./components/Hero"

const App: React.FC = () => {
  const [enterScreenVisible, setEnterScreenVisible] = useState(true);
  const [playMedia, setPlayMedia] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { siteTitle } = useSiteTitle();

  useEffect(() => {
    document.title = siteTitle;
  }, [siteTitle]);

  const handleEnterClick = () => {
    setEnterScreenVisible(false);
    setPlayMedia(true);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="App">
            {enterScreenVisible && <EnterScreen onEnter={handleEnterClick} />}
            {playMedia && (
              <>
                <FullScreenVideo ref={videoRef} videoSrc="/bgvideo.mp4" />
                <AudioPlayer audioSrc="/siteaudio.mp3" play={playMedia} />
                <Hero />
              </>
            )}
            {/* Other components can be added as Route elements here */}
          </div>
        } />
        {/* Add more Route elements here as needed for other pages */}
      </Routes>
    </Router>
  );
};

export default App;

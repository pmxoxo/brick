// FullScreenVideo.tsx
import React, { forwardRef } from "react";
import "../styles/FullScreenVideo.scss";

interface FullScreenVideoProps {
  videoSrc: string;
}

const FullScreenVideo = forwardRef<HTMLVideoElement, FullScreenVideoProps>(
  ({ videoSrc }, ref) => (
    <video
      ref={ref}
      className="full-screen-video"
      src={videoSrc}
      autoPlay
      loop
      muted
      playsInline
    >
      Your browser does not support the video tag.
    </video>
  )
);

export default FullScreenVideo;

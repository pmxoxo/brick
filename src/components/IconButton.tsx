import React from "react";
import "../styles/IconButton.scss"; // Assuming you will have a separate CSS file for styling

interface IconButtonProps {
  icon: JSX.Element; // You can pass the icon as a JSX element (like from a library such as FontAwesome)
  onClick: () => void; // The action to be performed on button click
  className?: string; // Optional additional class names for styling
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  className,
}) => {
  return (
    <button className={`icon-button ${className}`} onClick={onClick}>
      {icon}
    </button>
  );
};

export default IconButton;

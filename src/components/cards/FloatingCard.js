import React from "react";

const FloatingCard = ({ icon, hoverText, hoverBg, hoverTextColor }) => {
  const cardStyle = {
    "--hover-bg": hoverBg,
    "--hover-text": hoverTextColor,
  };

  return (
    <div>
      <div className="card-float shadow-sm" style={cardStyle}>
        <div
          className="icon"
          style={{
            height: "60px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {icon}
        </div>
        <span className="hover-text">{hoverText}</span>
      </div>
    </div>
  );
};

export default FloatingCard;

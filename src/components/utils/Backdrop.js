import React, { useEffect, useState } from "react";

const Backdrop = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate a delay (you can replace this with actual asynchronous operations)
    const delay = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Adjust the delay time as needed

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(delay);
  }, []);

  return isVisible ? (
    <div className="backdrop d-flex gap-5">
      <button className="button" data-text="Awesome">
        <span className="actual-text">&nbsp;newsverse&nbsp;</span>
        <span aria-hidden="true" className="hover-text">
          &nbsp;newsverse&nbsp;
        </span>
      </button>
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  ) : null;
};

export default Backdrop;

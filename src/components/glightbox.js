import React, { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";

const Lightbox = () => {
  useEffect(() => {
    const lightbox = GLightbox({
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
    });

    return () => lightbox.destroy(); // Cleanup on unmount
  }, []);

  return (
    <div className="lightbox-container">
      <a href="assets/hero-bg.jpg" className="glightbox">
        <img src="assets/hero-bg.jpg" alt="Sample" width="300" />
      </a>
    </div>
  );
};

export default Lightbox;
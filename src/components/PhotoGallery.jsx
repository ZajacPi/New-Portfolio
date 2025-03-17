import React, { useState } from "react";
import "../css/PhotoGallery.css";

export default function PhotoGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openGallery = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      {/* Thumbnail - First 3 Images Stacked Like Cards */}
      <div className="gallery-thumbnail-container" onClick={() => openGallery(0)}>
        {images.slice(0, 3).map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Gallery Thumbnail"
            className={`gallery-thumbnail thumbnail-${index}`}
          />
        ))}
      </div>

      {/* Fullscreen Gallery */}
      {isOpen && (
        <div className="gallery-overlay" onClick={closeGallery}>
          <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-close" onClick={closeGallery}>✖</button>
            <button className="gallery-prev" onClick={prevImage}>◀</button>
            <img src={images[currentIndex]} alt="Gallery" className="gallery-image" />
            <button className="gallery-next" onClick={nextImage}>▶</button>
          </div>
        </div>
      )}
    </div>
  );
}

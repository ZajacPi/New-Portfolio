import React from 'react';
import '../css/ProjectDescription.css'; 

export default function Modal({ isOpen, onClose, children }){
  if (!isOpen) return null;

  return (
    <div className="ProjectDescription-overlay">
      <div className="ProjectDescription-content">
        {children}
      </div>
    <button className="ProjectDescription-close-button" onClick={onClose}> Cool, go back! </button>
    </div>
  );
};


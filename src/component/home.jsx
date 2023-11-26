// ContentSection.js

import React from 'react';
import '../Styles/home.css'

const ContentSection = () => {
  return (
    <div className="content-section">
      <div className="description-side">
        <h2>Data-powered solutions for industrial Excellence</h2>
        <button>Read More</button>
      </div>
      <div className="image-side">
        <img src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png" alt="Description" />
      </div>
    </div>
  );
};

export default ContentSection;

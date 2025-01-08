import React, { useEffect, useState } from 'react'
import './Portfolio.css'

export default function Portfolio() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="portfolio-container">
      <div className={`portfolio-content ${visible ? 'portfolio-visible' : ''}`}>
        <h1 className="portfolio-title">Coming Soon</h1>
        <div className="portfolio-subtitle">Portfolios will be available shortly!</div>
        <div className="portfolio-loader">
          <div className="portfolio-loader-bar"></div>
          <div className="portfolio-loader-bar"></div>
          <div className="portfolio-loader-bar"></div>
        </div>
      </div>
    </div>
  )
}
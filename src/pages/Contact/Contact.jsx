import React, { useEffect } from 'react';
import './Contact.css';

export default function Contact() {
  useEffect(() => {
    // Load the Calendly script dynamically
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div 
      className="calendly-inline-widget"
      data-url="https://calendly.com/maikopruett/30min?hide_gdpr_banner=1&background_color=384925&text_color=ffffff&primary_color=ffffff"
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
}
// Pricing.jsx
import React from 'react';
import './Pricing.css';

export default function Pricing() {
  return (
    <div className="pricing-section">
      <div className="pricing-header">
        <h1>Choose Your Plan</h1>
        <p>Select the perfect plan for your website needs</p>
      </div>
      
      <div className="pricing-container">
        <div className="pricing-card">
          <div className="pricing-plan-name">Standard</div>
          <div className="pricing-price">
            <span className="pricing-currency">$</span>
            <span className="pricing-amount">60</span>
          </div>
          <div className="pricing-period">One-time payment</div>
          
          <ul className="pricing-features">
            <li>
              <svg viewBox="0 0 24 24" className="pricing-check">
                <path d="M20 6L9 17L4 12"></path>
              </svg>
              Single Landing Page
            </li>
            <li>
              <svg viewBox="0 0 24 24" className="pricing-check">
                <path d="M20 6L9 17L4 12"></path>
              </svg>
              10 Free Edits
            </li>
            <li>
              <svg viewBox="0 0 24 24" className="pricing-check">
                <path d="M20 6L9 17L4 12"></path>
              </svg>
              Mobile Responsive
            </li>
            <li>
              <svg viewBox="0 0 24 24" className="pricing-check">
                <path d="M20 6L9 17L4 12"></path>
              </svg>
              Basic SEO Setup
            </li>
            <li>
              <svg viewBox="0 0 24 24" className="pricing-check">
                <path d="M20 6L9 17L4 12"></path>
              </svg>
              Contact Form
            </li>
          </ul>
          <button className="pricing-button">Get Started</button>
        </div>

        <div className="pricing-card pricing-popular">
          <div className="pricing-popular-tag">Most Popular</div>
          <div className="pricing-plan-name">Pro</div>
          <div className="pricing-price">
            <span className="pricing-currency">$</span>
            <span className="pricing-amount">100</span>
          </div>
          <div className="pricing-period">One-time payment</div>
          
          <ul className="pricing-features">
            <li>
              <svg viewBox="0 0 24 24" className="pricing-check">
                <path d="M20 6L9 17L4 12"></path>
              </svg>
              Up to 5 Pages
            </li>
            <li>
              <svg viewBox="0 0 24 24" className="pricing-check">
                <path d="M20 6L9 17L4 12"></path>
              </svg>
              20 Free Edits
            </li>
            <li>
              <svg viewBox="0 0 24 24" className="pricing-check">
                <path d="M20 6L9 17L4 12"></path>
              </svg>
              Custom Domain Setup
            </li>
            <li>
              <svg viewBox="0 0 24 24" className="pricing-check">
                <path d="M20 6L9 17L4 12"></path>
              </svg>
              Advanced SEO Package
            </li>
            <li>
              <svg viewBox="0 0 24 24" className="pricing-check">
                <path d="M20 6L9 17L4 12"></path>
              </svg>
              Social Media Integration
            </li>
            <li>
              <svg viewBox="0 0 24 24" className="pricing-check">
                <path d="M20 6L9 17L4 12"></path>
              </svg>
              Analytics Dashboard
            </li>
          </ul>
          <button className="pricing-button pricing-button-popular">Get Started</button>
        </div>

        <div className="pricing-card">
          <div className="pricing-plan-name">Pro+</div>
          <div className="pricing-price">
            <span className="pricing-currency">$</span>
            <span className="pricing-amount">180</span>
          </div>
          <div className="pricing-period">One-time payment</div>
          
          <ul className="pricing-features">
            <li>
              <svg viewBox="0 0 24 24" className="pricing-check">
                <path d="M20 6L9 17L4 12"></path>
              </svg>
              Unlimited Pages
            </li>
            <li>
              <svg viewBox="0 0 24 24" className="pricing-check">
                <path d="M20 6L9 17L4 12"></path>
              </svg>
              50 Free Edits
            </li>
            <li>
              <svg viewBox="0 0 24 24" className="pricing-check">
                <path d="M20 6L9 17L4 12"></path>
              </svg>
              Full E-commerce Setup
            </li>
            <li>
              <svg viewBox="0 0 24 24" className="pricing-check">
                <path d="M20 6L9 17L4 12"></path>
              </svg>
              User Authentication
            </li>
            <li>
              <svg viewBox="0 0 24 24" className="pricing-check">
                <path d="M20 6L9 17L4 12"></path>
              </svg>
              Email Service Integration
            </li>
            <li>
              <svg viewBox="0 0 24 24" className="pricing-check">
                <path d="M20 6L9 17L4 12"></path>
              </svg>
              Priority Support
            </li>
          </ul>
          <button className="pricing-button">Get Started</button>
        </div>
      </div>
    </div>
  );
}
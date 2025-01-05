import React from 'react'
import './Main.css'

export default function Main() {
  return (
    <div className='main-container'>
      <div className='call-to-action-header'>
        <p id='new'>New</p>
        <p>Limited users get a free site</p>
        <img src="/right_arrow.svg" alt="" />
      </div>
      <h1 id="main-header">Forget Monthly Hosting Fees! <br /> Ditch Costs & Go SNAPP</h1>
      <p id='main-subheader'>Snapp builds beautiful websites without the recurring costs—just pay once and own it!</p>
      <button id='call-to-action-btn'>Get started free</button>
      
      <div className='main-pricing-container'>
        <div className='main-pricing'>
          <h1>Competitors Pricing</h1>
          <h2>Yearly Operating Cost</h2>
          <div className='main-pricing-info'>
            <h3>Wix<span>$183.6</span></h3>
            <h3>Squarespace<span>$172.8</span></h3>
            <h3>Shopify<span>$348</span></h3>
            <h3>Hostinger<span>$143.88</span></h3>
            <h3>GoDaddy<span>$143.88</span></h3>
          </div>
        </div>
        <div className='main-pricing' id='main-snapp-pricing'>
          <h1>SNAPP Pricing</h1>
          <h2>Yearly Operating Cost</h2>
          <div className='main-snapp-pricing'>
            <h1>$12<span>/year</span></h1>
            <p id='main-pricing-context'>Domain registration cost only</p>
            <div className='main-snap-info'><img src="/check.svg" alt="" /><p>One-time setup fee of $60</p></div>
            <div className='main-snap-info'><img src="/check.svg" alt="" /><p>No monthly fees</p></div>
            <div className='main-snap-info'><img src="/check.svg" alt="" /><p>Only pay for domain renewal</p></div>
          </div>
          <div className='main-snapp-pricing-call-to-action'>
            <p><b>Save up to $336/year</b> compared to competitors</p>
            <button id='main-snapp-pricing-btn'>Save Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

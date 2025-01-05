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
        <div className='main-pricing'>
          <h1>SNAPP Pricing</h1>
          <h2>Yearly Operating Cost</h2>
          <p>Just a one time initial fee averaging only $60!</p>
          <h3>SNAPP<span>$12</span></h3>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import './Main.css'
import PricingCard from '../../components/pricing-cards/PricingCard'
import { NavLink } from 'react-router-dom'

export default function Main() {
  return (
    <div className='main-container'>
      <NavLink to={'/contact'}>
        <div className='call-to-action-header'>
          <p id='new'>New</p>
          <p>Limited users get a free site</p>
          <img src="/right_arrow.svg" alt="" />
        </div>
      </NavLink>
      <h1 id="main-header">Forget Monthly Hosting Fees! <br /> Ditch Costs & Go 🫰</h1>
      <p id='main-subheader'>Premium web design that's truly yours—no monthly fees, no strings attached. Period.</p>
      <NavLink to={'/contact'}>
        <button id='call-to-action-btn'>Get started free</button>
      </NavLink>
      <PricingCard />
    </div>
  )
}

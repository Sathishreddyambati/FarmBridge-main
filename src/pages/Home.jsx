import React from 'react'
export default function Home(){
  return (
    <div className="card">
      <h2>Welcome to FarmBridge AI (Demo)</h2>
      <p>This web demo includes:</p>
      <ul>
        <li>Farmer listing & buyer matching (mock AI)</li>
        <li>Price prediction (mock)</li>
        <li>Transport booking simulation</li>
        <li>Simple UI to test core flows</li>
      </ul>
      <p>Use the nav to go to Farmer, Listings or Transport pages.</p>
    </div>
  )
}
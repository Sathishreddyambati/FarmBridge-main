import React, {useState} from 'react'
import { postListing, predictPrice } from '../mockApi'

export default function Farmer(){
  const [crop, setCrop] = useState('Banana')
  const [qty, setQty] = useState(100)
  const [location, setLocation] = useState('Mundlamuru')
  const [result, setResult] = useState(null)

  function submit(e){
    e.preventDefault()
    const pred = predictPrice(crop, qty)
    const item = postListing({crop, qty: Number(qty), unit:'kg', location, quality:'A'})
    setResult({ item, pred })
  }

  return (
    <div>
      <div className="card">
        <h3>Post a Listing (Farmer)</h3>
        <form onSubmit={submit}>
          <label>Crop</label>
          <select value={crop} onChange={e=>setCrop(e.target.value)} className="input">
            <option>Banana</option>
            <option>Tomato</option>
            <option>Potato</option>
          </select>
          <label>Quantity (kg)</label>
          <input className="input" value={qty} onChange={e=>setQty(e.target.value)} />
          <label>Location</label>
          <input className="input" value={location} onChange={e=>setLocation(e.target.value)} />
          <button className="btn">Post Listing & Predict Price</button>
        </form>
      </div>
      {result && (
        <div className="card">
          <h4>Listing posted</h4>
          <p>Predicted market price: ₹{result.pred} per kg (mock)</p>
          <pre>{JSON.stringify(result.item, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}
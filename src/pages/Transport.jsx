import React, {useState} from 'react'

export default function Transport(){
  const [from,setFrom]=useState('Mundlamuru')
  const [to,setTo]=useState('NearbyTown')
  const [vehicle,setVehicle]=useState('Tractor')
  const [quote,setQuote]=useState(null)

  function getQuote(e){
    e.preventDefault()
    const base = 300
    const dist = from===to?1:(to.includes('Nearby')?2:4)
    const price = base * dist * (vehicle==='Tractor'?1:1.2)
    setQuote({price, eta: 30*dist})
  }

  return (
    <div>
      <div className="card">
        <h3>Transport Booking (Mock)</h3>
        <form onSubmit={getQuote}>
          <label>From</label>
          <input className="input" value={from} onChange={e=>setFrom(e.target.value)} />
          <label>To</label>
          <input className="input" value={to} onChange={e=>setTo(e.target.value)} />
          <label>Vehicle</label>
          <select className="input" value={vehicle} onChange={e=>setVehicle(e.target.value)}>
            <option>Tractor</option>
            <option>Mini Van</option>
            <option>Auto</option>
          </select>
          <button className="btn">Get Quote</button>
        </form>
      </div>
      {quote && (
        <div className="card">
          <h4>Quote</h4>
          <p>Price: ₹{quote.price}</p>
          <p>ETA: {quote.eta} mins</p>
          <p>To "book" transport, copy details and contact local provider (mock).</p>
        </div>
      )}
    </div>
  )
}
import React, {useState, useEffect} from 'react'
import { getListings, matchBuyers } from '../mockApi'

export default function Listings(){
  const [list, setList] = useState([])
  const [selected, setSelected] = useState(null)
  useEffect(()=>{ setList(getListings()) }, [])
  function showMatches(item){
    setSelected({...item, matches: matchBuyers(item)})
  }
  return (
    <div>
      <div className="card">
        <h3>Live Listings</h3>
        {list.map(it=>(
          <div key={it.id} style={{padding:8,borderBottom:'1px solid #eee'}}>
            <strong>{it.crop}</strong> - {it.qty}{it.unit} - {it.location}
            <button style={{float:'right'}} className="btn" onClick={()=>showMatches(it)}>Find Buyers</button>
          </div>
        ))}
      </div>
      {selected && (
        <div className="card">
          <h4>Matches for {selected.crop} ({selected.qty}{selected.unit})</h4>
          {selected.matches.map(m=>(
            <div key={m.id} style={{padding:8,borderBottom:'1px solid #ddd'}}>
              <strong>{m.name}</strong> ({m.type}) — Offer: ₹{m.priceOffer} — Score: {m.score}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
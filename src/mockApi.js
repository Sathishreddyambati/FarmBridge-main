// Mock API + simple AI functions for price prediction, buyer matching, and routing
const sampleListings = [
  { id:1, crop:'Banana', qty:200, unit:'kg', location:'Mundlamuru', quality:'A', postedAt: Date.now()-1000*60*60 },
  { id:2, crop:'Tomato', qty:150, unit:'kg', location:'Mundlamuru', quality:'B', postedAt: Date.now()-1000*60*120 },
  { id:3, crop:'Banana', qty:50, unit:'kg', location:'NearbyTown', quality:'A', postedAt: Date.now()-1000*60*30 }
];

const buyers = [
  { id: 1, name: 'Hotel Sunrise', type:'hotel', location:'NearbyTown', demand:{'Banana':50}},
  { id: 2, name: 'Fruit Shop Reddy', type:'shop', location:'Mundlamuru', demand:{'Banana':200,'Tomato':100}},
  { id: 3, name: 'Apartment Block A', type:'residential', location:'Mundlamuru', demand:{'Banana':30}}
];

// Simple distance score (mock)
function distanceScore(loc1, loc2){
  if(loc1===loc2) return 0;
  if(loc1.includes('Nearby')) return 1;
  return 2;
}

// Simple AI price predictor - uses historic average + seasonality (mock)
function predictPrice(crop, qty){
  if(crop.toLowerCase().includes('banana')) {
    const price = 22 + Math.max(0, (200 - qty)/100)*3;
    return parseFloat(price.toFixed(2));
  }
  if(crop.toLowerCase().includes('tomato')) {
    const price = 18 + Math.max(0, (150 - qty)/100)*2;
    return parseFloat(price.toFixed(2));
  }
  return 10;
}

// match buyers by crop + location + demand
function matchBuyers(listing){
  const matches = buyers.map(b=>{
    const demand = b.demand[listing.crop] || 0;
    const score = (demand>=listing.qty ? 0 : 5) + distanceScore(listing.location, b.location);
    const priceOffer = predictPrice(listing.crop, listing.qty) - score*0.5;
    return {...b, score, priceOffer: parseFloat(priceOffer.toFixed(2))};
  }).sort((a,b)=>a.score - b.score);
  return matches;
}

function getListings(){
  return sampleListings.slice().sort((a,b)=>b.postedAt - a.postedAt);
}

function postListing(listing){
  const id = Math.max(...sampleListings.map(x=>x.id))+1;
  const item = {...listing, id, postedAt: Date.now()};
  sampleListings.push(item);
  return item;
}

export { getListings, postListing, matchBuyers, predictPrice };
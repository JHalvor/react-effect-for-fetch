import { useState, useEffect } from "react";

import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {
  const url = "https://api.adviceslip.com/advice";
  const [adviceData, setAdviceData] = useState({id: 0, advice: ""});
  const [favouriteData, setFavouriteData] = useState([]);

  const fetchAdvice = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setAdviceData(jsonData.slip);
  };

  useEffect(() => {
    fetchAdvice()
  }, []);

  const handleNewAdvice = () => {
    fetchAdvice()
  }

  const addToFavourties = () => {
    if (!favouriteData.includes(adviceData.advice)) {
      setFavouriteData(() => [ ...favouriteData, adviceData.advice ])
    }
  }

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip"></section>
      <h3>Some Advice</h3>
      <AdviceSlip adviceSlip={adviceData}/>
      <button onClick={handleNewAdvice}>Get More Advice</button>
      <button onClick={addToFavourties}>Save to Favourties</button>
      <section className="favourtite-slips-list">
      <h3>Favourite Advice Slips</h3>
      <FavouriteSlipsList favouriteSlips={favouriteData}/>
      </section>
    </section>
  )
}

export default AdviceSection

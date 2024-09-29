import { useState, useEffect } from "react";

import AdviceSlip from "./components/AdviceSlip"
import FavouriteSlipsList from "./components/FavouriteSlipsList"

function AdviceSection() {
  const url = "https://api.adviceslip.com/advice";
  const [adviceData, setAdviceData] = useState({});
  const [favouriteData, setFavouriteData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      console.log(jsonData)
      setAdviceData(jsonData);
    };
    fetchData();
  }, {});
  console.log(adviceData)
  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip"></section>
      <h3>Some Advice</h3>
      <AdviceSlip adviceSlip={adviceData.slip}/>
      <button>Get More Advice</button>
      <button>Save to Favourties</button>
      <section className="favourtite-slips-list">
      <h3>Favourite Advice Slips</h3>
      <FavouriteSlipsList favouriteSlips={favouriteData}/>
      </section>
    </section>
  )
}

export default AdviceSection

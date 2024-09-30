import { useState, useEffect } from "react";

import ArtList from "./components/ArtList"

export default function ArtsSection() {
  const url = "https://boolean-uk-api-server.fly.dev/art";
  const [artsData, setArtsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setArtsData(jsonData);
    };
    fetchData();
  }, []);
  
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artList={artsData}/>
      </div>
    </section>
  )
}
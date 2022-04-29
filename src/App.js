import React, { useEffect, useState } from "react";
import Card from "./Components/Card";
import axios from "axios";

function App() {
  // coordinates for Houston, TX
  const [locationData] = useState({
    latitude: "29.7589382",
    longitude: "-95.3676974",
  });

  useEffect(() => {
    try {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/forecast?lat=${locationData.latitude}&lon=${locationData.longitude}&appid=42d98d76405f5b8038f2ad71187af430`
        )
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="App">
        <div className="container">
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;

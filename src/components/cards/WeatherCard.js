import React, { useEffect, useState } from "react";

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/india?unitGroup=metric&key=52YMDUARVWVLSHYN297KL5MA3&contentType=json`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, []);

  function getIcon(condition) {
    if (condition === "partly-cloudy-day") {
      return "https://i.ibb.co/PZQXH8V/27.png";
    } else if (condition === "partly-cloudy-night") {
      return "https://i.ibb.co/Kzkk59k/15.png";
    } else if (condition === "rain") {
      return "https://i.ibb.co/kBd2NTS/39.png";
    } else if (condition === "clear-day") {
      return "https://i.ibb.co/rb4rrJL/26.png";
    } else if (condition === "clear-night") {
      return "https://i.ibb.co/1nxNGHL/10.png";
    } else {
      return "https://i.ibb.co/rb4rrJL/26.png";
    }
  }

  return (
    <div className="card d-md-block mb-2 mb-md-0" style={{ minHeight: "15vh" }}>
      {weatherData && (
        <div className="card m-3 px-2">
          <div className="d-flex flex-wrap align-items-center ">
            <div className=" p-1">
              <img
                src={getIcon(weatherData.currentConditions.icon)}
                width={60}
                alt="icon"
              />
            </div>
            <div className="mx-3 my-1 ">
              <div className="fs-4">
                <span className="fs-2 fw-bold text-dark ">
                  {weatherData.currentConditions.temp}
                </span>{" "}
                °C
              </div>
              <div
                className="card-subtitle fs-6"
                style={{ fontFamily: "poppins" }}
              >
                {weatherData.currentConditions.conditions}
                {/* {weatherData.resolvedAddress} */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;

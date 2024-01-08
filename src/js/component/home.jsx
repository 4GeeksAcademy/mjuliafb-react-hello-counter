import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = (props) => {
  const updateCounter = (counterRef) => {
    return () => {
      counterRef.current = (counterRef.current + 1) % 10000000;
      updateDOM();
    };
  };

  const updateDOM = () => {
    const contadorFormateado = String(counterRef.current).padStart(7, "0");
    const digitElements = document.querySelectorAll(".digit");

    digitElements.forEach((digitElement, index) => {
      const digit = parseInt(contadorFormateado[index], 10) || 0;
      digitElement.textContent = digit;
    });
  };

  const counterRef = { current: 0 };

  setInterval(updateCounter(counterRef), 1000);

  return (
    <div className="counter d-flex justify-content-center">
      <div className="clock">
        <FontAwesomeIcon icon="fa-regular fa-clock" />
      </div>
      {[...Array(7)].map((_, index) => (
        <div key={index} className={`digit digit${index + 1}`}>
          0
        </div>
      ))}
    </div>
  );
};

export default Home;



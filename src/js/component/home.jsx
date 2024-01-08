import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  let counter = 0;
  let intervalId = null;

  const updateDigits = () => {
    const digitElements = document.querySelectorAll(".digit");
    const counterString = counter.toString().padStart(7, "0");

    digitElements.forEach((digitElement, index) => {
      digitElement.textContent = counterString[index];
    });
  };

  const startInterval = () => {
    intervalId = setInterval(() => {
      counter = (counter + 1) % 10000000;
      updateDigits();
    }, 1000);
  };

  const stopInterval = () => {
    clearInterval(intervalId);
    intervalId = null;
  };

  const restartInterval = () => {
    stopInterval();
    startInterval();
  };

  const clearCounter = () => {
    stopInterval();
    counter = 0;
    startInterval();
  };

  // Iniciar el intervalo cuando el componente se monta
  startInterval();

  // Limpiar el intervalo al desmontar el componente
  return (
    <div className="bigDiv text-center">
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
      <button className="stopButton m-3" onClick={stopInterval}>
        Pausar
      </button>
      <button className="restartButton m-3" onClick={restartInterval}>
        Seguir
      </button>
      <button className="clearButton m-3" onClick={clearCounter}>
        Reiniciar
      </button>
    </div>
  );
};

export default Home;
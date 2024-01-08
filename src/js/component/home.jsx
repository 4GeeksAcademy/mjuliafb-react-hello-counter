import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  let counter = 0;
  let intervalId = null;

  //Cambio numeros en contador
  const updateDigits = () => {
    const digitElements = document.querySelectorAll(".digit");
    const counterString = counter.toString().padStart(7, "0");

    digitElements.forEach((digitElement, index) => {
      digitElement.textContent = counterString[index];
    });
  };

  //Cambio estado de IntervalID y limitación de contador
  const startInterval = () => {
    intervalId = setInterval(() => {
      counter = (counter + 1) % 10000000;
      updateDigits();
    }, 1000);
  };

  // Boton "Pausar"
  const stopInterval = () => {
    clearInterval(intervalId);
    intervalId = null;
  };
// Boton "Seguir"
  const restartInterval = () => {
    stopInterval();
    startInterval();
  };
// Boton "Reiniciar"
  const clearCounter = () => {
    stopInterval();
    counter = 0;
    startInterval();
  };

  // Iniciar el intervalo
  startInterval();

  return (
    <div className="bigDiv text-center">
      <div className="counter d-flex justify-content-center">
        <div className="clock">
          <FontAwesomeIcon icon="fa-regular fa-clock" />
        </div> 
        {/* Creación de array */}
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
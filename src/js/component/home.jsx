import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  let isRunning = true; 
  let intervalId; 

  const updateCounter = (counterRef) => {
    return () => {
      if (!isRunning) return; 
      counterRef.current = (counterRef.current + 1) % 10000000;
      updateDOM();
    };
  };

  const updateDOM = () => {
    const contadorFormateado = String(counterRef.current).padStart(7, "0");
    const digitElements = document.querySelectorAll(".digit");

    digitElements.forEach((digitElement, index) => {
      const digit = parseInt(contadorFormateado[index]) || 0;
      digitElement.textContent = digit;
    });
  };

  const counterRef = { current: 0 };

  // Iniciar el intervalo
  const startInterval = () => {
    intervalId = setInterval(updateCounter(counterRef), 1000);
  };


  startInterval();

  // Botón "Detener"
  const handleStopClick = () => {
    isRunning = false;
    clearInterval(intervalId); 
  };

  // Botón "Reiniciar"
  const handleRestartClick = () => {
    isRunning = true;
    clearInterval(intervalId);
    startInterval(); 
  };

  // Botón "Limpiar"
  const handleClearClick = () => {
    isRunning = true;
    counterRef.current = 0;
    clearInterval(intervalId); 
    startInterval(); 
    updateDOM(); 
  };

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
      <button className="stopButton m-3" onClick={handleStopClick}>Pausar</button>
      <button className="restartButton m-3" onClick={handleRestartClick}>Seguir</button>
      <button className="clearButton m-3" onClick={handleClearClick}>Reiniciar</button>
    </div>
  );
};

export default Home;






//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock as farFaClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types"


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
const SimpleCounter = (props) => {

  return (
    <div className="bigDiv text-center">
      <div className="counter d-flex justify-content-center">
        <div className="clock">
          <FontAwesomeIcon icon="fa-regular fa-clock" />
        </div>
        <div className="sixth">{props.digitSixth}</div>
        <div className="fifth">{props.digitFifth}</div>
        <div className="fourth">{props.digitFourth}</div>
        <div className="three">{props.digitThree}</div>
        <div className="two">{props.digitTwo}</div>
        <div className="one">{props.digitOne} </div>
      </div>
    </div>
  );
};

SimpleCounter.proptypes = {
  digitOne: PropTypes.number,
  digitTwo: PropTypes.number,
  digitThree: PropTypes.number,
  digitFourth: PropTypes.number,
  digitFifth: PropTypes.number,
  digitSixth: PropTypes.number,
}
//import icons
library.add(farFaClock)
//render your react application

let counter = 0;
setInterval(function () {
  const sixth = Math.floor(counter / 100000) % 10;
  const fifth = Math.floor(counter / 10000) % 10;
  const fourth = Math.floor(counter / 1000) % 10;
  const three = Math.floor(counter / 100) % 10;
  const two = Math.floor(counter / 10) % 10;
  const one = Math.floor(counter / 1) % 10;
  counter++;

  ReactDOM.render(<SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFourth={fourth} digitFifth={fifth} digitSixth={sixth} />, document.querySelector("#app"));
}, 1000);
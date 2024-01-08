//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock as farFaClock } from '@fortawesome/free-regular-svg-icons';


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
//import icons
library.add(farFaClock )
//render your react application

ReactDOM.render(<Home />, document.querySelector("#app"));

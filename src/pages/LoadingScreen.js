import React from 'react';
import './LoadingScreen.css'; 
import Loader from "../assets/Loader.gif";
const LoadingScreen = () => {
    return (
      <div className="loading-screen">
        {/* <div className="loading-spinner"></div> */}
        <img src={Loader}/>
      </div>
    );
};

export default LoadingScreen;
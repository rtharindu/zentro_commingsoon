import React, { Component } from "react";
import "./Preloader.css";
import logo from "../component/yyy.png";

class Preloader extends Component {
  preloader() {
    let preload = document.querySelector(".preloader");
    setTimeout(() => {
      preload.style.opacity = "0";
      setTimeout(() => {
        preload.style.display = "none";
      }, 1000);
    }, 3000);
  }

  componentDidMount() {
    this.preloader();
  }

  render() {
    return (
      <div className="preloader">
        <div className="logo-wrap">
          <img src={logo} alt="Custom Logo" className="logo spinning" />
        </div>
      </div>
    );
  }
}

export default Preloader;

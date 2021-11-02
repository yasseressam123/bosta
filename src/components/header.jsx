import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import Translate from "./../translate";
import {Link , BrowserRouter} from "react-router-dom";

function Navbar() {
  const [strings, setStrings] = useState(Translate());
  console.log("str", strings);
  const _onSetLanguageToItalian = () => {
    console.log("gg");
    if (strings.code === "en") {
      localStorage.setItem("lang", "ar");
      setStrings(Translate());
    } else {
      localStorage.setItem("lang", "en");
      setStrings(Translate());
    }
    window.location.reload(false);
  };
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <img
            className="navbar-brand me-5"
            src="https://bosta.co/wp-content/uploads/2019/08/bosta_logo_en_red.svg"
            alt="bostaLogo"
            style={{width: 130+'px'}}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-5 mb-2 mb-lg-0">
              <li className="nav-item">
              <BrowserRouter>
                <Link to={{pathname: `/`}} className="nav-link active" aria-current="page">
                  {strings.header.Home}
                </Link>
                </BrowserRouter>
              </li>
              <li className="nav-item">
                <a className="nav-link">{strings.header.Pricing}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">{strings.header.ContactSales}</a>
              </li>
            </ul>
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {strings.header.TrackingShipment}
                </a>
                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <div>
                      <h3>{strings.header.Track.Tracking}</h3>
                      <p>{strings.header.Track.TrackNo}</p>
                      <div className="d-flex">
                        <input type="text" />
                        <FontAwesomeIcon icon={faSearch} />
                      </div>
                    </div>
                  </li>
                </ul> */}
              </li>
              <li className="nav-item">
                <a className="nav-link">{strings.header.SignIn}</a>
              </li>
              <li className="nav-item">
                <p onClick={_onSetLanguageToItalian}>{strings.header.lang}</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

import React, { useState } from "react";
import "./header.css";
import useTrack from "../../../hooks/useTrack";
import { Link } from "react-router-dom";

const Header = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [boolData, setBoolData] = useState(false);

  const { track } = useTrack();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await track(trackingNumber);
    setBoolData(true);
    //console.log(data.data.trackings[0].events);
  }

  function handleChange(e) {
    setTrackingNumber(e.target.value);
  }
  return (
    <div className="header lateed-light">
      <h3>
        <p>Track packages from Amazon , Ali Baba,Flipkart</p>
        and 300+ more Couriors
      </h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={trackingNumber}
            className="header-input"
            onChange={handleChange}
          />
          <input type="submit" value="Track" className="header-btn" />
        </form>
      </div>
      <div>
        {boolData && (
          <button className="see-report">
            <Link
              to={"/dashboard"}
              style={{ textDecoration: "none", color: "white" }}
            >
              See Report
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
// "9405511206210614641491"

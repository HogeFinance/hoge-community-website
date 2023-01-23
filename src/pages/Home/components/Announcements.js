import React from "react";
import useScript from "react-script-hook";

import "./CoinTicker.scss";

function Announcements() {

  useScript({src: "https://crypto.com/price/static/widget/index.js", checkForExisting: true,});

  return (
    <div className="widget-container">
      <div id="crypto-widget-CoinTicker" data-transparent="true" data-theme="dark" style={{maxWidth: "680px !important"}} data-coins="hoge-finance" />
    </div>
  );
}

export default Announcements;

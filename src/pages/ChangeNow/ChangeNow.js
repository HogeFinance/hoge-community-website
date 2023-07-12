import React from "react";
import "./now.scss";


export const ChangeNow = () => {
  return (
  <div className="iframe-container">
    <iframe id='iframe-widget' title="ChangeNow" className="iframe" src='https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=true&amount=1&amountFiat=1500&backgroundColor=2B2B35&darkMode=true&from=eth&fromFiat=eur&horizontal=false&isFiat&lang=en-US&link_id=291aead12db5b3&locales=true&logo=true&primaryColor=c2ad10&to=hoge&toFiat=eth&toTheMoon=true' ></iframe>
    <script defer type='text/javascript' src='https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js'></script>
  </div> );
};

export default ChangeNow;
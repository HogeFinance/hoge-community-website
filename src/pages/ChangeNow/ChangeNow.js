import Top from "../../common/components/Top/Top";
import useImportScript from "../../hooks/useImportScript";

export const ChangeNow = () => {

  useImportScript('https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js');

  return (
    <div className="page change" id="change">
      <Top
        title="Change Now"
      />
      <div>
        <iframe
          title='changenow'
          id='iframe-widget'
          src='https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=true&amount=0.01&amountFiat=1500&backgroundColor=1b1b1b&darkMode=true&from=btc&fromFiat=eur&horizontal=false&isFiat&lang=en-US&link_id=291aead12db5b3&locales=true&logo=true&primaryColor=998d32&to=hoge&toFiat=eth&toTheMoon=true'
          width={"100%"} height={356} style={{border: "none"}}
        ></iframe>

      </div>
    </div>
  )
}

export default ChangeNow;

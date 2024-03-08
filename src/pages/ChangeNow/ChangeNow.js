import Top from "../../common/components/Top/Top";
import useImportScript from "../../hooks/useImportScript";
import './ChangeNow.scss'
export const ChangeNow = () => {

  useImportScript('https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js');

  return (
    <div className="page change" id="change">
      <Top
        title="Change Now"
      />
      <div className="changenow">
      <iframe
        title="Change Now"
        id='iframe-widget'
        src='https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=true&amount=0.3&amountFiat=1500&backgroundColor=2B2B35&darkMode=true&from=eth&fromFiat=usd&horizontal=false&isFiat&lang=en-US&link_id=291aead12db5b3&locales=true&logo=true&primaryColor=998d32&to=hoge&toFiat=hoge&toTheMoon=true'
        style={{height: '356px', width: '100vw', border: 'none'}}
      >
      </iframe>
      <script
        defer type='text/javascript'
        src='https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js'>
      </script>

      </div>
    </div>
  )
}

export default ChangeNow;

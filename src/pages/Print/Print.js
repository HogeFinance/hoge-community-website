import Top from "../../common/components/Top/Top";
import PrintCollection from "./components/PrintCollection/PrintCollection";
import useImportScript from "../../hooks/useImportScript";

import { useLayoutEffect } from 'react';

//dev
// const PARTNER_ID = "3964109273"
// const API_KEY = "AIzaSyC80BSaj3NVR2e8RAHtxNNTmOOd_0OZTvU"
// const INFINITE_SCRIPT = "https://api.sandbox.infiniteobjects.com/print-button";

//prod
const PARTNER_ID = "6906769176"
const API_KEY = "AIzaSyD6hfkb0tJwxJL5ypy9-06vPUaNJzQfUgs"
const INFINITE_SCRIPT = "https://api.infiniteobjects.com/print-button";

  export const Print = () => {

  useImportScript(`${INFINITE_SCRIPT}/${PARTNER_ID}/client.js`);

  useLayoutEffect(() => {
    window.ioPrintButton = window.ioPrintButton || [];
    window.ioPrintButton.push(["apiKey", API_KEY]);
  }, []);

  return (
    <div className="page print" id="print">
      <Top
        title="Hoge Video Prints"
        text="The Hoge mission is to provide the community with opportunities, education, tools & resources to develop skill sets and take Defi to global adoption."
      />
      <PrintCollection />
    </div>
  )
}

export default Print;

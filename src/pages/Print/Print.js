import Top from "../../common/components/Top/Top";
import PrintCollection from "./components/PrintCollection/PrintCollection";
import { PostScribe } from 'react-postscribe';
import useImportScript from "../../hooks/useImportScript";

import { useLayoutEffect } from 'react';

// Partner ID: 3964109273
// API Key: AIzaSyC80BSaj3NVR2e8RAHtxNNTmOOd_0OZTvU
// Webhook shared secret: world.book.remove.tissue.finish.flag.eagle.giant.enlist.weather

const PARTNER_ID = "3964109273"

export const Print = () => {

  useImportScript('https://api.sandbox.infiniteobjects.com/print-button/3964109273/client.js');

  useLayoutEffect(() => {
    window.ioPrintButton = window.ioPrintButton || [];
    window.ioPrintButton.push(["apiKey", "AIzaSyC80BSaj3NVR2e8RAHtxNNTmOOd_0OZTvU"]);
  }, []);

  return (
    <div className="page print" id="print">
      <Top
        title="Hoge Video Prints"
        text="The Hoge mission is to provide the community with opportunities, education, tools & resources to develop skill sets and take Defi to global adoption."
      />
      <PrintCollection/>
    </div>
  )
}

export default Print;

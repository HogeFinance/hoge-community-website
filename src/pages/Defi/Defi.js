import Addresses from "../../common/components/Addresses/Addresses";
import MusicCollection from "../../common/components/MusicCollection/MusicCollection";
import NFTCollection from "../../common/components/NFTCollection/NFTCollection";
import Media from "../../common/components/Media/Media";
import Top from "../../common/components/Top/Top";
import { reportUrl } from "common/links";

export const Defi = () => (
  <div className="page defi">
    <Top
      title="Hoge Defi"
      text="The Hoge mission is to provide the community with opportunities, education, tools & resources to develop skill sets and take Defi to global adoption."
      link={ reportUrl }
      linkTitle="Visit HOGE.REPORT"
    />
    <Addresses />
  </div>
)

export default Defi;

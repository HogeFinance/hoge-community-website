//import CarouselSlider from "../../common/components/Carousel/CarouselSlider";
import Ecosystem from "../../common/components/Ecosystem/Ecosystem";
import MusicCollection from "../../common/components/MusicCollection/MusicCollection";
import NFTCollection from "../../common/components/NFTCollection/NFTCollection";
import Media from "../../common/components/Media/Media";

export const About = () => (
  <div className="page home">
    <Ecosystem />
    <MusicCollection />
    <NFTCollection />
    <Media />
  </div>
)

export default About;
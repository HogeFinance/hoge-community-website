import Defi from "./components/Defi/Defi";
import HogeProject from "../../common/components/HogeProject/HogeProject";
import CarouselSlider from "../../common/components/Carousel/CarouselSlider";
import Music from "../../common/components/Music/Music";

//import Player from "../../common/components/Player/Player";

export const Home = () => (
  <div className="page home">
    <Defi />
    <HogeProject />
    <Music />
    <CarouselSlider />
    {/*<Player url={"https://vimeo.com/243556536"} />*/}
  </div>
)

export default Home;
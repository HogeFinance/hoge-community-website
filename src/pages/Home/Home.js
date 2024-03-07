import Defi from "./components/Defi/Defi";
import HogeProject from "../../common/components/HogeProject/HogeProject";
import CarouselSlider from "../../common/components/Carousel/CarouselSlider";
import Music from "../../common/components/Music/Music";
import Roadmap from "../../common/components/Roadmap/Roadmap";
import Player from "../../common/components/Player/Player";

export const Home = () => (
  <div className="page home">
    <Defi />
    <Player url={"/videos/game_1.mp4"} showControls loop />
    <HogeProject />
    <Roadmap />
    <Music />
    <CarouselSlider />
    {/*<Player url={"https://vimeo.com/243556536"} />*/}
  </div>
)

export default Home;

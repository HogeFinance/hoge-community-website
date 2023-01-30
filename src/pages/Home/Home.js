import React from "react";

import HogeProject from "../../common/components/HogeProject/HogeProject";
import CarouselSlider from "../../common/components/Carousel/CarouselSlider";
import Ecosystem from "../../common/components/Ecosystem/Ecosystem";
import MusicCollection from "../../common/components/MusicCollection/MusicCollection";
import NFTCollection from "../../common/components/NFTCollection/NFTCollection";
import Media from "../../common/components/Media/Media";
import Player from "../../common/components/Player/Player";

export const Home = () => (
  <div className="page home">
    <HogeProject />
    <CarouselSlider />
    <Ecosystem />
    <MusicCollection />
    <NFTCollection />
    <Media />
    {/*<Player url={"https://vimeo.com/243556536"} />*/}
  </div>
)

export default Home;
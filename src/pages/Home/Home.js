import React from "react";

import CoinTicker from "./components/CoinTicker";
import Separator from "./components/Separator";
import Player from "../../common/components/Player/Player";
import CarouselSlider from "../../common/components/Carousel/CarouselSlider";
import HogeProject from "../../common/components/HogeProject/HogeProject";
import MusicCollection from "../../common/components/MusicCollection/MusicCollection";
import NFTCollection from "../../common/components/NFTCollection/NFTCollection";
import Media from "../../common/components/Media/Media";

export const Home = () => (
  <div className="page home">
    <HogeProject />
    {/*<CarouselSlider />*/}
    {/*<CoinTicker />*/}
    {/*  <Translate k="PAGE1.HEADER.TEXT1" />*/}
    <MusicCollection />
    <NFTCollection />
    <Media />
    {/*<div className="content">*/}
    {/*  <Translate k="PAGE1.HEADER.TEXT1" />*/}
    {/*  <Button />*/}
    {/*  <section>*/}
    {/*    <CoinTicker />*/}
    {/*  </section>*/}
    {/*  <section>*/}
    {/*    <NewsPapers />*/}
    {/*  </section>*/}
    {/*  <Separator />*/}
    {/*  <section>*/}
    {/*    <h2><Translate k="HOME.VIDEO.ORIGINS.TITLE" /></h2>*/}
    {/*    <Player url={"https://vimeo.com/243556536"} />*/}
    {/*  </section>*/}
    {/*  */}
    {/*</div>*/}
  </div>
)

export default Home;
import React, {useEffect} from "react";

import useGetData from "../../../hooks/useGetData";

import Container from "react-bootstrap/Container";
import Spinner from "../Spinner/Spinner";
import Item from "./Item";

import "./MusicCollection.scss";

const MusicCollection = () => {

  const { data, loading, fetchData } = useGetData("data/music");

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container fluid className="collection-wrapper">
      <Container className="collection">

        <div className="top">
          <h3>Latest Music Tracks</h3>
          <div className="text">
            A community driven project that thrives on audible creativity. HOGE Music is the community driven web3 music label for everyone. This is the decade that evolves the music industry and for HOGE, it activates right here. Hear what our exceptional community artists have been up too! Music created and produced by the likes of Big Keyz, Boyster, Jimmy Lee, Haley, PRES10, Hellcatcrypto, and more!
          </div>
        </div>

        <div className="separator" />

        {loading || !data ?
        <div className="center">
          <Spinner size="large" />
        </div> :
        <>
          <div className="list">
            {data.map((item) => <Item {...item} />)}
          </div>
        </>
        }
      </Container>
    </Container>
  );
};

export default MusicCollection;

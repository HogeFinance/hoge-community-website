import React, {useEffect} from "react";

import useGetData from "../../../hooks/useGetData";

import Container from "react-bootstrap/Container";
import Spinner from "../Spinner/Spinner";
import Item from "./Item";

import "./NFTCollection.scss";


const NFTCollection = () => {

  const { data, loading, fetchData } = useGetData("data/nfts");

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container fluid className="collection-wrapper">
      <Container className="collection">

        <div className="top">
          <h3>Ambassador NFT Collections</h3>
          <div className="text">
            HOGE NFTs allow our brand ambassadors to dip their toes into the non fungible world and receive blockchain education while building their brand portfolio up on the web3 side. It’s an everlasting way to always remember the original ambassadors that helped HOGE succeed!
          </div>
        </div>

        <div className="separator" />

        {loading || !data ?
        <div className="center">
          <Spinner size="large" />
        </div> :
        <>
          <div className="list">
            {data.map((item, index) => <Item key={index} {...item} />)}
          </div>
        </>
        }
      </Container>
    </Container>
  );
};

export default NFTCollection;

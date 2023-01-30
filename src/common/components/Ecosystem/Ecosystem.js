import React, {useEffect} from "react";

import useGetData from "../../../hooks/useGetData";

import Container from "react-bootstrap/Container";
import Spinner from "../Spinner/Spinner";
import Item from "./Item";

import "./Ecosystem.scss";


const Ecosystem = () => {

  const { data, loading, fetchData } = useGetData("data/ecosystem");

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container fluid className="ecosystem-wrapper">
      <Container className="ecosystem">

        <div className="top">
          <h3>Ambassador NFT Collections</h3>
          <div className="text">
            New applications, games, and various forms of utility are constantly under development to help benefit the community. See some of our most popular developments below.
          </div>
        </div>

        <div className="separator" />

        {loading || !data ?
        <div className="center">
          <Spinner size="large" />
        </div> :
        <div className="list">
          {data.map((item) => <Item {...item} />)}
        </div>}

        <div className="more">
          <a href="#" className="btn-secondary">See More</a>
        </div>

      </Container>
    </Container>
  );
};

export default Ecosystem;

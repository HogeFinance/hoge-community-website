import React, {useEffect} from "react";

import useGetData from "../../../hooks/useGetData";

import Container from "react-bootstrap/Container";
import Spinner from "../Spinner/Spinner";
import Item from "./Item";

import "./Addresses.scss";

const Addresses = () => {

  const { data, loading, fetchData } = useGetData("data/addresses");

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container fluid className="addresses-wrapper">
      <Container className="addresses">

        <div className="top">
          <h3>Wallets</h3>
        </div>

        {loading || !data ?
          <div className="center">
            <Spinner size="large" />
          </div> :
          <div className="list">
            {data.map((item, index) => <Item key={index} {...item} />)}
          </div>
        }
        <div className="bot">
          **All wallets are managed and maintained by the community voted in guidelines
        </div>

      </Container>
    </Container>
  );
};

export default Addresses;

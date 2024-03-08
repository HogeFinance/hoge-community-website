import React, {useEffect} from "react";

import useGetData from "../../../../hooks/useGetData";

import Container from "react-bootstrap/Container";
import Spinner from "../../../../common/components/Spinner/Spinner";
import Item from "./Item";

import "./PrintCollection.scss";
import ContainerHeader from "../../../../common/components/ContainerHeader/ContainerHeader";

const PrintCollection = () => {

  const { data, loading, fetchData } = useGetData("data/print");

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container fluid className="prints-wrapper">
      <Container className="prints">

        <ContainerHeader title="Latest Prints" showSeparator />

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

        <div className="separator" />
      </Container>
    </Container>
  );
};

export default PrintCollection;

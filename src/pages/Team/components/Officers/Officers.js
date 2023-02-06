import React, {useEffect} from "react";

import useGetDataMulti from "../../../../hooks/useGetDataMulti";

import Container from "react-bootstrap/Container";
import Spinner from "../../../../common/components/Spinner/Spinner";

import "./Officers.scss";
import Item from "./Item";

const Officers = () => {

  const { data, loading, fetchData } = useGetDataMulti("data/team/officers");

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const {categories, items} = data || {};

  return (
    <Container fluid className="officers-wrapper">
      {loading || !data ?
        <div className="center">
          <Spinner size="large" />
        </div> :
        <>
          {categories.map((category, index) =>
            <Container className="officers" id={category} key={index}>
              <h3 className="title">{category} Officers</h3>
              <div className="separator" />
              <div className="list">
                {items[index].map((item, indexChild) => <Item key={`${index}-${indexChild}`} {...item} />)}
              </div>
            </Container>
          )}
        </>
      }
    </Container>
  );
};

export default Officers;

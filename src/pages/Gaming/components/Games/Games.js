import React, {useEffect} from "react";

import useGetDataMulti from "../../../../hooks/useGetDataMulti";

import Container from "react-bootstrap/Container";
import Spinner from "../../../../common/components/Spinner/Spinner";

import "./Games.scss";
import Item from "./Item";

const Games = () => {

  const { data, loading, fetchData } = useGetDataMulti("data/gaming/games");

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const {categories, items} = data || {};

  return (
    <>
      {loading || !data ?
        <div className="center">
          <Spinner size="large" />
        </div> :
        <>
          <Container fluid className="gaming-header-wrapper">
            <Container className="gaming-header">
              <h2>Welcome to Hoge Gaming</h2>
              <div className="links">
                {categories.map((category, index) =>
                  <a href={`#${category}`} key={index} className="btn small">{category} Games</a>
                )}
              </div>
            </Container>
          </Container>

          {categories.map((category, index) =>
            <Container fluid className="games-wrapper" id={category} key={index}>
              <Container className="games">
                <h3>{category} Games</h3>
                <div className="list">
                  {items[index].map((item, indexChild) => <Item key={`${index}-${indexChild}`} {...item} />)}
                </div>
              </Container>
            </Container>
          )}
      </>
      }
    </>
  );
};

export default Games;

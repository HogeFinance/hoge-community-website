import React, {useEffect} from "react";
import Container from "react-bootstrap/Container";
import "./Roadmap.scss";
import useGetData from "../../../hooks/useGetData";
import Spinner from "../Spinner/Spinner";
import Top from "../Top/Top";
import ContainerHeader from "../ContainerHeader/ContainerHeader";

const Roadmap = () => {

  const { data, loading, fetchData } = useGetData("data/roadmap");

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log("xx", data);


  return (
    <Container fluid className="roadmap-wrapper">
      <Container className="roadmap" id="roadmap">

        <ContainerHeader title="Roadmap" showSeparator />

        {loading || !data ?
          <div className="center">
            <Spinner size="large" />
          </div> :
          <div className="sections">
            {data.map(({section, steps}, index) =>
              <div className={`section ${section}`}>
                <div className={`name ${section}`}><h4>{section}</h4></div>
                <div className="steps">
                  {steps.map((step, indexChild) =>
                    <div className="step" key={`${index}-${indexChild}`}>
                      <div className="header">
                        <h4 className="title">{step.title}</h4>
                        {section !== 'soon' && (
                          <span className={`verified ${section}`}>&#10004;</span>
                        )}
                      </div>
                      <p className="content">{step.description}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        }

      </Container>
    </Container>
  );
};

export default Roadmap;

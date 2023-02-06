import Container from "react-bootstrap/Container";

import "./TeamTop.scss";

const TeamTop = () => {

  return (
    <Container fluid className="team-top-wrapper">
      <Container className="team-top">
        <h1>Project Team</h1>
        <div className="text">
          Due to the original core management team not having the available time and capacity to devote to the project, a new management team, drawn from the community, was voted in by the community itself via a ‘Snapshot’ on 14th April 2022.
        </div>
        <a href="https://www.gooogle.com" className="btn snapshot">View Snapshot</a>

      </Container>
      <div className="separator-gradient" />
    </Container>
  );
};

export default TeamTop;

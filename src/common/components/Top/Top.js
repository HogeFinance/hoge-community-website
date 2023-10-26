import Container from "react-bootstrap/Container";
import "./Top.scss";

const Top = ({title="", text="", link="", linkTitle=""}) => {

  return (
    <Container fluid className="top-wrapper">
      <Container className="top">
        <h1>{title}</h1>
        <div className="text">
          {text}
        </div>

        {link &&
          <a href={link} className="btn snapshot" target="_blank" rel="noreferrer">{linkTitle}</a>
        }
      </Container>
      <div className="separator-gradient" />
    </Container>
  );
};

export default Top;

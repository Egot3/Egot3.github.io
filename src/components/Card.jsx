import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const PresentCard = ({ repoName, starCount, description, link }) => {
  return (
    <>
      <Col sm={6}>
        <Row>
          <Col>
            <a href={link}>
              <h1>{repoName}</h1>
            </a>
          </Col>
          <Col className="text-end">
            Starcount: {starCount}              {/*not like all those stars are from other users*/}
          </Col>
        </Row>
        <Row>
            {description}
        </Row>
      </Col>
    </>
  );
};

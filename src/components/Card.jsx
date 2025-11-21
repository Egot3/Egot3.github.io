import Col from "react-bootstrap/Col";
import { Skeleton } from "./Skeleton";
import Card from "react-bootstrap/Card";

export const PresentCard = ({
  key,
  repoName,
  starCount,
  description,
  link,
}) => {
  return (
    <>
      <Col sm={6} key={key}>
        <Card style={{ width: "100%", height: "100%" }} className="secondaryBg">
          <Card.Body style={{textAlign: 'left'}}>
            <Card.Link href={link}><Card.Title>{repoName}</Card.Title></Card.Link>
            
            <Card.Subtitle className="mb-2 text-muted">
              Stargazers: {starCount}
            </Card.Subtitle>
            <Card.Text>
              {description?description:'Some extremely nescessary description that everyone reads'}
            </Card.Text>
            
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

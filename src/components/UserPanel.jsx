import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image  from 'react-bootstrap/Image';

export const UserPanel = ({username, link, avatar, dateOfCreation}) => {
    return(
        <>
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Container fluid>
                            <a href={link}>
                            <Row>
                                <Image src={avatar} roundedCircle/>
                            </Row>
                            <Row>
                                <h2>{username}</h2>
                            </Row>
                            </a>
                        </Container>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <h3>Been there for {Math.floor((Date.now() - new Date(dateOfCreation).getTime()) / (1000 * 60 * 60 * 24 * 365.25))} full years!</h3>   {/*the perfect amalganation of numbers*/}
                </Row>
            </Container>
        </>
    )
}
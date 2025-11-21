import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image  from 'react-bootstrap/Image';
import {Skeleton} from './Skeleton.jsx'
import '../assets/_variables.scss'

export const UserPanel = ({username, link, avatar, dateOfCreation}) => {
    return(
        <>
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Container fluid>
                            <a href={link} style={{textDecoration:'none'}} draggable={false}>
                            <Row>
                                {avatar ? <Image src={avatar} roundedCircle style={{pointerEvents:'none'}}/>: <Skeleton></Skeleton>}
                            </Row>
                            <Row>
                                {username ?<h2 className='primaryText'>{username}</h2>: <Skeleton/>}
                            </Row>
                            </a>
                        </Container>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <h3 className='secondaryText'>Been there for {dateOfCreation?Math.floor((Date.now() - new Date(dateOfCreation).getTime()) / (1000 * 60 * 60 * 24 * 365.25)):<Skeleton/>} full years!</h3>   {/*the perfect amalganation of numbers*/}
                </Row>
            </Container>
        </>
    )
}
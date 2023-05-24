import { Navbar, Offcanvas, Row, Col, Image, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ABOUT_INFO, RoutePath } from 'src/constants/common';
import photo from 'src/assets/photo.jpg';

interface MenuProps {
  id: string;
  isOpen: boolean;
  handleClose: () => void;
}

export default function Menu({ id, isOpen, handleClose }: MenuProps) {
  return (
    <Navbar.Offcanvas id={id} restoreFocus={false} show={isOpen} onHide={handleClose}>
      <Offcanvas.Header className='ms-auto' closeButton />
      <Offcanvas.Header>
        <Row direction='horizontal'>
          <Col>
            <Image src={photo} roundedCircle width={100} height={100} />
          </Col>
          <Col className='d-flex flex-column justify-content-center '>
            <h6>{ABOUT_INFO[0].description}</h6>
            <a href={`mailto:${ABOUT_INFO[3].description}`}>{ABOUT_INFO[3].description}</a>
          </Col>
        </Row>
      </Offcanvas.Header>
      <Offcanvas.Body className='d-flex flex-column '>
        <Nav className='my-auto ms-md-auto'>
          <Nav.Item>
            <Nav.Link as={Link} to={RoutePath.main} onClick={handleClose}>
              Main
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to={RoutePath.about} onClick={handleClose}>
              About
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  );
}

import { useState } from 'react';
import { Navbar, Container, Nav, Offcanvas, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { RoutePath } from 'src/constants/common';
import avatar from 'src/assets/avatar.svg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Navbar collapseOnSelect expand={false} bg='light'>
      <Container>
        <Navbar.Brand as={Link} to={RoutePath.main}>
          InteractNet
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar' onClick={handleOpen} />
        <Navbar.Offcanvas id='navbar' restoreFocus={false} show={isOpen} onHide={handleClose}>
          <Offcanvas.Header className='ms-auto' closeButton />
          <Offcanvas.Body className='d-flex flex-column '>
            <Row direction='horizontal'>
              <Col>
                <Image src={avatar} rounded width={100} height={100} />
              </Col>
              <Col className='d-flex flex-column justify-content-center '>
                <h6>Dmitry Ivanov</h6>
                <a href='mailto:dimannisik1@gmail.com'>dimannisik1@gmail.com</a>
              </Col>
            </Row>
            <Nav className='my-auto'>
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
      </Container>
    </Navbar>
  );
}

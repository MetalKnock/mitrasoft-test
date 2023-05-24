import { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NAVBAR_ARIA_CONTROLS, RoutePath } from 'src/constants/common';
import { Menu } from '../Menu';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Navbar collapseOnSelect expand='md' bg='light'>
      <Container>
        <Navbar.Brand as={Link} to={RoutePath.main}>
          InteractNet
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={NAVBAR_ARIA_CONTROLS} onClick={handleOpen} />
        <Menu id={NAVBAR_ARIA_CONTROLS} isOpen={isOpen} handleClose={handleClose} />
      </Container>
    </Navbar>
  );
}

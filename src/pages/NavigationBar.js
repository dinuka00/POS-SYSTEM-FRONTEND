import { Navbar, Nav , Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <Navbar expand="lg" className="custom-navbar mb-4">
            <Container>
                <Navbar.Brand as={Link} to="/" className="navbar-brand">POS SYSTEM</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" className="nav-item">
                            Products
                        </Nav.Link>
                        <Nav.Link as={Link} to="/categories" className="nav-item">
                            Categories
                        </Nav.Link>
                        <Nav.Link as={Link} to="/checkout" className="nav-item">
                            Checkout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;

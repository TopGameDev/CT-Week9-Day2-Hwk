import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

type Props = {}

export default function Navigation({}: Props) {
  return (
    <Navbar bg='success' data-bs-theme='dark'>
            <Container>
                <Navbar.Brand href='/'>ToDo</Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Sign Up</Nav.Link>
                    <Nav.Link>Log In</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
  )
}
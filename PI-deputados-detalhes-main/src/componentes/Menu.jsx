import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>

      <Navbar bg="dark" variant="dark" className="mb-3">
        <Container>
          
          <Nav className="me-auto">
            <Link className="nav-link" to="/telainicial">Home</Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Menu
import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarUser = ({isAuth,setIsAuth}) => {
    return (
        <Navbar bg="primary" variant="dark">
    <Container>
    
    <Nav className="me-auto">
      <Link to='/'><Nav.Link href="#home">Home</Nav.Link></Link>
      {
                    isAuth ? 
      <div>
     <Link to='/Listofusers'><Nav.Link href="#features">List of users</Nav.Link></Link> 
      <Nav.Link href="#pricing" onClick={()=>setIsAuth(false)}>Logout</Nav.Link>
      
      </div>
      :
      <Nav.Link href="#pric" onClick={()=>setIsAuth(true)}>Login</Nav.Link>
}
    </Nav>
    </Container>
  </Navbar>
    )
}

export default NavbarUser

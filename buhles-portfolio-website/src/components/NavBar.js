import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import navIcon1 from ".../assets/";
import navIcon2 from ".../assets/";
import navIcon3 from ".../assets/";
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener(scroll, onScroll)
    }, [])

    const onUpdateActiceLink =  (value) => {
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={''} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
             <span className='navbar-toggle-icon'></span>   
         </Navbar.Toggle> 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navebar-link' : 'navbar-link'}  onClick={() => onUpdateActiceLink('home') }>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navebar-link' : 'navbar-link'} onClick={() => onUpdateActiceLink('skills') }>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navebar-link' : 'navbar-link'} onClick={() => onUpdateActiceLink('projects') }>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
               <a href='#'><img src={''} alt=""></img></a>
               <a href='#'><img src={''} alt=""></img></a>
               <a href='#'><img src={''} alt=""></img></a> 
            </div>
            <button className='contact' onClick={() => console.log('contact')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

            // { <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            //     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            //     <NavDropdown.Item href="#action/3.2">
            //       Another action
            //     </NavDropdown.Item>
            //     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            //     <NavDropdown.Divider />
            //     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            //   </NavDropdown> }

import { Container, Navbar, Nav, NavLink} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const TopNav = () => {

    const menuData = [
    {
        path:'/',
        name: "Home"
    },
    {
        path:'/about',
        name: "About"
    },
    {
        path:'/contact',
        name: "Contact"
    },
    {
        path:'/whyjoin',
        name: "WhyJoin"
    },
    ]
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="brand">Gymfinity</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {
                menuData.map((item)=>(
                    <NavLink to={item.path} key={item.name}>
                        <div className="list_item">{item.name}</div>
                        </NavLink>
                ))
            }

          </Nav>
          <Nav className="ms-auto">
            <button className="btn btn-success">Sign Up</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopNav;
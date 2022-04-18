import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar ,Nav,Container,Form,FormControl,Button} from 'react-bootstrap';
import ContestCard from './components/contest-card';

function App() {
  return (
    <div className="App">
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Coding Contests</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
    </Nav>
    </Container>
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
  </Navbar>
  <ContestCard/>
    </div>
  );
}

export default App;

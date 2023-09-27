// import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="home-content">
          <h1>Make yourself stronger than your excuses.</h1>

          {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias consectetur provident fuga libero molestias vero commodi cum nobis explicabo. Corrupti inventore non tenetur dolore consectetur qui necessitatibus quibusdam autem quisquam.</p> */}
          <div className="btn-box">
            <a href="#">Join Now</a>
            <a href="#">Learn More</a>
          </div>
        </div>
      </section>
      <section className="bmi">
        <Form>
          <Form.Group className="mb-3 w-25">
            <Form.Label>Age</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </section>
    </div>
  );
};

export default Home;

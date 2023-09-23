import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Contact.css"
const Contact = () => {
  return (
    <Container>
      <Row className= "mb-5 mt-3">
        <Col lg = '8'>
          <h1 className = "display-4 mb-4">
            Contact Me
          </h1>
        </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg = '5' className="mb-5">
          <h3 className="color_sec py-4">Get in Touch</h3>
          <address>
            <strong>Email: Gyminfinity@gmail.com</strong>
            <br/>
            <br/>
            <p>
              <strong>Phone: 09673179108</strong>
            </p>
          </address>
          <p>
          790 P. Ocampo Sr. St. ( formerly, Ocampo St, Malate, Manila, 1004 Metro Manila)
          </p>
          </Col>
          <Col lg ='7' className="d-flex align-items-center">
            <form className="contact_form w-100">
              <Row>
                <Col lg = '6' className="form-group">
                  <input 
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="name"
                  type="text"
                  />
                </Col>
                <Col lg = '5' className="form-group">
                  <input 
                  className="form-control rounded-0"
                  id="email"
                  name="email"
                  placeholder="email"
                  type="email"
                  />
                  </Col>
              </Row>
              <textarea 
              className="form-control rounded-0" id="message" 
              name="message"
              placeholder="message"
              rows="5">
              </textarea>
              <br/>
            </form>
          </Col>
        </Row>
    </Container>
  );
};

export default Contact;

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Amenities from "../../../assets/amenities.png";
import FitnessPrograms from "../../../assets/fitness-programs.png";
import Convenience from "../../../assets/community.png";
import Community from "../../../assets/convenience.png";
// import Card from "react-bootstrap/Card";

const WhyJoin = () => {
  return (
    <Container>
      <Row xs={1} md={4} className="d-flex justify-content-center mt-5">
        <Col>
          <Image src={FitnessPrograms} fluid />
          <h3></h3>
        </Col>
        <Col>
          <Image src={Convenience} fluid />
        </Col>
      </Row>
      <Row xs={1} md={4} className="d-flex justify-content-center mt-5">
        <Col>
          <Image src={Amenities} fluid />
        </Col>
        <Col>
          <Image src={Community} fluid />
        </Col>
      </Row>
    </Container>

    // <Container>
    //   <Row xs={1} md={4} className="d-flex justify-content-center mt-5">
    //     <Col>
    //       <Card style={{ width: "18rem" }}>
    //         <Card.Img variant="top" src={Amenities} />
    //         <Card.Body>
    //           <Card.Title>Card Title</Card.Title>
    //           <Card.Text>
    //             Some quick example text to build on the card title and make up
    //             the bulk of the card's content.
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //     <Col>
    //       <Card style={{ width: "18rem" }}>
    //         <Card.Img variant="top" src={Amenities} />
    //         <Card.Body>
    //           <Card.Title>Card Title</Card.Title>
    //           <Card.Text>
    //             Some quick example text to build on the card title and make up
    //             the bulk of the card's content.
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   </Row>
    //   <Row xs={1} md={4} className="d-flex justify-content-center mt-5">
    //     <Col>
    //       <Card style={{ width: "18rem" }}>
    //         <Card.Img variant="top" src={Amenities} />
    //         <Card.Body>
    //           <Card.Title>Card Title</Card.Title>
    //           <Card.Text>
    //             Some quick example text to build on the card title and make up
    //             the bulk of the card's content.
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //     <Col>
    //       <Card style={{ width: "18rem" }}>
    //         <Card.Img variant="top" src={Amenities} />
    //         <Card.Body>
    //           <Card.Title>Card Title</Card.Title>
    //           <Card.Text>
    //             Some quick example text to build on the card title and make up
    //             the bulk of the card's content.
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   </Row>
    // </Container>
  );
};

export default WhyJoin;

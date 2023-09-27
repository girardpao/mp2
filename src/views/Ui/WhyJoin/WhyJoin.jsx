import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Amenities from "../../../assets/amenities.png";
import FitnessPrograms from "../../../assets/fitness-programs.png";
import Convenience from "../../../assets/community.png";
import Community from "../../../assets/convenience.png";
// import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

const WhyJoin = () => {
  return (
    <>
      <section className="whyJoinSection">
        <Container className="text-center">
          <Row xs={1} md={4} className="d-flex justify-content-center mt-5">
            <Col>
              <Image src={FitnessPrograms} fluid />
              <h3 className="">Fitness Programs</h3>
              <p>Our gyms are not just about the facilities and equipment. </p>
            </Col>
            <Col>
              <Image src={Convenience} fluid />
              <h3>Convenience</h3>
              <p>
                Your key opens all doors of the 4,000+ (and growing) locations
                worldwide – 24 hours a day, seven days a week.
              </p>
            </Col>
          </Row>
          <Row xs={1} md={4} className="d-flex justify-content-center mt-5">
            <Col>
              <Image src={Amenities} fluid />
              <h3>Community</h3>
              <p>
                Your membership welcomes you to a family that gives the extra
                push you need, and the extra support you want to help break down
                barriers to your healthier place.
              </p>
            </Col>
            <Col>
              <Image src={Community} fluid />
              <h3>Amenities</h3>
              <p>
                Your key opens all doors of the 4,000+ (and growing) locations
                worldwide – 24 hours a day, seven days a week.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <section className="whyJoinTestimonials">
        <Carousel fade>
          <Carousel.Item>
            <ExampleCarouselImage text="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section> */}
    </>
  );
};

export default WhyJoin;

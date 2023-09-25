import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./About.css"
// import aboutimage from '../../../assets/AboutBG.jpg'
const About = () => {
  return (
    <section id='about'>
      <Container fluid>
      <Row>
        <Col><h1 className='aboutTitle'>LEARN MORE ABOUT US</h1></Col>
      </Row>
      <Row>
        <Col><p className='aboutDescription'>At Gymfinity, we salute those who have served our nation and honor their commitment to health and fitness. Our mission is to provide a supportive and empowering environment for veterans and individuals of all backgrounds to achieve their fitness goals. We understand the unique challenges and needs that veterans face, and we are here to help you on your fitness journey.</p></Col>
      </Row>
      <Row>
        <button className='btn btnReadMore'>Read More</button>
      </Row>
    </Container>
      {/* <div className='about-image'>
        <img src={aboutimage} alt=''/>
        
      </div>
      <div className='about-text'>
        <h1>LEARN MORE ABOUT US</h1>
        <p>At Gymfinity, we salute those who have served our nation and honor their commitment to health and fitness. Our mission is to provide a supportive and empowering environment for veterans and individuals of all backgrounds to achieve their fitness goals. We understand the unique challenges and needs that veterans face, and we are here to help you on your fitness journey.</p>
        <button>Read More</button>
      </div> */}
    </section>
  )
};

export default About;

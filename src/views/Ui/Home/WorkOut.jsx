import { useState, useEffect } from "react";
import "./WorkOut.css";
import Carousel from "react-bootstrap/Carousel";
// import CarouselImage from "components/ExampleCarouselImage";
import axios from "axios";
import dog from "../../../assets/AboutBg.jpg";

const WorkOut = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    getWorkouts();
    return () => {};
  }, []);

  async function getWorkouts() {
    const options = {
      headers: {
        "X-RapidAPI-Key": "63db6dfc53msh4b635f2a364896ap1ae0dejsn6ae74bfe7e77",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };
    const { data } = await axios.get(
      "https://exercisedb.p.rapidapi.com/exercises",
      options
    );
    data.forEach((item) => {
      console.log(item);
    });
    setWorkouts(data);
  }

  return (
    <section id="workouts">
      <Carousel>
        <Carousel.Item>
          {/* {workouts.map((workout, index) => {
            return (
              
            );
          })} */}
          <img className="d-block w-100" src={dog} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=f5f5f5"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=f5f5f5"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default WorkOut;

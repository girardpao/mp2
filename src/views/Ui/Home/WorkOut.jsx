import { useState, useEffect } from "react";
import "./WorkOut.css";
import Carousel from "react-bootstrap/Carousel";
// import CarouselImage from "components/ExampleCarouselImage";
import axios from "axios";

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
    data.forEach((items) => {
      console.log(items);
    });
    setWorkouts(data);
  }

  return (
    <section id="workouts">
      <h2 className="text-center mt-4">
        Exercises to start your fitness journey
      </h2>
      <Carousel>
        <Carousel.Item>
          {workouts.map((workout, index) => {
            return (
              <div className="d-flex justify-content-center" key={index}>
                <img
                  className="d-block w-25"
                  src={workout.gifUrl}
                  alt="First slide"
                />
              </div>
            );
          })}
          {/*<Carousel.Caption className="caption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
           </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 text-center"
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
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default WorkOut;

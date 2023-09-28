import "./Home.css";
import Workout from "./WorkOut";

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
      <Workout />
    </div>
  );
};

export default Home;

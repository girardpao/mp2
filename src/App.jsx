import TopNav from "./components/Topnav";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import "./App.css";
import About from "./views/Ui/About/About";
import Contact from "./views/Ui/Contact/Contact";
import SignUp from "./views/Ui/SignUp/SignUp";
import WhyJoin from "./views/Ui/WhyJoin/WhyJoin";

const App = () => {
  console.log(routes)
  
  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/signup" element = {<SignUp/>}/>
        <Route path = "/whyjoin" element = {<WhyJoin/>}/>


        
      </Routes>
    </div>
  );
};

export default App;

import TopNav from './components/Topnav'
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import './App.css'

const App = () => {
  return (
    <div>
      <TopNav/>
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              exact
            />
          );
        })}
      </Routes>
    </div>
  );
};  

export default App;
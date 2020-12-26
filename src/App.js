import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contactus" exact component={ContactUs} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Navbar from "./components/Navbar";
import Bookingscreen from "./screens/Bookingscreen";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";
import Adminscreen from "./screens/Adminscreen";
import Profilescreen from "./screens/Profilescreen";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Navbar />
      <BrowserRouter>
        <Route path="/home" exact component={Homescreen} />
        <Route
          path="/book/:roomid/:fromdate/:todate"
          exact
          component={Bookingscreen}
        />
        <Route path="/login" exact component={Loginscreen} />
        <Route path="/register" exact component={Registerscreen} />
        <Route path="/admin" exact component={Adminscreen} />
        <Route path="/profile" exact component={Profilescreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;

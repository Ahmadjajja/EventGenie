import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import LandingPage from "./Pages/LandingPage/landingPage";
import Login from "./Pages/Authentication/Login";
import SignUp from "./Pages/Authentication/SignUp";
import CustomRoutes from "./Pages/Routes";
function App() {
  return (
    <div className="App">
      <CustomRoutes />
    </div>
  );
}

export default App;

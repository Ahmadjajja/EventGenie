import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import LandingPage from "./Pages/LandingPage/landingPage";
import Login from "./Pages/Authentication/Login";
import SignUp from "./Pages/Authentication/SignUp";
function App() {
  return (
    <div className="App">
      <LandingPage />
      <Login />
      <SignUp />
    </div>
  );
}

export default App;

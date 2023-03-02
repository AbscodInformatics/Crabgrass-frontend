import "./App.css";
import DashBoard from "./pages/DashBoard";
import SignIn from "./components/SignIn";

function App() {
  const auth = JSON.parse(localStorage.getItem("signin"));

  return <div>{auth ? <DashBoard /> : <SignIn />}</div>;
}

export default App;

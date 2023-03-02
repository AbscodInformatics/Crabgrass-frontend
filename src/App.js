import "./App.css";
import DashBoard from "./pages/DashBoard";
import SignIn from "./components/SignIn";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  
  const auth = JSON.parse(localStorage.getItem("signin"));

  return  <div> 

  {auth ? <DashBoard/> : <SignIn/>}</div>;
}

export default App;

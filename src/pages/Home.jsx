import Routing from "./Routing";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
function Home() {
  return (
    <>
      <div>
        <Header />
        <div className="flex ">
          <div className="  ">
            <Sidebar />
          </div>
          <div className="w-5/6  body-scroll">
            This is home page
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;

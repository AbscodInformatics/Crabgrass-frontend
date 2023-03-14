import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Graph from "../components/Graph";
import PrintSlip from "../components/PrintSlip";
import SignIn from '../components/SignIn'
import BarcodeScanner from "../barcode/BarcodeScanner";
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
            
           <BarcodeScanner/>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;

import { useState, CSSProperties, useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import productContext from "../Context/appContext";



function Loading() {
  const {showLoader} =useContext(productContext)
  let [loading, setLoading] = useState(showLoader);
  let [color, setColor] = useState("#A12623");

  return (
    <div className="sweet-loading dotted  m-auto">
      <ClipLoader
        color={color}
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
        
      />
    </div>
  );
}

export default Loading;
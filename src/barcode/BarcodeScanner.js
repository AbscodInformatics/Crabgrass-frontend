import React, { useEffect, useState } from "react";

const BarcodeScanner = () => {
  const [barcodeDisplay, setBarcodeDisplay] = useState("No barcode detect");
  let barCodeScan = "";

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.keyCode === 13 && barCodeScan.length > 3) {
        handleScan(barCodeScan);
        return;
      }
      if (e.keyCode === 16) {
        return;
      }
      barCodeScan += e.key;

      setTimeout(() => {
        barCodeScan = "";
      }, 100);
    }

    document.addEventListener("keydown", handleKeyDown);

    return function cleanUp() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleScan = (barcodeString) => {
    setBarcodeDisplay(barcodeString);
  };
  return <div>{barcodeDisplay}</div>;
};

export default BarcodeScanner;

import React, { useState } from 'react'
import useScanDetection from 'use-scan-detection'

const BarcodeScanner = () => {
  const [barCodeScan,setBarcodeScan]=useState('No Barcode Scanner');
  useScanDetection({
    onComplete: setBarcodeScan,
    minLength:3,
    
  })
  return (
    <div>
      Barcode:{barCodeScan}
    </div>
  )
}

export default BarcodeScanner

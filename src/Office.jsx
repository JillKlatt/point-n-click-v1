// import './App.css';
import React from "react";
import OfficeBase from "./items/OfficeBase";
// import ThreePrinter from "./items/3dPrinter";
import { Desktop } from "./items/DeskTop";
// import Chair from "./items/Chair";
// import { ChairTop } from "./items/Chair";
// import PrinterCord from "./items/PrinterCord";
// import { Outlet, CordFloor, CordPlugged } from "./items/Cord.jsx";
// import Discs from "./items/Discs";
import { texts } from "./text";

const Office = ({ printText }) => {
  const defaults = { position: [0, 0, 0], scale: 1, printText, texts };

  return (
    <group position={[0, -1, 1.5]}>
      <div>HERE</div>
      {/* <OfficeBase {...defaults} />
      <Desktop {...defaults} /> */}
      {/* <ThreePrinter {...defaults} /> */}
      {/* <Chair {...defaults} /> */}
      {/* <ChairTop /> */}
      {/* <Outlet {...defaults} />
      <CordFloor {...defaults} />
      <CordPlugged />
      <PrinterCord {...defaults} />
      <Discs {...defaults} /> */}
    </group>
  );
}

export default Office;
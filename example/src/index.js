import React from "react";
import { render } from "react-dom";
import CryptoTransferQR from "../../src";

const App = () => {
  return (
    <CryptoTransferQR
      contract="0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
      chain="1"
      to="0xF1c51266886c539Bd3e613ff17DBBDF653ae151e"
      amount={100}
      decimals="6"
      renderAs="svg"
    />
  );
};
render(<App />, document.getElementById("root"));

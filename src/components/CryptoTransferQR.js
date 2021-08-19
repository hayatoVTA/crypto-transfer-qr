import React from "react";
import QRCode from "qrcode.react";

const CryptoTransferQR = ({
  contract = "0x6ae7dfc73e0dde2aa99ac063dcf7e8a63265108c",
  chain = "137",
  to = "0xF1c51266886c539Bd3e613ff17DBBDF653ae151e",
  amount = 1000,
  decimals = "18",
} = {}) => {
  return (
    <>
      <QRCode
        value={
          "ethereum:pay-" +
          contract +
          "@" +
          chain +
          "/transfer?address=" +
          to +
          "&uint256=" +
          amount +
          "e" +
          decimals
        }
      />
    </>
  );
};

export default CryptoTransferQR;

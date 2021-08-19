import React from "react";
import QRCode from "qrcode.react";

const CryptoTransferQR = ({ contract, chain, to, amount, decimals }) => {
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

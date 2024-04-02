import React from "react";

const Installment = ({order}) => {
  return (
    <div>
      <div className="flex items-center w-full justify-between">
        <span>مبلغ قابل پرداخت</span>
        <input
        value={order?.Installment[0]?.paid === "true" ? order?.installments[1] : order?.installments[0]}
         />
      </div>
    </div>
  );
};

export default Installment;

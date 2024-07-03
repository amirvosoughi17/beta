import React from "react";

interface OrdersCountProps {
  count: number;
}

const OrdersCount: React.FC<OrdersCountProps> = ({ count }) => {
  return (
    <div className="">
      <span className="">{count}</span>
    </div>
  );
};

export default OrdersCount;
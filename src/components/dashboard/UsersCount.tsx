import React from "react";

interface UsersCountProps {
  count: number;
}

const UsersCount: React.FC<UsersCountProps> = ({ count }) => {
  return (
    <div className="">
      <span className=""> {count}</span>
    </div>
  );
};

export default UsersCount;
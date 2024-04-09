import React from "react";
import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <Loader2 className="h-7 w-7 animate-spin" />
    </div>
  );
};

export default Loading;

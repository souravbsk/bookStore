import React from "react";

const LoadingPage = () => {
  return (
    <div className="container ">
      <div className="grid place-items-center h-[calc(100vh-250px)]">
        <div className="flex items-end gap-1">
          <p className="text-7xl text-slate-600 font-thin">L</p>
          <div className="w-10 h-10 border-dashed border-8 animate-bounce animate-spin rounded-full border-blue-500"></div>
          <p className="text-7xl text-slate-600 font-thin">oading<span className="animate-pulse">.</span><span className="animate-pulse">.</span><span className="animate-pulse">.</span></p>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;

import React from "react";
import Sidebar from "./Sidebar";
import TextView from "./TextView";

const TimeLine = () => {
  return (
    <>
      <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
        <div className="grid lg:grid-cols-5">
          <Sidebar />
          <TextView />
        </div>
      </div>
    </>
  );
};

export default TimeLine;

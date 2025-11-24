import React from "react";
import AllScreen from "../src/routes/Allscreen"

const App: React.FC = () => {
  return (
    <>
      {/* <div className=" flex justify-center items-center  bg-white h-screen w-full flex-col gap-4">
        <h1 className="text-3xl font-bold underline text-black"> hello glow</h1>
        <button className="btn btn-neutral btn-outline">Outline</button>
        <button className="btn btn-neutral btn-dash">Dash</button>
        <button className="btn btn-wide bg-red-500">hello</button>
        <progress className="progress w-56 bg-blue-500" value="2" max="20"></progress>
        <progress
          className="progress progress-error w-56"
          value={0}
          max="100"
        ></progress>
        <progress
          className="progress progress-error w-56"
          value="10"
          max="100"
        ></progress>
        <progress
          className="progress progress-error w-56"
          value="40"
          max="100"
        ></progress>
        <progress
          className="progress progress-error w-56"
          value="70"
          max="100"
        ></progress>
        <progress
          className="progress progress-error w-56"
          value="100"
          max="100"
        ></progress>
      </div> */}
      <AllScreen/>
    </>
  );
};

export default App;

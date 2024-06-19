import Diagram from "@/components/ui/diagram";
import React from "react";

interface MainProps {
  nodeDataArray: Array<any>;
  linkDataArray: Array<any>;
}

function Main({ nodeDataArray, linkDataArray }: MainProps) {
  return (
    <main
      id="content"
      role="main"
      className="lg:ps-72 bg-[#161a27] min-h-screen overscroll-auto"
    >
      <div className="lg:px-6 py-8">
        <div className="mx-auto ">
          <h1 className="text-xl font-bold sm:text-2xl dark:text-white">
            Dashboard
          </h1>
          <div className="relative">
            <div className="absolute top-0 left-0 w-44 h-20 bg-[#161a27] z-30"></div>
            <Diagram
              nodeDataArray={nodeDataArray}
              linkDataArray={linkDataArray}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;

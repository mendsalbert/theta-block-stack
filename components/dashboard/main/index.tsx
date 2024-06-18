import React from "react";

function Main({ diagramRef }: any) {
  return (
    <main
      id="content"
      role="main"
      className="lg:ps-72 bg-[#161a27] min-h-screen overscroll-auto"
    >
      <div className="lg:px-6 py-8">
        <div className="mx-auto ">
          <h1 className="text-xl font-bold sm:text-2xl  dark:text-white">
            Dashboard
          </h1>
          <div className="relative">
            <div className="absolute top-0 left-0 w-44 h-20 bg-[#161a27] z-30"></div>
            <div ref={diagramRef} className="w-full h-screen"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;

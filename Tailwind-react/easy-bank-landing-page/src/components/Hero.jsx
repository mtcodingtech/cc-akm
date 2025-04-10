import React from "react";

function Hero() {
  return (
    <>
    <nav className="bg-white h-20 relative z-40"></nav>
      <div className="w-screen flex bg-Very-Light-Gray">
        <div className="h-screen grid grid-cols-2 items-center ">
          <div className="max-w-md bg-Lime-Green">
            <h1 className="text-3xl">Next generation digital banking</h1>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <button> Request Invite</button>
          </div>
        </div>
        <div className="relative w-full">
          <img
            src="/images/bg-intro-desktop.svg"
            alt="img"
            className="object-cover w-7xl h-[110vh] absolute top-[-25%] right[-20rem] z-20"
          />
          <img
            src="/images/image-mockups.png"
            alt="img"
            className="object-cover w-full absolute z-30 top-[-25%] right-[-17%]"
          />
        </div>
      </div>
      <div className="h-80 bg-amber-300">d</div>
    </>
  );
}

export default Hero;

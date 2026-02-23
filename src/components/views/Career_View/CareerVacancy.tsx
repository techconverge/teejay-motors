import clsx from "clsx";
import React from "react";
import CareerVacncyList from "./CareerVacncyList";

function CareerVacancy() {
  return (
    <div className=" container flex flex-col justify-center items-center  py-20">
      <div
        className={clsx(
          ` text-center  lg:max-w-5xl flex-items-col !items-center `
        )}
      >
        <div className={clsx("text-center flex-items-col !items-center")}>
          <div className="w-10 bg-primary h-1 mb-2 rounded-full"></div>
          <h3 className={"subheading"}> Vacancy</h3>
        </div>
        <h1 className=" font-clash my-2 text-2xl px-10  lg:!text-5xl lg:max-w-2xl lg:!leading-tight font-medium">
          Explore open positions at Teejay Motors.
        </h1>
      </div>
      <p className="  lg:max-w-5xl subtext px-4 lg:px-10 text-center mt-2">
        Joining Teejay Motors means becoming part of a team that’s shaping the
        future of mobility while making a real difference. We believe in
        empowering our employees to achieve their personal and professional
        aspirations by creating opportunities for growth, innovation, and
        impact. Throughout our journey, we’ve helped countless individuals
        realize their dreams while fostering an environment that inspires
        progress and supports potential. Your next career move could be the
        start of something extraordinary—for you and the communities we serve
      </p>
      <CareerVacncyList />
    </div>
  );
}

export default CareerVacancy;

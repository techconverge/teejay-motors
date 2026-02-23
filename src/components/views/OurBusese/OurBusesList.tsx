import BusCard from "@/components/shared/BusCard";
import React from "react";
import { Bus, fetchBuses } from "../Home_view/OurBuses";

async function OurBusesList() {
  const buses: Bus[] = await fetchBuses();
  return (
    <div className=" lg:mt-4 px-4 lg:px-10">
      <div className=" container grid grid-cols-1 gap-5 mt-16 mb-40 lg:grid-cols-3">
        {buses.slice(0, 3).map((bus) => (
          <BusCard
            key={bus._id}
            title={bus.title}
            numberOfSeats={bus.numberOfSeats}
            imageUrl={bus.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default OurBusesList;

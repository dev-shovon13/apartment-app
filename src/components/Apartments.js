import { useState } from "react";
import { BsChevronRight, BsChevronUp } from "react-icons/bs";

import { apartmentsData } from "../data/apartments";
import ApartmentCard from "./ApartmentCard";

const Apartments = () => {
  const [showMore, setShowMore] = useState(false);
  const apartments = showMore ? apartmentsData : apartmentsData.slice(0, 5);

  return (
    <div className="sm:container mx-auto w-9/12">
      <div className="mt-8 mb-4 flex justify-between items-end">
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800">
          All Apartments
        </p>
        <button className="text-cyan-600 flex items-center">
          <p className="mr-1" onClick={() => setShowMore(!showMore)}>
            Show&nbsp; {showMore ? "Less" : "All"}
          </p>
          {showMore ? <BsChevronUp /> : <BsChevronRight />}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mb-3">
        {apartments.map((apartment) => (
          <ApartmentCard key={apartment.id} data={apartment} />
        ))}
      </div>
    </div>
  );
};

export default Apartments;

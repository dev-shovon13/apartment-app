import { apartmentsData } from "../data/apartments";
import { BsChevronRight } from "react-icons/bs";

import ApartmentCard from "./ApartmentCard";

const Apartments = () => {
  return (
    <div className="sm:container mx-auto w-9/12">
      <div className="mt-8 mb-4 flex justify-between items-end">
        <p className="text-3xl font-bold text-slate-800">All Apartments</p>
        <button className="text-cyan-600 flex items-center">
          <p className="mr-1">Show All</p>
          <BsChevronRight />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {apartmentsData.map((apartment) => (
          <ApartmentCard data={apartment} />
        ))}
      </div>
    </div>
  );
};

export default Apartments;

import { BiArea, BiBath } from "react-icons/bi";
import { RiHotelBedLine } from "react-icons/ri";
import ApartmentImageCarousel from "./ApartmentImageCarousel";

const ApartmentCard = ({ data }) => {
  const { name, images, type, price, discountedPrice, rooms, bathrooms, size } =
    data;

  return (
    <div className="shadow-sm border-x border-b bg-white rounded-xl">
      <div className="flex justify-center relative">
        <ApartmentImageCarousel images={images} />
      </div>
      <div className="p-4">
        <p className="text-lg font-semibold">{name}</p>
        <div className="flex items-center my-3">
          <button className="border rounded-lg border-cyan-600 text-cyan-600 py-2 px-4">
            For <span className="capitalize">{type}</span>
          </button>
          <p className="text-cyan-600 ml-3 font-semibold text-lg">
            ${discountedPrice ? discountedPrice : price}
          </p>
          <p className="text-gray-400 line-through ml-3">
            {discountedPrice ? "$" + price : ""}
          </p>
        </div>
        <div className="flex justify-between text-gray-600">
          <div className="flex items-center">
            <BiArea />
            <p className="ml-1">{size} Sqft</p>
          </div>
          <div className="flex items-center">
            <RiHotelBedLine />
            <p className="ml-1">{rooms} Rooms</p>
          </div>
          <div className="flex items-center">
            <BiBath />
            <p className="ml-1">{bathrooms} Bath</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;

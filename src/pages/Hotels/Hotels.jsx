import { useEffect, useState } from "react";
import { getHotels } from "../../api/hotels";
import Loader from "../../components/Loader/Loader";
import HotelCard from "../../components/HotelCard/HotelCard";

function Hotels() {
  const [hotels, setHotel] = useState([]);

  useEffect(() => {
    getHotels().then((res) => {
      console.log("hotels", res);
      setHotel(res.data);
    });
  }, []);

  if (!hotels.length) {
    return <Loader />;
  }

  return (
    <div className=" py-8 px-4 md:px-10">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Hotels</h2>
        <span className="text-sm text-blue-600">
          Total {hotels.length} result
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {hotels.map((hotel) => {
          return <HotelCard key={hotel.id} hotel={hotel} />;
        })}
      </div>
    </div>
  );
}

export default Hotels;

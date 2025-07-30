import { useEffect, useState } from "react";
import { getHotelDetails } from "../../api/hotelDetails";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaCar,
  FaBath,
  FaCamera,
  FaWifi,
  FaStar,
} from "react-icons/fa";

function HotelDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    getHotelDetails(id)
      .then((res) => {
        setHotel(res.data);
        setSelectedImage(res.data.images.gallery[0]);
      })
      .catch(console.error);
  }, [id]);

  function handleClick() {
    navigate(`/booking/${hotel.id}`);
  }

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">
        {hotel?.name || "Hotel Details"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white shadow-lg rounded-xl p-4 sm:p-6">
        <div className="md:col-span-2 space-y-4">
          <img
            src={selectedImage}
            alt={hotel?.name}
            className="w-full h-64 sm:h-72 object-cover rounded-lg"
          />

          <div className="flex gap-2 overflow-x-auto">
            {hotel?.images?.gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-16 object-cover rounded-md border cursor-pointer ${
                  selectedImage === img ? "ring-2 ring-blue-500" : ""
                }`}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4 text-sm sm:text-base">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-xs sm:text-sm">Hotel review</p>
              <div className="flex items-center gap-1 text-blue-600 font-semibold">
                <span>4.9</span>
                <FaStar className="text-yellow-500" />
                <span className="text-gray-500 text-sm">(275 Review)</span>
              </div>
            </div>

            <div className="text-right">
              <p className="text-red-500 font-semibold text-sm">20% OFF</p>
              <div className="text-xl font-bold">
                399 <span className="text-sm font-normal">USD</span>
              </div>
              <p className="text-xs text-gray-500">Per night</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-1">About</h3>
            <p className="text-gray-600">{hotel?.description}</p>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <FaMapMarkerAlt className="text-blue-600" />
            <span>{hotel?.location || "Location not available"}</span>
          </div>

          <div>
            <h4 className="font-medium mb-1">Popular Services</h4>
            <div className="flex flex-wrap gap-4 text-gray-600">
              <span className="flex items-center gap-1">
                <FaCar /> Parking
              </span>
              <span className="flex items-center gap-1">
                <FaBath /> Bathroom
              </span>
              <span className="flex items-center gap-1">
                <FaCamera /> CCTV
              </span>
              <span className="flex items-center gap-1">
                <FaWifi /> Wifi
              </span>
            </div>
          </div>

          <button
            className="w-full bg-blue-600 text-white py-2 rounded-md mt-4 hover:bg-blue-700"
            onClick={handleClick}
          >
            PAY NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelDetails;

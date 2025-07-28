import { useNavigate } from "react-router-dom";

function RecommendedHotelCard({ hotel }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/booking/${hotel.id}`);
  }
  return (
    <div className="h-72 bg-white shadow-sm hover:shadow-md transition cursor-pointer rounded-xl p-4 flex flex-col justify-between">
      <div>
        <img
          src={hotel.images.gallery[0]}
          alt={hotel.name}
          className="rounded-md h-32 w-full object-cover mb-3"
        />
        <p className="text-[10px] uppercase text-gray-500 font-semibold">
          Hotel
        </p>
        <h3 className="text-sm font-semibold truncate">{hotel.name}</h3>
        <p className="text-xs text-gray-500 mb-2 line-clamp-2">
          {hotel.address.street}, {hotel.address.city}, {hotel.address.country}
        </p>
      </div>

      <button
        className="bg-red-100 text-red-500 text-sm px-4 py-1 rounded-full hover:bg-red-200 transition self-start cursor-pointer"
        onClick={handleClick}
      >
        Book Now
      </button>
    </div>
  );
}

export default RecommendedHotelCard;

import { useNavigate } from "react-router-dom";

function HotelCard({ hotel }) {
  const { name, address, amenities, images, pricing, rating } = hotel;
  const { discountedPrice, discount, currency } = pricing[0];
  const displayPrice = `${currency} ${discountedPrice}`;

  const navigate = useNavigate();
  function handleClick() {
    navigate(`/booking/${hotel.id}`);
  }
  function handleDetails() {
    navigate(`details/${hotel.id}`);
  }

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden">
      <div className="h-48 md:h-auto md:w-1/3">
        <img
          src={images.main}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="p-4 flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <h3 className="text-md font-semibold text-gray-800">{name}</h3>
            <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
              {Number(rating.score).toFixed(1)} ★
            </span>
          </div>

          <p className="text-sm text-gray-500">
            {address.city}, {address.state}
          </p>

          <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
            {amenities.slice(0, 2).map((item, idx) => (
              <span key={idx} className="flex items-center gap-1">
                <i className="fas fa-check-circle text-green-500" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-yellow-500 text-sm font-semibold">
            {discount}
          </span>
          <span className="text-lg font-bold text-gray-800">
            {displayPrice}
          </span>
        </div>

        <div className="mt-3 flex gap-2 flex-wrap">
          <button
            className="flex-1 text-sm border border-gray-300 rounded px-3 py-1 hover:bg-gray-100 cursor-pointer"
            onClick={handleDetails}
          >
            View Details
          </button>
          <button
            className="flex-1 text-sm bg-blue-600 text-white rounded px-4 py-1 hover:bg-blue-700 cursor-pointer"
            onClick={handleClick}
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;

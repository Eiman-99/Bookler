function HotelCard({ hotel }) {
  const { name, address, amenities, images, pricing, rating } = hotel;

  const { discountedPrice, discount, currency } = pricing[0];
  const displayPrice = `${currency} ${discountedPrice}`;
  return (
    <div className="flex bg-white rounded-xl shadow-md overflow-hidden">
      <div className="w-1/3 sm:w-1/2">
        <img
          className="object-cover h-full w-full"
          src={images.main}
          alt={name}
        />
      </div>
      <div className="p-4 w-2/3 sm:w-1/2 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
              {name}
            </h3>
            <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded w-13 ms-1">
              {Number(rating.score).toFixed(1)} ★
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            {address.city}, {address.state}
          </p>
          <div className="flex items-center gap-4 text-gray-600 text-sm mt-2 flex-wrap">
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

        <div className="mt-3 flex justify-between gap-2">
          <button className="text-sm border border-gray-300 rounded px-3 py-1 hover:bg-gray-100">
            View Details
          </button>
          <button className="text-sm bg-blue-600 text-white rounded px-4 py-1 hover:bg-blue-700">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;

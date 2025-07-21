function OfferCard({ offer }) {
  return (
    <div className="bg-white rounded-full flex items-center gap-3 px-3 py-2 shadow-sm hover:shadow-md transition cursor-pointer">
      <img
        src={offer.image}
        alt={offer.name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <p className="text-sm font-semibold">{offer.name}</p>
        <p className="text-xs text-gray-500">Best Hotel, villa</p>
      </div>
    </div>
  );
}

export default OfferCard;

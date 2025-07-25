import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import HotelCard from "../../components/HotelCard/HotelCard";

export default function HotelsSearch() {
  const [searchParams] = useSearchParams();
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  const q = searchParams.get("q");
  const country = searchParams.get("address.countryIsoCode");

  useEffect(() => {
    const fetchHotels = async () => {
      setLoading(true);

      try {
        const url = new URL("https://booking-app-db.vercel.app/hotels");
        if (q) url.searchParams.append("q", q);
        if (country) url.searchParams.append("address.countryIsoCode", country);

        const res = await fetch(url.toString());
        const data = await res.json();

        setHotels(data);
      } catch (error) {
        console.error("Error fetching hotels:", error);
        setHotels([]);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [q, country]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">
        {q ? `Search results for "${q}"` : "All Hotels"}
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : hotels.length === 0 ? (
        <p className="text-gray-500">No hotels found.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      )}
    </div>
  );
}

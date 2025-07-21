import { useEffect, useState } from "react";
import { getRecommenededHotels } from "../../api/recommended";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import RecommendedHotelCard from "../../components/RecommendedHotelCard/RecommendedHotelCard";
import { getBestOffer } from "../../api/offer";
import OfferCard from "../../components/OfferCard/OfferCard";
import Loader from "../../components/Loader/Loader";

export default function Home() {
  const [recommendedHotels, setRecommendedHotels] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    getRecommenededHotels().then((res) => {
      setRecommendedHotels(res.data);
    });
  }, []);

  useEffect(() => {
    getBestOffer().then((res) => {
      setOffers(res.data);
    });
  }, []);

  if (recommendedHotels.length === 0 || offers.length === 0) {
    return <Loader />;
  }

  return (
    <div className="p-6 space-y-10  min-h-screen">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recommended Hotels</h2>
          <a href="#" className="text-sm text-gray-500 hover:underline">
            View all
          </a>
        </div>
        <div className="w-full max-w-[70rem] p-0 ">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.2}
            navigation
            modules={[Navigation, Pagination]}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="my-8"
          >
            {recommendedHotels.map((hotel) => (
              <SwiperSlide key={hotel.id}>
                <RecommendedHotelCard hotel={hotel} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Best Offer</h2>
          <a href="#" className="text-sm text-gray-500 hover:underline">
            View all
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </div>
  );
}

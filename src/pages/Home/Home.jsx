import { useEffect, useState } from "react";
import { getRecommenededHotels } from "../../api/recommended";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function Home() {
  const [recommendedHotels, setRecommendedHotels] = useState([]);

  useEffect(() => {
    getRecommenededHotels().then((res) => {
      console.log(res.data);
      setRecommendedHotels(res.data);
    });
  }, []);
  return (
    <div className="p-6 space-y-10  min-h-screen">
      {/* Recommended Hotels */}
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
            {recommendedHotels.map((hotel, index) => (
              <SwiperSlide key={index}>
                <div className="h-72 bg-white shadow-md rounded-xl p-4 flex flex-col justify-between">
                  <div>
                    <img
                      src={hotel.images.gallery[0]}
                      alt={hotel.name}
                      className="rounded-md h-32 w-full object-cover mb-3"
                    />
                    <p className="text-[10px] uppercase text-gray-500 font-semibold">
                      Hotel
                    </p>
                    <h3 className="text-sm font-semibold truncate">
                      {hotel.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2 line-clamp-2">
                      {hotel.address.street}, {hotel.address.city},{" "}
                      {hotel.address.country}
                    </p>
                  </div>

                  <button className="bg-red-100 text-red-500 text-sm px-4 py-1 rounded-full hover:bg-red-200 transition self-start">
                    Book Now
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

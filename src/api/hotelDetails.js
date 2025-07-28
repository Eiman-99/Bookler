import axiosInstance from "./axios";

export const getHotelDetails = (id) => {
  return axiosInstance.get(`/hotels/${id}`);
};

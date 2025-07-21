import axiosInstance from "./axios";

export const getBestOffer = () => {
  return axiosInstance.get("/best_offer");
};

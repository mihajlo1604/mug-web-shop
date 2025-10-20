import { cache } from "react";
import axios from "utils/axiosInstance";
// Do not cache the main carousel so updates to images reflect immediately
const getMainCarousel = async () => {
  const response = await axios.get("/api/market-1/main-carousel", { headers: { "x-no-cache": "1" } });
  return response.data;
};
const getFlashDeals = cache(async () => {
  const response = await axios.get("/api/market-1/flash-deals");
  return response.data;
});
const getCategories = cache(async () => {
  const response = await axios.get("/api/market-1/categories");
  return response.data;
});
const getJustForYou = cache(async () => {
  const response = await axios.get("/api/market-1/just-for-you");
  return response.data;
});
const getNewArrivalList = cache(async () => {
  const response = await axios.get("/api/market-1/new-arrivals");
  return response.data;
});
const getShops = cache(async () => {
  const response = await axios.get("/api/market-1/shops");
  return response.data;
});
const getProducts = cache(async () => {
  const response = await axios.get("/api/market-1/products");
  return response.data;
});
const getBlogs = cache(async () => {
  const response = await axios.get("/api/market-1/blogs");
  return response.data;
});
const getServiceList = cache(async () => {
  const response = await axios.get("/api/market-1/services");
  return response.data;
});
export default {
  getMainCarousel,
  getFlashDeals,
  getNewArrivalList,
  getProducts,
  getShops,
  getBlogs,
  getCategories,
  getServiceList,
  getJustForYou
};
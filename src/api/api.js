import axios from "axios";

const api = axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
  params: {
    client_id: "q51bIIp2GyXuGso1Aop7DVLlBnjLHcphR1LVHVZANv0",
    per_page: 24,
  },
});

const fetchImages = async (query, page) => {
  const { data } = await api.get("", { params: { query, page } });
  return { images: data.results, totalPages: data.total_pages };
};

export default fetchImages;

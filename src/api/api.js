import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";
const CLIENT_ID = "q51bIIp2GyXuGso1Aop7DVLlBnjLHcphR1LVHVZANv0";

const fetchImages = async (query, page) => {
  const { data } = await axios.get(API_URL, {
    params: {
      query,
      page,
      per_page: 24,
      client_id: CLIENT_ID,
      content_filter: "high",
    },
  });
  return { images: data.results, totalPages: data.total_pages };
};

export default fetchImages;

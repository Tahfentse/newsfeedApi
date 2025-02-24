import axios from 'axios';

const API_URL = 'http://localhost:5000/api/news';

export const getNews = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;

    
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};

export const addNews = async (news) => {
  try {
    const response = await axios.post(API_URL, news);
    return response.data;
  } catch (error) {
    console.error("Error adding news:", error);
    throw error;
  }
};

export const deleteNews = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting news:", error);
    throw error;
  }
};

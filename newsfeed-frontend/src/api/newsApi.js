import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getNews = async () => (await axios.get(API_URL)).data;
export const addNews = async (news) => (await axios.post(API_URL, news)).data;
export const deleteNews = async (id) => await axios.delete(`${API_URL}/${id}`);

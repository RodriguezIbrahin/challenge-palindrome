import axios from "axios";

const API_URL = "http://localhost:8000/palindrome";

export const getPhrases = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postPhrase = async (phrase: string) => {
  try {
    const response = await axios.post(API_URL, {
      phrase,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePhrase = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

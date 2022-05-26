import axios from "axios";

const API = `http://localhost:5000/items`;

export const getItemList = async () => {
    const { data } = await axios.get(`${API}`);
    return data;
}

export const createNewItem = async (item) => {
    const { data } = await axios.post(`${API}`, item);
    return data;
  };

export const deleteItemQuery = async (id) => {
    const { data } = await axios.delete(`${API}/${id}`);
    return data;
  };

  export const updateItem = async (id, item) => {
    const { data } = await axios.put(`${API}/${id}`, item);
    return data;
  };
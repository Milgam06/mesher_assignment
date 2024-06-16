import { API_SUFFIX, instance } from "./api";

export const getPrice = async (id: string) => {
  try {
    const response = await instance.get(API_SUFFIX.PRICE + id);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

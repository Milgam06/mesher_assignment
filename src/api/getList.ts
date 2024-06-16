import { API_SUFFIX, instance } from "./api";

export const getList = async () => {
  try {
    const response = await instance.get(API_SUFFIX.LIST);
    console.log(response);
    console.log(API_SUFFIX.BASEURL, "adsfs");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

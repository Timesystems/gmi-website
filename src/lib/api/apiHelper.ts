import axiosInstance from './axiosInstance';

export const postRequest = async (
  endpoint: string,
  data: Record<string, any>
) => {
  const response = await axiosInstance.post(endpoint, data);
  return response.data;
};

import axios from 'axios';
import { API_URL, ApiPath } from 'src/constants/common';

const getUser = async (id: number) => {
  const response = await axios.get(`${API_URL}${ApiPath.users}/${id}`);
  const { data } = response;
  return data;
};

export { getUser };

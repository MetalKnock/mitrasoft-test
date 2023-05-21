import axios from 'axios';
import { API_URL, ApiPath } from 'src/constants/common';
import { Posts } from 'src/types/common.types';

const getAllPosts = async () => {
  const response = await axios.get<Posts>(`${API_URL}${ApiPath.posts}`);
  const { data } = response;
  return data;
};

export { getAllPosts };

import axios from 'axios';
import { API_URL, ApiPath } from 'src/constants/common';
import { Comments } from 'src/types/common.types';

const getCommentsForPost = async (query: string[]) => {
  const response = await axios.get<Comments>(`${API_URL}${ApiPath.comments}?${query.join('&')}`);
  const { data } = response;
  return data;
};

export { getCommentsForPost };

import { CommentsActionTypes } from 'src/constants/store';
import {
  FetchCommentsRejected,
  FetchCommentsRequest,
  FetchCommentsSuccess,
} from 'src/types/storeComments.types';

const fetchCommentsRequest: FetchCommentsRequest = (postId) => ({
  type: CommentsActionTypes.FETCH_COMMENTS_REQUEST,
  postId,
});

const fetchCommentsSuccess: FetchCommentsSuccess = (payload) => ({
  type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS,
  payload,
});

const fetchCommentsRejected: FetchCommentsRejected = (payload) => ({
  type: CommentsActionTypes.FETCH_COMMENTS_REJECTED,
  payload,
});

export { fetchCommentsRequest, fetchCommentsSuccess, fetchCommentsRejected };

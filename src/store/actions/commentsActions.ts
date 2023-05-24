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

const fetchCommentsSuccess: FetchCommentsSuccess = (postId, payload) => ({
  type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS,
  postId,
  payload,
});

const fetchCommentsRejected: FetchCommentsRejected = (postId, payload) => ({
  type: CommentsActionTypes.FETCH_COMMENTS_REJECTED,
  postId,
  payload,
});

export { fetchCommentsRequest, fetchCommentsSuccess, fetchCommentsRejected };

import { CommentsActionTypes } from 'src/constants/store';
import { CommentsAction, CommentsState } from 'src/types/storeComments.types';

const initialState: CommentsState = {
  comments: [],
  isLoadingPostIds: [],
  error: null,
};

const comments = (state = initialState, action: CommentsAction): CommentsState => {
  switch (action.type) {
    case CommentsActionTypes.FETCH_COMMENTS_REQUEST:
      return { ...state, isLoadingPostIds: [...state.isLoadingPostIds, action.postId] };
    case CommentsActionTypes.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, ...action.payload],
        isLoadingPostIds: [...state.isLoadingPostIds.filter((id) => id !== action.postId)],
        error: null,
      };
    case CommentsActionTypes.FETCH_COMMENTS_REJECTED:
      return {
        ...state,
        isLoadingPostIds: [...state.isLoadingPostIds.filter((id) => id !== action.postId)],
        error: action.payload,
      };
    default:
      return state;
  }
};

export { comments };

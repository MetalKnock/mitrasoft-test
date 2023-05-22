import { CommentsActionTypes } from 'src/constants/store';
import { CommentsAction, CommentsState } from 'src/types/storeComments.types';

const initialState: CommentsState = {
  comments: [],
  loading: false,
  error: null,
};

const comments = (state = initialState, action: CommentsAction): CommentsState => {
  switch (action.type) {
    case CommentsActionTypes.FETCH_COMMENTS_REQUEST:
      return { ...state, loading: true };
    case CommentsActionTypes.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, ...action.payload],
        loading: false,
        error: null,
      };
    case CommentsActionTypes.FETCH_COMMENTS_REJECTED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export { comments };

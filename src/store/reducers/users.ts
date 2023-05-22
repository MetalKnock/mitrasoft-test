import { UsersActionTypes } from 'src/constants/store';
import { UsersAction, UsersState } from 'src/types/storeUsers.types';

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

const users = (state = initialState, action: UsersAction): UsersState => {
  switch (action.type) {
    case UsersActionTypes.FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case UsersActionTypes.FETCH_USERS_SUCCESS:
      return { ...state, users: [...state.users, action.payload], loading: false, error: null };
    case UsersActionTypes.FETCH_USERS_REJECTED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export { users };

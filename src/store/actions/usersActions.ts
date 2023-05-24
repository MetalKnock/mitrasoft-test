import { UsersActionTypes } from 'src/constants/store';
import {
  FetchUsersRejected,
  FetchUsersRequest,
  FetchUsersSuccess,
} from 'src/types/storeUsers.types';

const fetchUsersRequest: FetchUsersRequest = (id) => ({
  type: UsersActionTypes.FETCH_USERS_REQUEST,
  id,
});

const fetchUsersSuccess: FetchUsersSuccess = (payload) => ({
  type: UsersActionTypes.FETCH_USERS_SUCCESS,
  payload,
});

const fetchUsersRejected: FetchUsersRejected = (payload) => ({
  type: UsersActionTypes.FETCH_USERS_REJECTED,
  payload,
});

export { fetchUsersRequest, fetchUsersSuccess, fetchUsersRejected };

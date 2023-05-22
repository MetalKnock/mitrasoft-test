import { User, Users } from 'src/types/common.types';
import { UsersActionTypes } from 'src/constants/store';

interface UsersState {
  users: Users;
  loading: boolean;
  error: string | null;
}

interface FetchUsersRequestAction {
  type: UsersActionTypes.FETCH_USERS_REQUEST;
  id: number;
}

interface FetchUsersSuccessAction {
  type: UsersActionTypes.FETCH_USERS_SUCCESS;
  payload: User;
}

interface FetchUsersRejectedAction {
  type: UsersActionTypes.FETCH_USERS_REJECTED;
  payload: string;
}

type UsersAction = FetchUsersRequestAction | FetchUsersSuccessAction | FetchUsersRejectedAction;

type FetchUsersRequest = (id: number) => FetchUsersRequestAction;
type FetchUsersSuccess = (payload: User) => FetchUsersSuccessAction;
type FetchUsersRejected = (payload: string) => FetchUsersRejectedAction;

export type {
  UsersState,
  FetchUsersRequestAction,
  FetchUsersSuccessAction,
  FetchUsersRejectedAction,
  UsersAction,
  FetchUsersRequest,
  FetchUsersSuccess,
  FetchUsersRejected,
};

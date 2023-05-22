import { combineReducers } from 'redux';
import { posts } from './posts';
import { users } from './users';
import { comments } from './comments';

const rootReducer = combineReducers({ posts });
const rootReducer = combineReducers({ posts, comments });

export type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };

import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reduce';

export default combineReducers({ auth, user });

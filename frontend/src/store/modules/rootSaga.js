import { all } from 'redux-saga/effects';

import auth from './auth/sagas';

export function* rootSaga(){
  return yield all([auth]);
}
import { call, put } from 'redux-saga/effects';
import { path } from 'ramda';
import TreatmentCenterActions from '../Redux/TreatmentCenterRedux';

export function* getTreatmentCenters(api, action) {
  const response = yield call(api.getTreatmentCenters);

  if (response.ok) {
    const treatmentCenters = path(['data'], response);
    yield put(TreatmentCenterActions.treatmentCenterSuccess(treatmentCenters));
  } else {
    yield put(TreatmentCenterActions.treatmentCenterFailure());
  }
}

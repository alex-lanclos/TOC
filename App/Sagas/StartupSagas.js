import { put, select } from 'redux-saga/effects';
import TreatmentCenterActions, {
  TreatmentCenterSelectors,
} from '../Redux/TreatmentCenterRedux';
import { is } from 'ramda';

// exported to make available for tests
export const selectTreatmentCenters =
  TreatmentCenterSelectors.selectTreatmentCenters;

// process STARTUP actions
export function* startup(action) {
  const treatmentCenters = yield select(selectTreatmentCenters);
  if (!treatmentCenters) {
    yield put(TreatmentCenterActions.treatmentCenterRequest());
  }
}

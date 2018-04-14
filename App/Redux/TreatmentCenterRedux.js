import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  treatmentCenterRequest: null,
  treatmentCenterSuccess: ['treatmentCenters'],
  treatmentCenterFailure: null,
});

export const TreatmentCenterTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  treatmentCenters: null,
  fetching: null,
  error: null,
});

/* ------------- Selectors ------------- */

export const TreatmentCenterSelectors = {
  selectTreatmentCenters: state => state.centers.treatmentCenters,
  selectFetching: state => state.centers.fetching,
  selectError: state => state.centers.error,
};

/* ------------- Reducers ------------- */

// request the avatar for a user
export const treatmentCenterRequest = state =>
  state.merge({ fetching: true, error: null });

// successful avatar lookup
export const treatmentCenterSuccess = (state, action) => {
  const { treatmentCenters } = action;
  return state.merge({ fetching: false, error: null, treatmentCenters });
};

// failed to get the avatar
export const treatmentCenterFailure = state =>
  state.merge({ fetching: false, error: true });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TREATMENT_CENTER_REQUEST]: treatmentCenterRequest,
  [Types.TREATMENT_CENTER_SUCCESS]: treatmentCenterSuccess,
  [Types.TREATMENT_CENTER_FAILURE]: treatmentCenterFailure,
});

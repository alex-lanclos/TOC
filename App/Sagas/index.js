import { takeLatest, all } from 'redux-saga/effects';
import API from '../Services/Api';
import FixtureAPI from '../Services/FixtureApi';
import DebugConfig from '../Config/DebugConfig';

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux';
import { TreatmentCenterTypes } from '../Redux/TreatmentCenterRedux';

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas';
import { getTreatmentCenters } from './TreatmentCenterSagas';

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create();
// const api = FixtureAPI;

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(
      TreatmentCenterTypes.TREATMENT_CENTER_REQUEST,
      getTreatmentCenters,
      api,
    ),
  ]);
}

import { StackNavigator } from 'react-navigation';
import LaunchScreen from '../Containers/LaunchScreen';
import FacilityMapScreen from '../Containers/FacilityMapScreen';
import HotLinesScreen from '../Containers/HotLinesScreen';
import IntroQuestionsScreen from '../Containers/IntroQuestionsScreen';
import SignsAndSymptomsScreen from '../Containers/SignsAndSymptomsScreen';
import TreatmentCenterScreen from '../Containers/TreatmentCenterScreen';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    FacilityMapScreen: { screen: FacilityMapScreen },
    HotLinesScreen: { screen: HotLinesScreen },
    IntroQuestionsScreen: { screen: IntroQuestionsScreen },
    SignsAndSymptomsScreen: { screen: SignsAndSymptomsScreen },
    TreatmentCenterScreen: { screen: TreatmentCenterScreen },
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);

export default PrimaryNav;

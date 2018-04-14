import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  Image,
  View,
  Button,
  TouchableOpacity,
  Linking,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js';
import BackArrow from '../Components/BackArrow';

import Communications from 'react-native-communications';

import { Images, Colors } from '../Themes';

// Styles
import styles from './Styles/TreatmentCenterScreenStyles';

//person-outline MaterialIcons

export default class FacilityMapScreen extends Component {
  render() {
    const { params } = this.props.navigation.state;
    const treatmentCenter = params ? params.treatmentCenter : null;

    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <BackArrow context={this} />

        <Text style={styles.categoryText}>{treatmentCenter.name1}</Text>
        <Text style={styles.sectionText}>
          &#8226; Tend to be loopy and giggly but will then resort to anger and
          sadness
        </Text>
      </View>
    );
  }
}

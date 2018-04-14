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
  _renderAddress(treatmentCenter) {
    if (treatmentCenter.street2 && treatmentCenter.street2 !== '') {
      return (
        <View>
          <Text style={styles.valueText}>{treatmentCenter.street1}</Text>
          <Text style={styles.valueText}>{treatmentCenter.street2}</Text>
          <Text style={styles.valueText}>
            {treatmentCenter.city +
              ', ' +
              treatmentCenter.state +
              ' ' +
              treatmentCenter.zip}
          </Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text style={styles.valueText}>{treatmentCenter.street1}</Text>
          <Text style={styles.valueText}>
            {treatmentCenter.city +
              ', ' +
              treatmentCenter.state +
              ' ' +
              treatmentCenter.zip}
          </Text>
        </View>
      );
    }
  }

  _renderWebsite(treatmentCenter) {
    let website = treatmentCenter.website;

    if (website && website !== '' && website !== 'http://') {
      return (
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text style={styles.titleText}>Website:</Text>
          <Text
            style={[styles.valueText, { color: Colors.buttonImageColor }]}
            onPress={() => Linking.openURL(website)}>
            {website}
          </Text>
        </View>
      );
    }
  }

  render() {
    const { params } = this.props.navigation.state;
    const treatmentCenter = params ? params.treatmentCenter : null;

    console.tron.log(treatmentCenter);

    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <BackArrow context={this} />
        <Text style={[styles.categoryText, { marginTop: 80 }]}>
          {treatmentCenter.name1}
        </Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text style={styles.titleText}>Phone:</Text>
          <Text style={styles.valueText}>{treatmentCenter.phone}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text style={styles.titleText}>Address:</Text>
          {this._renderAddress(treatmentCenter)}
        </View>
        {this._renderWebsite(treatmentCenter)}
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text style={styles.titleText}>Service:</Text>
          <Text style={styles.valueText}>{treatmentCenter.service}</Text>
        </View>
      </View>
    );
  }
}

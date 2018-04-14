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
import styles from './Styles/HotLinesScreenStyles';

//person-outline MaterialIcons

export default class FacilityMapScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        {/* Add your heartfelt message here.*/}
        <Text
          style={[
            styles.sectionText,
            { marginTop: 70, marginHorizontal: 20, fontSize: 18 },
          ]}>
          You don't have to struggle on your own. Call these numbers or use thes
          forums to reach out and get help.
        </Text>

        <Text style={[styles.sectionText, { marginTop: 30, fontSize: 22 }]}>
          Hotlines
        </Text>

        <Text
          style={[
            styles.subSectionText,
            { color: Colors.buttonImageColor, fontSize: 25 },
          ]}
          onPress={() => Communications.phonecall('1-888-775-9177', true)}>
          Narconon
        </Text>

        <Text
          style={[
            styles.subSectionText,
            { color: Colors.buttonImageColor, marginTop: 20, fontSize: 25 },
          ]}
          onPress={() => Communications.phonecall('1-877-795-1242', true)}>
          Addiction Blog
        </Text>

        <Text
          style={[
            styles.subSectionText,
            { color: Colors.buttonImageColor, marginTop: 20, fontSize: 25 },
          ]}
          onPress={() => Communications.phonecall('800-406-7633', true)}>
          Nationwide Rehab Center
        </Text>

        {/* These will be the forums below */}

        <Text style={[styles.sectionText, { marginTop: 30, fontSize: 22 }]}>
          Forum
        </Text>

        <Text
          style={[
            styles.subSectionText,
            { color: Colors.buttonImageColor, fontSize: 25 },
          ]}
          onPress={() => Linking.openURL('https://talk.drugabuse.com/')}>
          Talk Drug Abuse
        </Text>

        <BackArrow context={this} />
      </View>
    );
  }
}

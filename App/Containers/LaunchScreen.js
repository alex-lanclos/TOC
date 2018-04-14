import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  Image,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js';

import { Images, Colors } from '../Themes';

// Styles
import styles from './Styles/LaunchScreenStyles';

//person-outline MaterialIcons

export default class LaunchScreen extends Component {
  openFacilityMap = () => {
    this.props.navigation.navigate('FacilityMapScreen');
  };

  openSignsAndSymptoms = () => {
    this.props.navigation.navigate('SignsAndSymptomsScreen');
  };

  openHotlines = () => {
    this.props.navigation.navigate('HotLinesScreen');
  };

  openIntroQuestions = () => {
    this.props.navigation.navigate('IntroQuestionsScreen');
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={true}
          style={styles.container}>
          <View style={styles.logo}>
            <FontAwesome
              name="map-signs"
              color={Colors.buttonImageColor}
              size={100}
            />
          </View>

          <Text style={styles.headerText}>The Opioid Crossroads</Text>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.componentButton]}
              onPress={this.openFacilityMap}>
              <MaterialCommunityIcons
                name="home-map-marker"
                color={Colors.buttonImageColor}
                size={50}
              />
              <Text style={styles.buttonLabel}>Facility Map</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.componentButton]}
              onPress={this.openSignsAndSymptoms}>
              <Entypo
                name="awareness-ribbon"
                color={Colors.buttonImageColor}
                size={50}
              />
              <Text style={styles.buttonLabel}>Signs and Symptoms</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.componentButton]}
              onPress={this.openHotlines}>
              <MaterialCommunityIcons
                name="phone-in-talk"
                color={Colors.buttonImageColor}
                size={50}
              />
              <Text style={styles.buttonLabel}>Hotlines</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.buttonContainer, styles.componentButton]}
              onPress={this.openIntroQuestions}>
              <MaterialIcons
                name="question-answer"
                color={Colors.buttonImageColor}
                size={50}
              />
              <Text style={styles.buttonLabel}>Intro Questions</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

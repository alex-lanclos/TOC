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
import BackArrow from '../Components/BackArrow';

import { Images, Colors } from '../Themes';

import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';

// Styles
import styles from './Styles/SignsAndSymptomsScreenStyle';

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
        <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack(null);
            }}
            style={{
              paddingTop: 30,
              paddingHorizontal: 10,
              zIndex: 10,
            }}>
            <MaterialCommunityIcons
              name="keyboard-backspace"
              color={Colors.snow}
              size={30}
            />
          </TouchableOpacity>
        </View>

        <IndicatorViewPager
          style={{ flex: 1 }}
          indicator={<PagerDotIndicator pageCount={4} />}>
          <View style={{ backgroundColor: '#4c7e80' }}>
            <Text style={styles.categoryText}>Behavior</Text>
            <Text style={styles.sectionText}>
              &#8226; Tend to be loopy and giggly but will then resort to anger
              and sadness
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Resort to, stealing, lying, and tend to engage in
              dangerous activities
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Will zone out and trail off mid-sentence
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Slurring of their words and are off balance
            </Text>
          </View>
          <View style={{ backgroundColor: '#1c5253' }}>
            <Text style={styles.categoryText}>Neglect of Responsibilities</Text>
            <Text style={styles.sectionText}>
              &#8226; Refuse to go to school or work
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Neglect their children and put them off
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Refuse to do the smallest of things and will not listen
            </Text>
          </View>
          <View style={{ backgroundColor: '#54556c' }}>
            <Text style={styles.categoryText}>Appearance</Text>
            <Text style={styles.sectionText}>
              &#8226; Disheveled and unkempt
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Pupils unnaturally large/small
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Glossy eyes or bloodshot
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Clusters of small sores surronding a certain area are
              called track marks and those form whenever drugs have been
              injected into a bloodstream
            </Text>
          </View>
          <View style={{ backgroundColor: '#115d76' }}>
            <Text style={styles.categoryText}>Symptoms</Text>
            <Text style={styles.sectionText}>&#8226; Loss sense of smell </Text>
            <Text style={styles.sectionText}>
              &#8226; Sudden weight loss or gain
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Tremors and impaired coordination{' '}
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Jerky and spastic movement
            </Text>
            <Text style={styles.sectionText}>&#8226; Rapid loss of hair</Text>
            <Text style={styles.sectionText}>
              &#8226; Skin infections and frequent nose bleeds
            </Text>
            <Text style={[styles.sectionText]}>
              &#8226; Nose and throat will become excessively dry in short burst
            </Text>
          </View>
        </IndicatorViewPager>

        {/* <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={true}
          style={styles.container}>
          <Text
            style={[
              styles.sectionText,
              { marginVertical: 10, fontSize: 22, textAlign: 'center' },
            ]}>
            Signs and Symptoms
          </Text>
          <View
            style={{
              backgroundColor: Colors.buttonColor,
              marginHorizontal: 16,
              paddingVertical: 5,
              marginVertical: 5,
            }}>
            <Text style={styles.categoryText}>Behavior</Text>
            <Text style={styles.sectionText}>
              &#8226; Tend to be loopy and giggly but will then resort to anger
              and sadness
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Resort to, stealing, lying, and tend to engage in
              dangerous activities
            </Text>

            <Text style={styles.sectionText}>
              &#8226; Will zone out and trail off mid-sentence
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Slurring of their words and are off balance
            </Text>
          </View>

          <View
            style={{
              backgroundColor: Colors.buttonColor,
              marginHorizontal: 16,
              paddingVertical: 5,
              marginVertical: 5,
            }}>
            <Text style={styles.categoryText}>
              Neglect of Responsibilities{' '}
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Refuse to go to school or work{' '}
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Neglect their children and put them off{' '}
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Refuse to do the smallest of things and will not listen
            </Text>
          </View>

          <View
            style={{
              backgroundColor: Colors.buttonColor,
              marginHorizontal: 16,
              paddingVertical: 5,
              marginVertical: 5,
            }}>
            <Text style={styles.categoryText}>Appearance </Text>
            <Text style={styles.sectionText}>
              &#8226; Disheveled and unkempt{' '}
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Pupils unnaturally large/small{' '}
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Glossy eyes or bloodshot{' '}
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Clusters of small sores surronding a certain area are
              called track marks and those form whenever drugs have been
              injected into a bloodstream
            </Text>
          </View>

          <View
            style={{
              backgroundColor: Colors.buttonColor,
              marginHorizontal: 16,
              paddingVertical: 5,
              marginVertical: 5,
            }}>
            <Text style={styles.categoryText}>Symptoms </Text>
            <Text style={styles.sectionText}>&#8226; Loss sense of smell </Text>
            <Text style={styles.sectionText}>
              &#8226; Sudden weight loss or gain
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Tremors and impaired coordination{' '}
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Jerky and spastic movement
            </Text>
            <Text style={styles.sectionText}>&#8226; Rapid loss of hair</Text>
            <Text style={styles.sectionText}>
              &#8226; Skin infections and frequent nose bleeds
            </Text>
            <Text style={[styles.sectionText]}>
              &#8226; Nose and throat will become excessively dry in short burst
            </Text>
          </View>
        </ScrollView> */}
      </View>
    );
  }
}

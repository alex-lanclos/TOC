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

import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';
import BackArrow from '../Components/BackArrow';

import { Images, Colors } from '../Themes';

// Styles
import styles from './Styles/IntroQuestionsScreenStyles';

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
          indicator={<PagerDotIndicator pageCount={5} />}>
          <View style={{ backgroundColor: '#4c7e80' }}>
            <Text style={styles.categoryText}>
              Invite Your Loved One To Change
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Invite the loved one to a gathing of friends and family in
              a non-judgemental manner
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Be sure to remind them that you care about them and are
              doing this for their well being
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Don't force them into coming and don't spring it on them.
              They are more likely to come at their own free will if you ask
              passively
            </Text>
          </View>
          <View style={{ backgroundColor: '#1c5253' }}>
            <Text style={styles.categoryText}>
              Don't Blame Or Shame The Addict
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Blame and shame are two things most addicts feel them
              selves. Addiction is a mental illness and should be treated as
              such
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Use phrases such as "I'm frightned that you are using
              drugs again and I fear for your life. What can I do to help you?"
            </Text>
          </View>
          <View style={{ backgroundColor: '#54556c' }}>
            <Text style={styles.categoryText}>Offer Hope For The Future</Text>
            <Text style={styles.sectionText}>
              &#8226; Give them an idea of what could come in the future if they
              got clean
            </Text>
            <Text style={styles.sectionText}>
              &#8226; It is important to let them know that you think they could
              still have a better future{' '}
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Use phrases such as "My wish is that if you get clean you
              could reagain the confidence and dreams you once had."
            </Text>
          </View>
          <View style={{ backgroundColor: '#115d76' }}>
            <Text style={styles.categoryText}>
              Love, Appreciation, and Respect
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Addiction draws lots of disrespect. Showing your loved one
              that you still respect them can make all the difference
            </Text>
            <Text style={styles.sectionText}>
              &#8226; Being loving, appreciative and respectful of the addict
              encourages them to reflect those sentiments back to their loved
              ones
            </Text>
          </View>
          <View style={{ backgroundColor: '#4c7e80' }}>
            <Text style={styles.categoryText}>
              Enlist The Help Of An Addiction Professional
            </Text>
            <Text style={styles.sectionText}>
              &#8226; The behavior of drug use is a symptom of intricate
              biology. After you have done, or tried, all other prompts contact
              a professional to help carry out the final steps of becoming sober
            </Text>
          </View>
        </IndicatorViewPager>
      </View>
    );
  }
}

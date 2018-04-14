import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Styles/ButtonBoxStyles';

import { Images, Colors } from '../Themes';

export default class BackArrow extends React.Component {
  static propTypes = {
    context: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.context.props.navigation.goBack(null);
        }}
        style={{
          position: 'absolute',
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
    );
  }
}

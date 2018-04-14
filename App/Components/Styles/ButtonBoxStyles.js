import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../Themes/';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.buttonColor,
    width: Metrics.screenWidth / 2,
    aspectRatio: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Metrics.icons.xl,
    height: Metrics.icons.xl,
    margin: Metrics.baseMargin,
  },
  label: {
    ...Fonts.style.h2,
    fontSize: 16,
    color: Colors.text,
  },
});

import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts, ApplicationStyles } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingTop: 0,
    paddingBottom: 10,
  },
  logo: {
    alignItems: 'center',
    marginTop: Metrics.doubleBaseMargin,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  centered: {
    alignItems: 'center',
  },
  componentButton: {
    borderColor: Colors.border,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  apiButton: {
    borderColor: Colors.border,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  usageButton: {
    borderColor: Colors.border,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  deviceButton: {
    borderColor: Colors.border,
    borderRightWidth: 1,
    borderTopWidth: 1,
  },
  headerText: {
    textAlign: 'center',
    fontFamily: Fonts.base,
    fontSize: 40,
    marginHorizontal: Metrics.baseMargin,
    marginVertical: Metrics.doubleBaseMargin,
    color: Colors.text,
  },
  categoryText: {
    textAlign: 'center',
    fontFamily: Fonts.base,
    fontSize: 26,
    marginTop: 20,
    marginHorizontal: Metrics.baseMargin,
    color: Colors.text,
  },
  sectionText: {
    textAlign: 'left',
    fontFamily: Fonts.base,
    fontSize: 22,
    marginTop: Metrics.baseMargin,
    marginHorizontal: Metrics.doubleBaseMargin,
    color: Colors.text,
  },
  subSectionText: {
    textAlign: 'left',
    fontFamily: Fonts.base,
    fontSize: 22,
    marginHorizontal: Metrics.baseMargin,
    color: Colors.text,
  },
  banner: {
    position: 'absolute',
    width: Metrics.screenWidth,
    backgroundColor: Colors.banner,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    height: 36,
  },
  bannerLabel: {
    ...Fonts.style.h5,
    fontSize: 12,
    color: Colors.snow,
  },
  buttonContainer: {
    backgroundColor: Colors.buttonColor,
    width: Metrics.screenWidth / 2,
    aspectRatio: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImage: {
    width: Metrics.icons.xl,
    height: Metrics.icons.xl,
    margin: Metrics.baseMargin,
  },
  buttonLabel: {
    ...Fonts.style.h2,
    fontSize: 16,
    color: Colors.text,
  },
});

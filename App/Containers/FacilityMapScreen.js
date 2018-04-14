import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import MapView, { Marker } from 'react-native-maps';
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js';
import ExitButton from '../Components/ExitButton';

import TreatmentCenterActions from '../Redux/TreatmentCenterRedux';

import { Images, Colors } from '../Themes';

// Styles
import styles from './Styles/FacilityMapScreenStyles';

//person-outline MaterialIcons

class FacilityMapScreen extends Component {
  render() {
    let refreshColor = this.props.fetching ? Colors.facebook : Colors.fire;

    return (
      <View style={styles.mainContainer}>
        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 30.2241,
            longitude: -92.0198,
            latitudeDelta: 0.9,
            longitudeDelta: 0.9,
          }}>
          {this.props.treatmentCenters.map((marker, index) => (
            <Marker
              key={index.toString()}
              identifier={index.toString()}
              coordinate={{
                latitude: parseInt(marker.latitude),
                longitude: parseInt(marker.longitude),
              }}
              title={marker.name1}
              onPress={e => {
                let treatmentCenter = this.props.treatmentCenters[
                  parseInt(e.nativeEvent.id)
                ];
                this.props.navigation.navigate('TreatmentCenterScreen', {
                  treatmentCenter,
                });
              }}
            />
          ))}
        </MapView>
        {/* {this.props.treatmentCenters.map((marker, index) => {
          return (
            <Marker
              key={marker.name1 + '_' + marker.service}
              identifier={marker}
              coordinate={{
                latitude: parseInt(marker.latitude),
                longitude: parseInt(marker.longitude),
              }}
              title={marker.name1}
              onPress={e => {
                // let treatmentCenter = this.props.treatmentCenters[e.target];
                // this.props.navigation.navigate('TreatmentCenterScreen', {
                //   treatmentCenter,
                // });
                console.tron.log(e.nativeEvent);
              }}
            />
          );
        })} */}

        {/* <Marker
          key={marker.id}
          coordinate={{
            latitude: parseInt(marker.address.location.latitude),
            longitude: parseInt(marker.address.location.longitude),
          }}
          title={marker.facility.name}
        /> */}

        <ExitButton context={this} />

        <TouchableOpacity
          onPress={() => {
            this.props.refreshTreatmentCenters();
          }}
          style={{
            alignSelf: 'flex-end',
            position: 'absolute',
            paddingTop: 30,
            paddingHorizontal: 10,
            zIndex: 10,
          }}>
          <MaterialCommunityIcons
            name="refresh"
            color={refreshColor}
            size={40}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  treatmentCenters: state.centers.treatmentCenters,
  fetching: state.centers.fetching,
});

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = dispatch => ({
  refreshTreatmentCenters: () =>
    dispatch(TreatmentCenterActions.treatmentCenterRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FacilityMapScreen);

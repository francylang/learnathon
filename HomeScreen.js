import React from 'react';
import {Button, View} from 'react-native';
import SegmentedControlIOS from '@react-native-community/segmented-control';
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <SegmentedControlIOS values={['34', '36']} />
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Profile', {name: 'Jane'})}
        />
      </View>
    );
  }
}

export default HomeScreen;

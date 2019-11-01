import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import SegmentedControlIOS from '@react-native-community/segmented-control';

export const PeopleScreen = ({navigation}) => {
  const [tab, setTabs] = useState(0);
  const handleTabPress = () => {
    if (tab === 0) {
      console.error('hit me');
      return (
        <View>
          <Text>PEOPLE 34</Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text>PEOPLE 36</Text>
        </View>
      );
    }
  };

  return (
    <View>
      <SegmentedControlIOS
        values={['34', '36']}
        selectedIndex={tab}
        onChange={event => setTabs(event.nativeEvent.selectedSegmentIndex)}
        onValueChage={handleTabPress}
      />

      {/* <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      /> */}
    </View>
  );
};

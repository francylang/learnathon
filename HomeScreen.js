import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import SegmentedControlIOS from '@react-native-community/segmented-control';
export const HomeScreen = ({navigation}) => {
  const [tab, setTabs] = useState(0);

  return (
    <View>
      <SegmentedControlIOS
        values={['34', '36']}
        selectedIndex={tab}
        onChange={event => setTabs(event.nativeEvent.selectedSegmentIndex)}
      />
      {tab === 0 ? (
        <View>
          <Text>FLOOR 34</Text>
        </View>
      ) : (
        <View>
          <Text>FLOOR 36</Text>
        </View>
      )}

      {/* <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      /> */}
    </View>
  );
};

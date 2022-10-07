import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


const App = () => {

  return (
    <View style={styles.background}>
      <Text>aaaaaaaaaaa</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    // radialGradient('131.68% 60.09% at 50% 39.91%, #00498A 0%, #001E3A 100%')
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

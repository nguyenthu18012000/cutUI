import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFA from 'react-native-vector-icons/FontAwesome5';

const screenWidth = Dimensions.get('window').width;

const App = () => {

  return (
    <View>
      <LinearGradient
        colors={['#001E3A', '#00498A', '#001E3A']}
        style={styles.gradient}
      >
        <View style={styles.header}>
          <View>
            <Icon name='close' style={styles.icon} />
          </View>
          <View>
            <Text style={styles.headerTitle}>King's Cup</Text>
          </View>
          <View>
            <IconMaterial name='chat-question-outline' style={styles.icon} />
          </View>
        </View>
        <View >
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

            <View
              style={{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                width: Dimensions.get('window').width * 0.8,
                height: Dimensions.get('window').width * 0.8,
                borderWidth: 0,
                borderColor: "none",
                justifyContent: 'center',
                alignItems: 'center'
              }}
              underlayColor='#ccc'
            >
              <Image
                source={require('./assets/images/cardback.png')}
                style={{ height: 50, width: 50, position: "absolute", bottom: Dimensions.get('window').width * 0.5, transform: [{rotate: '30deg'}] }}
              />
              <Image source={require('./assets/images/cardback.png')} style={{ height: 50, width: 50, position: "absolute", bottom: Dimensions.get('window').width * 0.7 }} />
              <Image source={require('./assets/images/cardback.png')} style={{ height: 50, width: 50, position: "absolute", bottom: Dimensions.get('window').width * 0.7 }} />
              <Image source={require('./assets/images/cardback.png')} style={{ height: 50, width: 50, position: "absolute", bottom: Dimensions.get('window').width * 0.7 }} />
              <Image source={require('./assets/images/cardback.png')} style={{ height: 50, width: 50, position: "absolute", bottom: Dimensions.get('window').width * 0.6, right: 20 }} />
              <Image source={require('./assets/images/cardback.png')} style={{ height: 50, width: 50, position: "absolute", bottom: Dimensions.get('window').width * 0.6, left: 20 }} />
              <Image source={require('./assets/images/cardback.png')} style={{ height: 50, width: 50, position: "absolute", top: Dimensions.get('window').width * 0.7 }} />
              <Image source={require('./assets/images/cardback.png')} style={{ height: 50, width: 50, position: "absolute", top: Dimensions.get('window').width * 0.6, right: 20 }} />
              <Image source={require('./assets/images/cardback.png')} style={{ height: 50, width: 50, position: "absolute", top: Dimensions.get('window').width * 0.6, left: 20 }} />
              <Image source={require('./assets/images/cardback.png')} style={{ height: 50, width: 50, position: "absolute", bottom: Dimensions.get('window').width * 0.3, left: -20 }} />
              <Image source={require('./assets/images/cardback.png')} style={{ height: 50, width: 50, position: "absolute", bottom: Dimensions.get('window').width * 0.3, right: -20 }} />
            </View>
          </View>

        </View>
        <View style={styles.dropArea}>
          <View></View>
          <View style={styles.dropSide}>
            <Text style={styles.dropText}>Kéo vào ô để mở</Text>
          </View>
          <View></View>
        </View>
        <View style={styles.infoGame}>
          <View></View>
          <View style={styles.content}>
            <IconMaterial name='cards-playing-diamond-outline' style={styles.cardIcon} />
            <Text style={styles.cardNumber}>50</Text>
          </View>
          <View style={styles.content}>
            <IconFA name='crown' style={styles.crownIcon} />
            <Text style={styles.cardNumber}>1</Text>
          </View>
          <View></View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20
  },
  headerTitle: {
    color: '#FFD700',
    fontSize: 20
  },
  icon: {
    fontSize: 20,
    color: 'white'
  },
  dropArea: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dropSide: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    height: 150,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    // opacity: 0.1,
    borderColor: 'white',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 5
  },
  dropText: {
    fontSize: 20,
    color: 'gray'
  },
  infoGame: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardIcon: {
    color: 'white',
    fontSize: 30
  },
  cardNumber: {
    color: 'white',
    padding: 6
  },
  crownIcon: {
    color: 'white',
    fontSize: 25
  },
});

export default App;

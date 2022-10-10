import React, { useRef } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  PanResponder,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Cards from './src/components/cards';
import { widthCard, heightCard } from './src/constants/constants';

const screenWidth = Dimensions.get('window').width;
const ringRadius = screenWidth * 0.5 / 2;
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
const numberOfCard = array.length;
const degree = 360 / numberOfCard;

const App = () => {

  return (
    <View>
      <LinearGradient
        colors={['#001E3A', '#00498A', '#001E3A']}
        style={styles.gradient}
      >
        <View style={styles.header}>
          <View>
            <Image source={require('./assets/images/X.png')} />
          </View>
          <View>
            <Text style={styles.headerTitle}>
              {/* King's Cup */}
            </Text>
          </View>
          <View>
            <Image source={require('./assets/images/question.png')} />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.layout}>
            <View style={styles.orderRing}>
              {array.map((item, key) => (
                  <Cards ordinal={key} degree={degree} />
              ))}
            </View>
          </View>
        </View>
        <View style={styles.dropArea}>
          <View></View>
          <View style={styles.dropSide} onLayout={event => console.log(event.nativeEvent.layout)}>
            <Text style={styles.dropText}>Kéo vào ô để mở</Text>
          </View>
          <View></View>
        </View>
        <View style={styles.infoGame}>
          <View></View>
          <View style={styles.content}>
            <Image source={require('./assets/images/card.png')} />
            <Text style={styles.cardNumber}>50</Text>
          </View>
          <View style={styles.content}>
            <Image source={require('./assets/images/crown.png')} />
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
    color: '#F5F3F3'
  },
  container: {
    width: screenWidth,
    height: screenWidth
  },
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  orderRing: {
    borderRadius: Math.round(screenWidth) / 2,
    width: ringRadius * 2,
    height: ringRadius * 2,
    borderWidth: 0,
    borderColor: "red",
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  orderItem: {
    // height: heightCard,
    // width: widthCard,
    position: "absolute",
    // backgroundColor: '#f0b6bc'
  },
  dropArea: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dropSide: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    height: 155,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 5
  },
  dropText: {
    fontSize: 22,
    color: '#FFFFFF',
    opacity: 0.6,
    alignItems: 'center'
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
    width: 15.59,
    height: 22.47,
    justifyContent: 'center'
  },
  cardNumber: {
    color: 'white',
    paddingLeft: 10
  },
  crownIcon: {
    color: 'yellow',
    fontSize: 20
  },
});

export default App;

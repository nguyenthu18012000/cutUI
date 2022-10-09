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

const pi = Math.PI;
const screenWidth = Dimensions.get('window').width;
const ringRadius = screenWidth * 0.5 / 2;
const array = [1,2,3,4,5,6,7,8,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
const numberOfCard = array.length;
const degree = 360 / numberOfCard;
const widthCard = 85.85;
const heightCard = 112.61;
const padding = (screenWidth / 2 - ringRadius);
console.log(padding, screenWidth / 2, ringRadius)

const App = () => {

  const convertDegreeToRadiant = (degree) => {
    return (degree/180) * pi;
  }

  const getTopPosition = (degree) => {
    const radiant = convertDegreeToRadiant(degree);
    const sin = Math.sin(radiant);
    return (1 - sin) * ringRadius - heightCard / 2;
  }

  const getLeftPosition = (degree) => {
    const radiant = convertDegreeToRadiant(degree);
    const cos = Math.cos(radiant);
    return (1 + cos) * ringRadius - widthCard / 2;
  }

  const getRotate = (index, degree) => {
    return (- index * degree + 90) + 'deg';
  }

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
        <View style={styles.container}>
          <View style={styles.layout}>
            <View style={styles.orderRing}>
              {array.map((item, key) => (
                  <Image
                  key={key}
                  source={require('./assets/images/cardback.png')}
                  style={
                    [
                      {
                        left:getLeftPosition(key * degree),
                        top: getTopPosition(key * degree),
                        transform: [{ rotate: getRotate(key, degree) }]
                      },
                      styles.orderItem
                    ]
                  }
                />)
              )}
            
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
    height: heightCard,
    width: widthCard,
    position: "absolute",
    backgroundColor: '#f0b6bc'
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
    borderColor: 'white',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 5
  },
  dropText: {
    fontSize: 20,
    color: 'white'
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

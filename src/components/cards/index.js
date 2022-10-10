import { View, Text, StyleSheet, Dimensions, PanResponder, Animated } from 'react-native';
import React, { useRef, useState } from 'react';
import Card from '../../../assets/images/cardback.svg';

const pi = Math.PI;
const screenWidth = Dimensions.get('window').width;
const ringRadius = screenWidth * 0.5 / 2;
const widthCard = 85.85;
const heightCard = 121.61;

const Cards = ({ ordinal, degree }) => {

    const [startPosition, setStartPosition] = useState();

    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: (event, gestureState) => {
                console.log('start====',gestureState)
                // setStartPosition()
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                });
            },
            onPanResponderMove: (event,gestureState) => {
                Animated.event(
                [
                    null,
                    { dx: pan.x, dy: pan.y }
                ]
            );
            console.log(gestureState)
            } ,
            onPanResponderRelease: (event, gestureState) => {
                console.log('end=====',gestureState)
                pan.flattenOffset();
            }
        })
    ).current;

    const convertDegreeToRadiant = (degree) => {
        return (degree / 180) * pi;
    }

    const getTopPosition = (degree) => {
        const radiant = convertDegreeToRadiant(degree);
        const sin = Math.sin(radiant);
        return (1 - sin) * ringRadius - heightCard / 2 + Math.random() * 5 - 100;
    }

    const getLeftPosition = (degree) => {
        const radiant = convertDegreeToRadiant(degree);
        const cos = Math.cos(radiant);
        return (1 - cos) * ringRadius - widthCard / 2 - 100;
    }

    const getRotate = (index, degree) => {
        return (index * degree - 90 + Math.random() * 5) + 'deg';
    }
    return (
        <Animated.View
            style={{
                transform: [{ translateX: pan.x }, { translateY: pan.y }]
            }}
            {...panResponder.panHandlers}
        >

            <Card
                style={
                    [
                        {
                            left: getLeftPosition(ordinal * degree),
                            top: getTopPosition(ordinal * degree),
                            transform: [{ rotate: getRotate(ordinal, degree) }]
                        },
                        styles.orderItem
                    ]
                }
            />
        </Animated.View>
    )
};

const styles = StyleSheet.create({
    orderItem: {
        // height: heightCard,
        // width: widthCard,
        position: "absolute",
        // backgroundColor: '#f0b6bc'
    },
});

export default Cards;

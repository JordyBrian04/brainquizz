import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../utils/colors';

const Carousel = () => {
    const [currentPosition, setCurrentPosition] = useState(0);

    setTimeout(() => {
      if (currentPosition === 0) {
        setCurrentPosition(currentPosition + 1);
      } else if (currentPosition === 1) {
        setCurrentPosition(currentPosition + 1);
      } else {
        setCurrentPosition(currentPosition - 2);
      }
    }, 2000);
  
  return (
    <View
        style={{
          backgroundColor: COLORS.ORANGEDARK,
          height: 150,
          borderRadius: 20,
          marginTop: 18,
          marginBottom: 10,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 145,
          }}>
          <View>
            <Text style={{color: COLORS.WHITE, width: 200}}>
               {currentPosition === 0
              ? 'Donnez votre avis, posez une discussion dans les commentaires.'
              : currentPosition === 1
              ? 'ne donneons pas a tout le monde'
              : 'donnons le si on le veut ca epend'}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 30,
                justifyContent: 'space-between',
                width: '20%',
              }}>
              <View
                style={{
                  backgroundColor:
                    currentPosition === 0
                      ? 'orange'
                      : currentPosition === 1
                      ? 'white'
                      : 'white',
                  height: 10,
                  width: 10,
                  borderRadius: 20,
                }}
              />
              <View
                style={{
                  backgroundColor:
                    currentPosition === 0
                      ? 'white'
                      : currentPosition === 1
                      ? 'orange'
                      : 'white',
                  height: 10,
                  width: 10,
                  borderRadius: 20,
                }}
              />
              <View
                style={{
                  backgroundColor:
                    currentPosition === 0
                      ? 'white'
                      : currentPosition === 1
                      ? 'white'
                      : 'orange',
                  height: 10,
                  width: 10,
                  borderRadius: 20,
                }}
              />
            </View>
          </View>

          <View
            style={{
              width: 100,
              alignItems: 'center',
              justifyContent: 'center',
              height: 100,
            }}>
            <Image
              source={require('../assets/quizpaper.png')}
              style={{width: 120, height: 120, resizeMode: 'contain'}}
            />
          </View>
        </View>
      </View>
  )
}

export default Carousel
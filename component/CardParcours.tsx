import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../utils/colors';
import Button from './Button';
import { LinearGradient } from 'expo-linear-gradient';

interface PropsCardParcours {
  onPress?: (params: any) => any;
  bgColor?: string;
  linearOne?: string;
  bgBtn: string;
  widthcustom?: string;
  title: string;
  textBtn: string;
  img: any;
  switchImage?: boolean;
}

const CardParcours = ({
  bgColor,
  onPress,
  linearOne,
  bgBtn,
  widthcustom = '70%',
  title,
  textBtn,
  img,
  switchImage,
}: PropsCardParcours) => {
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
    <LinearGradient
      colors={[
        linearOne == 'one'
          ? COLORS.VIOLET
          : linearOne == 'two'
          ? COLORS.ORANGE
          : COLORS.BLEULIGHT,
        linearOne == 'one'
          ? COLORS.ORANGE
          : linearOne == 'two'
          ? COLORS.YELLOWSKY
          : COLORS.BLEULIGHT,
      ]}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0.5}}
      style={[styles.cardGreen, {backgroundColor: bgColor}]}>
      <View style={styles.textAndDescription}>
        <Text style={styles.percent}>{title}</Text>
        {switchImage ? (
          <Text style={styles.description}>
            {currentPosition === 0
              ? 'Donnez votre avis, posez une discussion dans les commentaires.'
              : currentPosition === 1
              ? 'ne donnons pas a tout le monde'
              : 'donnons le si on le veut ca epend'}
          </Text>
        ) : (
          <Text style={styles.description}>
            Donnez votre avis, posez une discussion dans les commentaires.
          </Text>
        )}
        <View className='top-6' style={{width: widthcustom}}>
          {switchImage === false && <Button
            titleColor={COLORS.WHITE}
            bgColor={bgBtn}
            onPress={onPress}
            title={textBtn}
            heightCustom={50}
          />}
        </View>

        {switchImage && (
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
        )}
      </View>

      <View
        style={{
          width: 100,
          alignItems: 'center',
          justifyContent: 'center',
          height: 150,
        }}>
        <Image
          source={img}
          style={{width: 120, height: 120, resizeMode: 'contain'}}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  cardGreen: {
    width: '100%',
    height: 180,
    borderRadius: 30,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textAndDescription: {
    width: '70%',
  },
  percent: {
    fontSize: 20,
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
  description: {
    color: COLORS.WHITE,
    top: 10,
  },
  getText: {
    color: 'orange',
    top: 20,
  },
});

export default CardParcours;

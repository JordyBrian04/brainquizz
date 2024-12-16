import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import { COLORS } from '../../utils/colors';
import TextRulesQuiz from './TextRulesQuiz';
import Button from '../Button';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';

interface PropsCardRules {
    onPress?: (params: any) => any;
    btnShow?:boolean;
    status?: string;
}


const CardRules = ({onPress,btnShow, status}:PropsCardRules) => {
    const {goBack} = useNavigation();

    // const status = useAppSelector(
    //     (state: RootState) => state.brainsQuiz.statusQuiz,
    // );


    const bgColor = () => {
        switch (status) {
            case 'Gratuits':
                return COLORS.BLEULIGHT;
            case 'Payants':
                return COLORS.ROSE;
            case 'quizRecommend':
                return COLORS.GREENLIGHT
            case 'joinQuiz':
                return COLORS.VIOLETPUR
            default:
              return COLORS.ROSE;
          }
    }

  return (
    <View>
      <View
        style={[styles.card,{backgroundColor:bgColor()}]}>
        <View
          style={{
            backgroundColor: COLORS.GREENSKY,
            width: 180,
            height: 50,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            bottom: 20,
            transform: [{rotate: '-5deg'}],
          }}>
          <Text style={{color: COLORS.WHITE, fontWeight: '600', fontSize: 15}}>
            Règles du jeu
          </Text>
        </View>

        <View style={{alignSelf: 'center'}}>
          <Image source={require('../../assets/polices.png')} style={{width: 100, height: 100}} />
        </View>

        <TextRulesQuiz
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
          numero={1}
        />
        <TextRulesQuiz
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
          numero={2}
        />
        <TextRulesQuiz
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
          numero={3}
        />
        <TextRulesQuiz
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
          numero={4}
        />

        <View style={{width: '100%', marginTop: 30}}>
            {btnShow && (
                <Button
                    titleColor={COLORS.WHITE}
                    bgColor={COLORS.ORANGE}
                    onPress={onPress}
                    title="Je me lance"
                />
            )}

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        width: '100%',
        height: 490,
        marginTop: 60,
        borderRadius: 20,
        paddingHorizontal: 20,
    }
  });

export default CardRules
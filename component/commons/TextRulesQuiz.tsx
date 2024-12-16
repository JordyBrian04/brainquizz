import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../../utils/colors';

interface PropsTextRulesQuiz {
  numero?:number;
  text:string;
}

const TextRulesQuiz = ({numero,text}:PropsTextRulesQuiz) => {
  return (
    <View style={{marginTop:20}} >
      <View style={{flexDirection:'row'}} >
        <Text style={{color:COLORS.BLACK,fontSize:15,fontWeight:'bold'}} >{numero}.</Text>
        <Text style={{color:COLORS.WHITE,left:10}}>{text}</Text>
      </View>
    </View>
  )
}

export default TextRulesQuiz
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import CardRules from '../component/commons/CardRules'
import { AntDesign } from "@expo/vector-icons";

const QuizRules = ({navigation, route}:any) => {
    const status = route.params.status;
    const type_quiz = route.params.type_quiz

    const handleButton = () => {
        if(status === 'Payants'){
            navigation.navigate({name: 'SalleAttenteQuizz', params: {type_quiz: type_quiz, status: status}})
        }else{
            navigation.navigate({name: 'QuizzScreen', params: {type_quiz: type_quiz, status: status}})
        }
    }
  return (
    <View className="bg-[#F9F7F7] flex-1 pt-8 pr-3 pl-3">
        <ScrollView className='mt-6'>
            <TouchableOpacity
                className="flex-row items-center"
                onPress={() => navigation.goBack()}
            >
                <AntDesign name="left" size={24} color="orange" />
                <Text className="ml-1 text-[#FFB31B]">Retour</Text>
            </TouchableOpacity>

            <CardRules status={status} btnShow={true} onPress={handleButton}/>
        </ScrollView>
    </View>
  )
}

export default QuizRules
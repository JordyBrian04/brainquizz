import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import { QuizGratuit, QuizPayant } from "../services/apiService";

const ChoixQuiz = ({ navigation, route }: any) => {
  const [fontsLoaded] = useFonts({
    Bold: require("../assets/fonts/Poppins-Bold.ttf"),
    Regular: require("../assets/fonts/Poppins-Regular.ttf"),
    SemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    Medium: require("../assets/fonts/Poppins-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return undefined;
  }

  const [NationalQuiz, setNationalQuiz] = useState({
    id: "",
    titre: "",
    description: "",
    nombreQuestion : 0,
    gameId: "",
    prix : 0,
  })

  const [InternationalQuiz, setInternationalQuiz] = useState({
    id: "",
    titre: "",
    description: "",
    nombreQuestion : 0,
    gameId: "",
    prix : 0,
  })

  const status = route.params.status;

  useEffect(() => {
    const fetchData = async () => {
      if(status === "Gratuits"){
        await QuizGratuit()
        .then((quiz:any) => {
          setNationalQuiz({...NationalQuiz, 
            id: quiz.data.data[0].id,
            titre: quiz.data.data[0].name,
            description: quiz.data.data[0].description,
            nombreQuestion: quiz.data.data[0].numberOfQuestionsByGame,
          })

          setInternationalQuiz({...InternationalQuiz, 
            id: quiz.data.data[1].id,
            titre: quiz.data.data[1].name,
            description: quiz.data.data[1].description,
            nombreQuestion: quiz.data.data[1].numberOfQuestionsByGame,
          })
        })
      }

      //https://www.youtube.com/watch?v=uX5E_QFJubU

      if(status === "Payants"){
        await QuizPayant()
        .then((quiz:any) => {
          setNationalQuiz({...NationalQuiz, 
            id: quiz.data.data[0]?.id,
            titre: quiz.data.data[0]?.name,
            description: quiz.data.data[0]?.description,
            nombreQuestion: quiz.data.data[0]?.numberOfQuestionsByGame,
            prix: quiz.data.data[0]?.price,
            gameId: quiz.data.data[0]?.game?.id,
          })

          setInternationalQuiz({...InternationalQuiz, 
            id: quiz.data.data[1]?.id,
            titre: quiz.data.data[1]?.name,
            description: quiz.data.data[1]?.description,
            nombreQuestion: quiz.data.data[1]?.numberOfQuestionsByGame,
            prix: quiz.data.data[1]?.price,
            gameId: quiz.data.data[1]?.game?.id,
          })
        })
      }
    }

    fetchData()
  }, [])

  return (
    <View className="bg-[#F9F7F7] flex-1 pt-8 pr-3 pl-3">
      <ScrollView className="mt-6">
        <TouchableOpacity
            className="flex-row items-center"
            onPress={() => navigation.navigate("Tabs")}
        >
            <AntDesign name="left" size={24} color="orange" />
            <Text className="ml-1 text-[#FFB31B]">Retour</Text>
        </TouchableOpacity>

        <View>
            <LinearGradient
            colors={['#F9A22C', '#F9A22C','#1FD625']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1 }}
            className='rounded-2xl mt-6'
            >
                <View className='p-6'>

                    <View className="bg-white w-20 h-20 rounded-full items-center justify-center mb-4">
                        <Image source={require('../assets/local.png')} className="w-14 h-14" />
                    </View>

                    <Text className="text-[16px] text-white" style={{fontFamily: 'Medium'}}>{NationalQuiz.titre}</Text>
                    <Text className="text-[13px] text-white" style={{fontFamily: 'Regular'}}>{NationalQuiz.description}</Text>

                    <TouchableOpacity className="p-4 mt-4 items-center justify-center border-white border-2 rounded-2xl bg-[#FFB31B]" onPress={() => navigation.navigate({name: 'QuizRules', params:{status: status, type_quiz: 'national'}})}>
                        <Text className="text-xs text-white" style={{fontFamily: 'SemiBold'}}>Je me lance</Text>
                    </TouchableOpacity>

                </View>
            </LinearGradient>

            <View className='p-6 bg-[#34B4E2] mt-6 rounded-2xl mb-4'>

                <View className="bg-white w-20 h-20 rounded-full items-center justify-center mb-4">
                    <Image source={require('../assets/worldwide.png')} className="w-14 h-14" />
                </View>

                <Text className="text-[16px] text-white" style={{fontFamily: 'Medium'}}>{InternationalQuiz.titre}</Text>
                <Text className="text-[13px] text-white" style={{fontFamily: 'Regular'}}>{InternationalQuiz.description}</Text>

                <TouchableOpacity className="p-4 mt-4 items-center justify-center border-white border-2 rounded-2xl bg-[#FFB31B]" onPress={() => navigation.navigate({name: 'QuizRules', params:{status: status, type_quiz: 'internationnal'}})}>
                    <Text className="text-xs text-white" style={{fontFamily: 'SemiBold'}}>Je me lance</Text>
                </TouchableOpacity>

            </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChoixQuiz;

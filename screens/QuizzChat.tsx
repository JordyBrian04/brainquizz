import { View, Text, TouchableOpacity, ScrollView, Image, TextInput } from "react-native";
import React from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { COLORS } from "../utils/colors";

const QuizzChat = ({ navigation, route }: any) => {
  //const status = 'Payants';
  //const type_quiz = 'national'
    const status = route.params.status;
    const type_quiz = route.params.type_quiz;

  const [fontsLoaded] = useFonts({
    Bold: require("../assets/fonts/Poppins-Bold.ttf"),
    Regular: require("../assets/fonts/Poppins-Regular.ttf"),
    SemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    Medium: require("../assets/fonts/Poppins-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <View className="bg-[#F9F7F7] flex-1 pt-8 pr-3 pl-3 pb-3">
        <TouchableOpacity
            className="flex-row items-center"
            onPress={() => status === 'joinQuiz' ?
                navigation.navigate({name: 'Rejoindre', params: {status: status}}) :
                navigation.navigate({name: 'SalleAttenteQuizz', params: {type_quiz: type_quiz, status: status}})
            }
        >
            <AntDesign name="left" size={24} color="orange" />
            <Text className="ml-1 text-[#FFB31B]">Retour</Text>
        </TouchableOpacity>

            {status !== 'joinQuiz' && (
            <View className="p-5 bg-[#E83FD7] rounded-3xl mb-4 mt-3">
                <Text className="text-white text-xs" style={{fontFamily: 'Regular'}}>Le jeu commencera dans :</Text>
                <Text className="text-white text-2xl" style={{fontFamily: 'Bold'}}>00:57</Text>
            </View>
            )}
        
            {/* Message area */}
            <View className="mb-4 flex flex-col" style={{height : status === 'joinQuiz' ? '99%' : '76%'}}>

                <ScrollView className="flex h-[53%] mb-2">
                    <Text className="text-xs text-[#9E9E9E] mb-3 text-center" style={{fontFamily: 'Medium'}}>12/02/2022</Text>

                    {/* Messages reçu */}
                    <View className="flex items-start">

                        <View className="flex-row">
                            {/* Image */}
                            <View className="w-10 h-10 bg-[#D53333] rounded-full"></View>

                            {/* Message */}
                            <View className="bg-white border border-[#838383] p-3 rounded-3xl ml-2 w-[80%] mb-3">
                                <Text className="text-black text-xs" style={{fontFamily: 'Medium'}}>
                                    Lorem ipsum dolor sit
                                </Text>
                            </View>
                        </View>

                        <View className="flex-row ">
                            {/* Image */}
                            <View className="w-10 h-10 bg-[#1FD625] rounded-full"></View>

                            {/* Message */}
                            <View className="bg-white border border-[#838383] p-3 rounded-3xl ml-2 w-[80%] mb-3">
                                <Text className="text-black text-xs" style={{fontFamily: 'Medium'}}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                </Text>
                            </View>
                        </View>

                        <View className="flex-row ">
                            {/* Image */}
                            <View className="w-10 h-10 bg-[#FFB31B] rounded-full"></View>

                            {/* Message */}
                            <View className="bg-white border border-[#838383] p-3 rounded-3xl ml-2 w-[80%] mb-3">
                                <Text className="text-black text-xs" style={{fontFamily: 'Medium'}}>
                                    Lorem ipsum dolor sit
                                </Text>
                            </View>
                        </View>

                        <View className="flex-row ">
                            {/* Image */}
                            <View className="w-10 h-10 bg-[#838383] rounded-full"></View>

                            {/* Message */}
                            <View className="bg-white border border-[#838383] p-3 rounded-3xl ml-2 w-[80%] mb-3">
                                <Text className="text-black text-xs" style={{fontFamily: 'Medium'}}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                </Text>
                            </View>
                        </View>

                    </View>

                    {/* Messages envoyé */}
                    <View className="flex items-end">

                        <View className="flex-row">
                            {/* Message */}
                            <View className="bg-[#0C833E] border border-[#0C833E] p-3 rounded-t-3xl rounded-bl-3xl ml-2 w-[80%] mb-3">
                                <Text className="text-white text-xs" style={{fontFamily: 'Medium'}}>
                                    Lorem ipsum dolor sit
                                </Text>
                            </View>
                        </View>

                        <View className="flex-row">
                            {/* Message */}
                            <View className="bg-[#0C833E] border border-[#0C833E] p-3 rounded-t-3xl rounded-bl-3xl ml-2 w-[80%] mb-3">
                                <Text className="text-white text-xs" style={{fontFamily: 'Medium'}}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                </Text>
                            </View>
                        </View>

                        <View className="flex-row">
                            {/* Message */}
                            <View className="bg-[#0C833E] border border-[#0C833E] p-3 rounded-t-3xl rounded-bl-3xl ml-2 w-[80%] mb-3">
                                <Text className="text-white text-xs" style={{fontFamily: 'Medium'}}>
                                    Lorem ipsum dolor sit
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>

                <View className="flex-row items-center">
                    <View className="w-10 h-10 bg-[#34B4E2] rounded-full"></View>
                    <View className="bg-white border border-[#838383] p-2 rounded-3xl ml-2 w-[85%] mb-3 flex-row items-center">
                        <TextInput
                            placeholder="Ecrire votre message..."
                            className="border-r p-1 w-[83%] mr-3"
                        />
                        <TouchableOpacity>
                            <FontAwesome name="send" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


    </View>
  );
};

export default QuizzChat;

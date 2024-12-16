import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const QuizzResult = ({ navigation, route }: any) => {

  const name = route.params.type_quiz
  const gameType = route.params.status

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
    <View className="bg-[#F9F7F7] flex-1 pr-3 pl-3">
      <ScrollView className="mt-6">
        <TouchableOpacity
            className="flex-row items-center"
            onPress={() => navigation.navigate({name:'QuizzScreen', params:{type_quiz: name, status: gameType}})}
        >
            <AntDesign name="left" size={24} color="orange" />
            <Text className="ml-1 text-[#FFB31B]">Retour</Text>
        </TouchableOpacity>

        <View className="mt-3">

            {/* Bonne réponse */}
            <View className="p-2 bg-[#1FD62521] border-[#1FD625] rounded-3xl mb-3" style={{borderWidth: 1}}>
                <View className="flex-row p-2">
                    <Text className="text-lg" style={{fontFamily: 'Bold'}}>01</Text>
                    <View className="w-[90%]">
                        {/* Titre */}
                        <Text className="ml-2 text-sm mb-1" style={{fontFamily: 'Medium'}}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        </Text>

                        {/* Réponse */}
                        <Text className="ml-2 text-sm text-[#0C833E]" style={{fontFamily: 'Regular'}}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        </Text>
                    </View>
                </View>
            </View>

            {/* Mauvaise réponse */}
            <View className="p-2 bg-[#FF1B1B1A] border-[#EE1A1A] rounded-3xl mb-3 items-center" style={{borderWidth: 1}}>
                <View className="flex-row p-2 mb-2">
                    <Text className="text-lg" style={{fontFamily: 'Bold'}}>02</Text>
                    <View className="w-[90%]">
                        {/* Titre */}
                        <Text className="ml-2 text-sm mb-1" style={{fontFamily: 'Medium'}}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        </Text>

                        {/* Réponse */}
                        <Text className="ml-2 text-sm text-[#EA0D0D]" style={{fontFamily: 'Regular'}}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        </Text>
                    </View>
                </View>

                <View className="p-3 bg-white rounded-3xl w-[93%]">
                    <Text className="ml-2 text-sm" style={{fontFamily: 'Regular'}}>Bonne réponse</Text>
                    {/* Réponse */}
                    <Text className="ml-2 text-sm text-[#0C833E]" style={{fontFamily: 'Regular'}}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    </Text>
                </View>
            </View>

            {/* Bonne réponse */}
            <View className="p-2 bg-[#1FD62521] border-[#1FD625] rounded-3xl mb-3" style={{borderWidth: 1}}>
                <View className="flex-row p-2">
                    <Text className="text-lg" style={{fontFamily: 'Bold'}}>03</Text>
                    <View className="w-[90%]">
                        {/* Titre */}
                        <Text className="ml-2 text-sm mb-1" style={{fontFamily: 'Medium'}}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        </Text>

                        {/* Réponse */}
                        <Text className="ml-2 text-sm text-[#0C833E]" style={{fontFamily: 'Regular'}}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        </Text>
                    </View>
                </View>
            </View>

        </View>
      </ScrollView>
    </View>
  );
};

export default QuizzResult;

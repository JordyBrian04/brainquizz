import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { COLORS } from "../utils/colors";

const SalleAttenteQuizz = ({ navigation, route }: any) => {
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
      <ScrollView>
        <TouchableOpacity
            className="flex-row items-center"
            onPress={() => navigation.navigate("Tabs")}
        >
            <AntDesign name="left" size={24} color="orange" />
            <Text className="ml-1 text-[#FFB31B]">Retour</Text>
        </TouchableOpacity>

        <View className="mt-3">

            <View className="p-5 bg-[#E83FD7] rounded-3xl mb-4">
                <Text className="text-white text-xs" style={{fontFamily: 'Regular'}}>Mise effectué</Text>
                <View className="mt-2 flex-row items-center mb-4">
                    <Image source={require('../assets/brain-lg.png')} className="w-10 h-8" style={{tintColor: '#FFFFFF'}} />
                    <Text className="text-white ml-2 text-2xl" style={{fontFamily: 'Bold'}}>5</Text>
                </View>

                <View className="p-4 bg-[#CD35BE] rounded-3xl">
                    <Text className="text-white text-xs" style={{fontFamily: 'Regular'}}>Le jeu commencera dans :</Text>
                    <Text className="text-white text-2xl" style={{fontFamily: 'Bold'}}>00:57</Text>
                </View>
            </View>

            {/* Liste des participants */}
            <View className="p-5 bg-[#E83FD70D] rounded-3xl mb-4">
                <Text className="text-black text-xs" style={{fontFamily: 'Regular'}}>Participants</Text>

                <View className="mt-3 p-1">

                    <View className="bg-white rounded-3xl flex-row items-center justify-between p-2 mb-3">
                        <Image source={require('../assets/profil.jpeg')} className="w-8 h-8 rounded-full" />

                        <View className="flex-row items-center justify-between w-[85%]">
                            <Text className="text-black text-xs" style={{fontFamily: 'Regular'}}>Joueur_1</Text>

                            <View className="flex-row items-center">
                                <Image source={require('../assets/brain-lg.png')} className="w-6 h-4" style={{tintColor: COLORS.ORANGE}} />
                                <Text className="text-[#838383] ml-2 text-xl" style={{fontFamily: 'Bold'}}>5</Text>
                            </View>
                        </View>
                    </View>

                    <View className="bg-white rounded-3xl flex-row items-center justify-between p-2 mb-3">
                        <Image source={require('../assets/profil.jpeg')} className="w-8 h-8 rounded-full" />

                        <View className="flex-row items-center justify-between w-[85%]">
                            <Text className="text-black text-xs" style={{fontFamily: 'Regular'}}>Joueur_2</Text>

                            <View className="flex-row items-center">
                                <Image source={require('../assets/brain-lg.png')} className="w-6 h-4" style={{tintColor: COLORS.ORANGE}} />
                                <Text className="text-[#838383] ml-2 text-xl" style={{fontFamily: 'Bold'}}>5</Text>
                            </View>
                        </View>
                    </View>

                    <View className="bg-white rounded-3xl flex-row items-center justify-between p-2 mb-3">
                        <Image source={require('../assets/profil.jpeg')} className="w-8 h-8 rounded-full" />

                        <View className="flex-row items-center justify-between w-[85%]">
                            <Text className="text-black text-xs" style={{fontFamily: 'Regular'}}>Joueur_2</Text>

                            <View className="flex-row items-center">
                                <Image source={require('../assets/brain-lg.png')} className="w-6 h-4" style={{tintColor: COLORS.ORANGE}} />
                                <Text className="text-[#838383] ml-2 text-xl" style={{fontFamily: 'Bold'}}>5</Text>
                            </View>
                        </View>
                    </View>

                    <View className="bg-white rounded-3xl flex-row items-center justify-between p-2 mb-3">
                        <Image source={require('../assets/profil.jpeg')} className="w-8 h-8 rounded-full" />

                        <View className="flex-row items-center justify-between w-[85%]">
                            <Text className="text-black text-xs" style={{fontFamily: 'Regular'}}>Joueur_4</Text>

                            <View className="flex-row items-center">
                                <Image source={require('../assets/brain-lg.png')} className="w-6 h-4" style={{tintColor: COLORS.ORANGE}} />
                                <Text className="text-[#838383] ml-2 text-xl" style={{fontFamily: 'Bold'}}>5</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        </View>

        <View className="float-right bottom-0 right-0 mb-3 items-end">
            <TouchableOpacity 
                className="p-5 rounded-xl bg-[#FFB31B] flex-row items-center justify-between"
                onPress={() => navigation.navigate({name: 'QuizzChat', params: {type_quiz: type_quiz, status: status}})}
            >
                <Image source={require('../assets/chat-a-bulles.png')} className="w-8 h-8 rounded-full" style={{tintColor: "#FFFFFF"}} />
                <Text className="text-white text-sm ml-2" style={{fontFamily : 'Medium'}}>Accéder au chat</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SalleAttenteQuizz;

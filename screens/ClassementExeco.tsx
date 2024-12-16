import { View, Text, ImageBackground, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const ClassementExeco = ({navigation}:any) => {

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
    <View className='flex-1 pt-8 pr-3 pl-3'>

        <ScrollView className=''>

            <View className='flex-1 p-3 rounded-3xl bg-[#E83FD7]'>
                <ImageBackground
                    source={require("../assets/bgQuiz.png")}
                    imageStyle={{ tintColor: "grey", opacity: 0.2 }}
                    className="flex-[0.5]"
                >
                    <View>
                        <Text className='text-white text-center text-xl' style={{fontFamily:'Bold'}}>Vous faites parti des premiers execos du quiz</Text>
                        <Text className='text-white text-center text-sm mt-2' style={{fontFamily:'Regular'}}>
                            Vous devez reprendre le quiz pour pouvoir désigner le vainqueur
                        </Text>

                        <View className="p-5 bg-[#34B4E2] rounded-3xl mb-4 mt-4">
                            <Text className="text-white text-xs" style={{fontFamily: 'Regular'}}>La prochaine partie commencera dans</Text>
                            <Text className="text-white text-2xl" style={{fontFamily: 'Bold'}}>00:57</Text>
                        </View>

                        <ScrollView>

                            <View className="bg-[#ED65DF] rounded-3xl flex-row items-center justify-between p-2 mb-3">

                                <View className="flex-row">
                                    <Image
                                    source={require("../assets/profil.jpeg")}
                                    className="w-8 h-8 rounded-full"
                                    />
                                </View>

                                <View className="flex-row items-center justify-between w-[85%]">
                                <Text
                                    className="text-black text-xs"
                                    style={{ fontFamily: "Regular" }}
                                >
                                    Joueur_1
                                </Text>

                                    <Text className="text-lg" style={{fontFamily: 'Bold'}}>800</Text>
                                </View>
                            </View>

                            {/* Current player */}
                            <View className="bg-[#800073] rounded-3xl flex-row items-center justify-between p-2 mb-3">

                                <View className="flex-row">
                                    <Image
                                    source={require("../assets/profil.jpeg")}
                                    className="w-8 h-8 rounded-full"
                                    />
                                </View>

                                <View className="flex-row items-center justify-between w-[85%]">
                                <Text
                                    className="text-white text-xs"
                                    style={{ fontFamily: "Regular" }}
                                >
                                    Joueur_2
                                </Text>

                                    <Text className="text-lg text-white" style={{fontFamily: 'Bold'}}>790</Text>
                                </View>
                            </View>

                            <View className="bg-[#ED65DF] rounded-3xl flex-row items-center justify-between p-2 mb-3">

                                <View className="flex-row">
                                    <Image
                                    source={require("../assets/profil.jpeg")}
                                    className="w-8 h-8 rounded-full"
                                    />
                                </View>

                                <View className="flex-row items-center justify-between w-[85%]">
                                <Text
                                    className="text-black text-xs"
                                    style={{ fontFamily: "Regular" }}
                                >
                                    Joueur_3
                                </Text>

                                    <Text className="text-lg" style={{fontFamily: 'Bold'}}>750</Text>
                                </View>
                            </View>

                            <View className="bg-[#ED65DF] rounded-3xl flex-row items-center justify-between p-2 mb-3">

                                <View className="flex-row">
                                    <Image
                                    source={require("../assets/profil.jpeg")}
                                    className="w-8 h-8 rounded-full"
                                    />
                                </View>

                                <View className="flex-row items-center justify-between w-[85%]">
                                <Text
                                    className="text-black text-xs"
                                    style={{ fontFamily: "Regular" }}
                                >
                                    Joueur_4
                                </Text>

                                    <Text className="text-lg" style={{fontFamily: 'Bold'}}>600</Text>
                                </View>
                            </View>
                            
                        </ScrollView>
                    </View>
                </ImageBackground>
            </View>

            <View className='top-1 h-full flex-1 p-3'>
                <TouchableOpacity className='bg-[#E1E1E1] p-5 rounded-3xl items-center justify-center' onPress={() => navigation.navigate('Tabs')}>
                    <Text className='text-black text-xs' style={{fontFamily: 'Medium'}}>Je veux abandonner</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    </View>
  )
}

export default ClassementExeco
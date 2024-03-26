import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, Modal, Platform } from 'react-native'
import React, { useState } from 'react'
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';

const Confidentalite = ({navigation}:any) => {

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
    <View className='bg-[#F9F7F7] flex-1 pt-8 pr-4 pl-4'>
      <ScrollView className='mt-6'>
            <TouchableOpacity
                className="flex-row items-center"
                onPress={() => navigation.goBack()}
            >
                <AntDesign name="left" size={24} color="orange" />
                <Text className="ml-1 text-[#FFB31B]">Retour</Text>
            </TouchableOpacity>

            <View className='mt-4 flex-row items-center'>
                <View className='w-10 h-10 bg-[#FD7F1F] rounded-full items-center justify-center'>
                    <Image source={require('../assets/privacy.png')} className='w-5 h-5' style={{tintColor : '#FFFFFF'}} />
                </View>
                <Text className='ml-2 text-lg' style={{fontFamily:'Medium'}}>Politique et confidentialité</Text>
            </View>

            <View className='mt-4 mb-4 bg-white p-3 rounded-xl'>

                <View className='bg-white p-3 rounded-xl'>
                    <Text className='text-[16px] text-[#2A2A2A]' style={{fontFamily:'Medium'}}>Lorem ipsum dolor sit amet, consetetur</Text>
                    <Text className='text-xs text-[#2A2A2A]' style={{fontFamily:'Regular'}}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    </Text>
                </View>

                <View className='bg-white p-3 rounded-xl'>
                    <Text className='text-[16px] text-[#2A2A2A]' style={{fontFamily:'Medium'}}>Lorem ipsum dolor sit amet, consetetur</Text>
                    <Text className='text-xs text-[#2A2A2A]' style={{fontFamily:'Regular'}}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    </Text>
                </View>

                <View className='bg-white p-3 rounded-xl'>
                    <Text className='text-[16px] text-[#2A2A2A]' style={{fontFamily:'Medium'}}>Lorem ipsum dolor sit amet, consetetur</Text>
                    <Text className='text-xs text-[#2A2A2A]' style={{fontFamily:'Regular'}}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    </Text>
                </View>

            </View>

            <View className='bg-white p-3 rounded-xl mb-4'>
                    <Text className='text-[16px] text-[#2A2A2A]' style={{fontFamily:'Medium'}}>Lorem ipsum dolor sit amet, consetetur</Text>
                    <Text className='text-xs text-[#2A2A2A]' style={{fontFamily:'Regular'}}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    </Text>
                </View>
      </ScrollView>
    </View>
  )
}

export default Confidentalite
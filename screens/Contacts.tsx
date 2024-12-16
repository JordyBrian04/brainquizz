import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, Modal, Platform } from 'react-native'
import React, { useState } from 'react'
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';

const Contacts = ({navigation}:any) => {

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
                <View className='w-10 h-10 bg-[#4A5EDF] rounded-full items-center justify-center'>
                    <Image source={require('../assets/call.png')} className='w-5 h-5' style={{tintColor : '#FFFFFF'}} />
                </View>
                <Text className='ml-2 text-lg' style={{fontFamily:'Medium'}}>Nous contacter</Text>
            </View>

            <View className='mt-4 mb-4 p-3 rounded-xl'>

                <View className='rounded-xl'>
                    <Text className='text-[16px] text-[#2A2A2A]' style={{fontFamily:'Medium'}}>Lorem ipsum dolor sit amet, consetetur</Text>
                    <Text className='text-xs text-[#2A2A2A]' style={{fontFamily:'Regular'}}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    </Text>
                </View>

            </View>

            <View className='bg-white p-6 rounded-xl mb-4'>
              <View className='flex-row items-center mb-4'>
                <Image source={require('../assets/call.png')} className='w-5 h-5' style={{tintColor : '#34B4E2'}} />
                <View className='ml-4'>
                  <Text className='text-[16px] text-[#2A2A2A]' style={{fontFamily:'Bold'}}>+225 00 00 00 00 00</Text>
                  <Text className='text-xs text-[#2A2A2A]' style={{fontFamily:'Regular'}}>
                  Disponible 24/7 jours
                  </Text>
                </View>
              </View>

              <View className='h-1 w-[80%] bg-[#F6F6F6] ml-8 mb-4'></View>

              <View className='flex-row items-center mb-4'>
                <Image source={require('../assets/email.png')} className='w-5 h-5' style={{tintColor : '#34B4E2'}} />
                <View className='ml-4'>
                  <Text className='text-[16px] text-[#2A2A2A]' style={{fontFamily:'Bold'}}>email@email.com</Text>
                  <Text className='text-xs text-[#2A2A2A]' style={{fontFamily:'Regular'}}>
                    Nous vous répondrons à temps
                  </Text>
                </View>
              </View>
            </View>
      </ScrollView>
    </View>
  )
}

export default Contacts
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, Modal, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import { getToken, getUser } from '../services/AsyncStorage';

const InformationProfil = ({navigation}:any) => {

    const [fontsLoaded] = useFonts({
        Bold: require("../assets/fonts/Poppins-Bold.ttf"),
        Regular: require("../assets/fonts/Poppins-Regular.ttf"),
        SemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
        Medium: require("../assets/fonts/Poppins-Medium.ttf"),
    });
    
    if (!fontsLoaded) {
        return undefined;
    } 

    const [currentUser, setCurrentUserInfo] = useState({
        nom : "",
        email : "",
        numero : ""
    })

    useEffect(() => {
        getUser()
        .then((res) => {
          //console.log(res);
          setCurrentUserInfo({...currentUser, 
            nom: res?.lastName+" "+res?.firstName,
            email : res?.email,
            numero: res?.phoneNumber
          })
        })
        .catch((err) => {
          console.error(err);
        })
      }, [])

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
                <View className='w-10 h-10 bg-[#34B4E2] rounded-full items-center justify-center'>
                    <Image source={require('../assets/user.png')} className='w-5 h-5' style={{tintColor : '#FFFFFF'}} />
                </View>
                <Text className='ml-2 text-lg' style={{fontFamily:'Medium'}}>Informations profil</Text>
            </View>

            <View className='mt-4'>

                <View className='bg-white p-3 rounded-xl mb-3'>
                    <Text className='text-sm text-[#2A2A2A]' style={{fontFamily:'Regular'}}>Noms et prénoms</Text>
                    <Text className='text-[15px] text-[#2A2A2A]' style={{fontFamily:'Medium'}}>{currentUser.nom}</Text>
                </View>

                <View className='bg-white p-3 rounded-xl mb-3'>
                    <Text className='text-sm text-[#2A2A2A]' style={{fontFamily:'Regular'}}>Email</Text>
                    <Text className='text-[15px] text-[#2A2A2A]' style={{fontFamily:'Medium'}}>{currentUser.email}</Text>
                </View>

                <View className='bg-white p-3 rounded-xl mb-3'>
                    <Text className='text-sm text-[#2A2A2A]' style={{fontFamily:'Regular'}}>Numéro de téléphone</Text>
                    <Text className='text-[15px] text-[#2A2A2A]' style={{fontFamily:'Medium'}}>{currentUser.numero}</Text>
                </View>

                <TouchableOpacity className='p-6 rounded-2xl items-center justify-center bg-[#FFB31B] mt-4 mb-4' onPress={() => navigation.navigate('EditProfil')}>
                    <Text className='text-white text-xs' style={{fontFamily: 'SemiBold'}}>Editer les informations</Text> 
                </TouchableOpacity>

            </View>
      </ScrollView>
    </View>
  )
}

export default InformationProfil
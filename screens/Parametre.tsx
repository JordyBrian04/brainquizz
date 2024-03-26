import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, Modal, Platform, Switch } from 'react-native'
import React, { useState } from 'react'
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import SwitchSelector from "react-native-switch-selector";

const Parametre = ({navigation}:any) => {

  const [isEnabled, setIsEnabled] = useState(false)
  const [isVibrateEnabled, setIsVibrateEnabled] = useState(false)
  const [isThemeEnabled, setIsThemeEnabled] = useState(false)
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false)

    const [fontsLoaded] = useFonts({
        Bold: require("../assets/fonts/Poppins-Bold.ttf"),
        Regular: require("../assets/fonts/Poppins-Regular.ttf"),
        SemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
        Medium: require("../assets/fonts/Poppins-Medium.ttf"),
    });
    
    if (!fontsLoaded) {
        return undefined;
    } 

    const toggleSwith = () => setIsEnabled(!isEnabled)
    const toggleVibrateSwith = () => setIsVibrateEnabled(!isVibrateEnabled)
    const toggleThemeSwith = () => setIsThemeEnabled(!isThemeEnabled)
    const toggleNotificationSwith = () => setIsNotificationEnabled(!isNotificationEnabled)

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
                <View className='w-10 h-10 bg-[#90B012] rounded-full items-center justify-center'>
                    <Image source={require('../assets/user.png')} className='w-5 h-5' style={{tintColor : '#FFFFFF'}} />
                </View>
                <Text className='ml-2 text-lg' style={{fontFamily:'Medium'}}>Paramètres</Text>
            </View>

            <View className='mt-4'>

                <View className='bg-white p-3 rounded-xl mb-3 flex-row items-center justify-between'>
                    <Image source={require('../assets/speaker-filled-audio-tool.png')} className='w-6 h-6' style={{tintColor: '#34B4E2'}} />

                    <View className='flex-row items-center justify-between w-[88%]'>

                      <Text className='text-[16px] text-[#2A2A2A]' style={{fontFamily:'Regular'}}>Son</Text>
                      <Switch
                        trackColor={{false : '#F2F2F2', true : '#F2F2F2'}}
                        thumbColor={isEnabled ? '#FFB31B' : '#F2F2F2'}
                        ios_backgroundColor='#F2F2F2'
                        onValueChange={toggleSwith}
                        style={{transform: [{scaleX:1}, {scaleY:1}]}}
                        value={isEnabled}
                      />

                    </View>
                </View>

                <View className='bg-white p-3 rounded-xl mb-3 flex-row items-center justify-between'>
                    <Image source={require('../assets/vibration.png')} className='w-6 h-6' style={{tintColor: '#34B4E2'}} />

                    <View className='flex-row items-center justify-between w-[88%]'>

                      <Text className='text-[16px] text-[#2A2A2A]' style={{fontFamily:'Regular'}}>Vibration</Text>
                      <Switch
                        trackColor={{false : '#F2F2F2', true : '#F2F2F2'}}
                        thumbColor={isVibrateEnabled ? '#FFB31B' : '#F2F2F2'}
                        ios_backgroundColor='#F2F2F2'
                        onValueChange={toggleVibrateSwith}
                        style={{transform: [{scaleX:1}, {scaleY:1}]}}
                        value={isVibrateEnabled}
                      />

                    </View>

                </View>

                <View className='bg-white p-3 rounded-xl mb-3 flex-row items-center justify-between'>
                    <Image source={require('../assets/brightness.png')} className='w-6 h-6' style={{tintColor: '#34B4E2'}} />

                    <View className='flex-row items-center justify-between w-[88%]'>

                      <Text className='text-[16px] text-[#2A2A2A]' style={{fontFamily:'Regular'}}>Thème</Text>
                      <SwitchSelector
                        initial={0}
                        onPress={(value:any) => setIsThemeEnabled(value)}
                        textColor={'#2A2A2A'} //'#7a44cf'
                        selectedColor={'#FFFFFF'}
                        buttonColor={'#FFB31B'}
                        borderColor={'#FFB31B'}
                        hasPadding
                        options={[
                          { label: "Clair", value: "1" }, //images.feminino = require('./path_to/assets/img/feminino.png')
                          { label: "Sombre", value: "0" } //images.masculino = require('./path_to/assets/img/masculino.png')
                        ]}
                        testID="gender-switch-selector"
                        accessibilityLabel="gender-switch-selector"
                        valuePadding={1}
                        buttonMargin={3}
                        style={{ width: 120 }}
                        fontSize={12}
                      />

                    </View>

                </View>

                <View className='bg-white p-3 rounded-xl mb-3 flex-row items-center justify-between'>
                    <Image source={require('../assets/bell.png')} className='w-6 h-6' style={{tintColor: '#34B4E2'}} />

                    <View className='flex-row items-center justify-between w-[88%]'>

                      <Text className='text-[16px] text-[#2A2A2A]' style={{fontFamily:'Regular'}}>Notifications</Text>
                      <Switch
                        trackColor={{false : '#F2F2F2', true : '#F2F2F2'}}
                        thumbColor={isNotificationEnabled ? '#FFB31B' : '#F2F2F2'}
                        ios_backgroundColor='#F2F2F2'
                        onValueChange={toggleNotificationSwith}
                        style={{transform: [{scaleX:1}, {scaleY:1}]}}
                        value={isNotificationEnabled}
                      />

                    </View>
                </View>

            </View>
      </ScrollView>
    </View>
  )
}

export default Parametre
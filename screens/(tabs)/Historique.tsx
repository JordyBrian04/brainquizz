import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { useFonts } from "expo-font";

const Historique = () => {

  const [fontsLoaded] = useFonts({
    Bold: require("../../assets/fonts/Poppins-Bold.ttf"),
    Regular: require("../../assets/fonts/Poppins-Regular.ttf"),
    SemiBold: require("../../assets/fonts/Poppins-SemiBold.ttf"),
    Medium: require("../../assets/fonts/Poppins-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <View className='bg-[#F9F7F7] flex-1 pt-8 pr-3 pl-3'>
      <ScrollView className='p-3'>

        <View className='p-3 bg-white rounded-3xl flex-row justify-between mb-2'>
          {/* Image */}
          <View className='bg-blue-300/30 p-3 items-center justify-center rounded-2xl w-16 h-16'>
            <Text className='text-blue-500 text-3xl font-extrabold' style={{fontFamily: 'Bold'}}>?</Text>
          </View>

          {/* Infos */}
          <View className='w-[80%] ml-2'>
            <Text className='text-sm' style={{fontFamily: 'Regular'}}>Achat de quiz</Text>
            <Text className='text-xs text-[#838383]' style={{fontFamily: 'Regular'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</Text>
          </View>
        </View>

        {/* Mise */}
        <View className='p-3 bg-white rounded-3xl flex-row justify-between mb-2'>
          {/* Image */}
          <View className='bg-green-300/30 p-3 items-center justify-center rounded-2xl w-16 h-16'>
            <Image source={require('../../assets/brain.png')} style={{tintColor: '#7FE316'}} />
          </View>

          {/* Infos */}
          <View className='w-[80%] ml-2'>
            <Text className='text-sm' style={{fontFamily: 'Regular'}}>Mise à une partie</Text>
            <Text className='text-xs text-[#838383]' style={{fontFamily: 'Regular'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</Text>
          </View>
        </View>

        <View className='p-3 bg-white rounded-3xl flex-row justify-between mb-2'>
          {/* Image */}
          <View className='bg-blue-300/30 p-3 items-center justify-center rounded-2xl w-16 h-16'>
            <Text className='text-blue-500 text-3xl font-extrabold' style={{fontFamily: 'Bold'}}>?</Text>
          </View>

          {/* Infos */}
          <View className='w-[80%] ml-2'>
            <Text className='text-sm' style={{fontFamily: 'Regular'}}>Achat de quiz</Text>
            <Text className='text-xs text-[#838383]' style={{fontFamily: 'Regular'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</Text>
          </View>
        </View>

        {/* Mise */}
        <View className='p-3 bg-white rounded-3xl flex-row justify-between mb-2'>
          {/* Image */}
          <View className='bg-green-300/30 p-3 items-center justify-center rounded-2xl w-16 h-16'>
            <Image source={require('../../assets/brain.png')} style={{tintColor: '#7FE316'}} />
          </View>

          {/* Infos */}
          <View className='w-[80%] ml-2'>
            <Text className='text-sm' style={{fontFamily: 'Regular'}}>Mise à une partie</Text>
            <Text className='text-xs text-[#838383]' style={{fontFamily: 'Regular'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</Text>
          </View>
        </View>

        <View className='p-3 bg-white rounded-3xl flex-row justify-between mb-2'>
          {/* Image */}
          <View className='bg-blue-300/30 p-3 items-center justify-center rounded-2xl w-16 h-16'>
            <Text className='text-blue-500 text-3xl font-extrabold' style={{fontFamily: 'Bold'}}>?</Text>
          </View>

          {/* Infos */}
          <View className='w-[80%] ml-2'>
            <Text className='text-sm' style={{fontFamily: 'Regular'}}>Achat de quiz</Text>
            <Text className='text-xs text-[#838383]' style={{fontFamily: 'Regular'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</Text>
          </View>
        </View>

        {/* Mise */}
        <View className='p-3 bg-white rounded-3xl flex-row justify-between mb-2'>
          {/* Image */}
          <View className='bg-green-300/30 p-3 items-center justify-center rounded-2xl w-16 h-16'>
            <Image source={require('../../assets/brain.png')} style={{tintColor: '#7FE316'}} />
          </View>

          {/* Infos */}
          <View className='w-[80%] ml-2'>
            <Text className='text-sm' style={{fontFamily: 'Regular'}}>Mise à une partie</Text>
            <Text className='text-xs text-[#838383]' style={{fontFamily: 'Regular'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  )
}

export default Historique
import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { useFonts } from "expo-font";

const Palmares = () => {

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
      <ScrollView className='mt-6 p-3'>

        {/* Victoire */}
        <View className='bg-white p-6 rounded-2xl mb-3'>

          {/* Head */}
          <View className='flex-row'>
            <Image source={require('../../assets/victoire.png')} />

            <View className='p-3'>
              <Text className='text-sm text-[#838383]' style={{fontFamily: 'SemiBold'}}>Victoire</Text>
              <Text className='text-lg text-black' style={{fontFamily: 'Bold'}}>1445</Text>
            </View>
          </View>

          {/* Detail */}
          <View className='mt-3 flex-row items-center justify-between'>

            {/* Local */}
            <View className='bg-slate-200 p-4 rounded-xl items-center justify-center w-[120px]'>
              <View className='border border-[#FFB31B] p-2 w-14 h-14' style={{borderRadius: 100}}>
                <Image source={require('../../assets/local.png')} className='w-10 h-10'/>
              </View>

              <Text className='text-sm text-black mt-2' style={{fontFamily: 'SemiBold'}}>Local</Text>
              <Text className='text-lg text-black' style={{fontFamily: 'Bold'}}>1445</Text>
            </View>

            {/* Local */}
            <View className='bg-slate-200 p-4 rounded-xl items-center justify-center w-[120px]'>
              <View className='border border-[#FFB31B] p-2 w-14 h-14' style={{borderRadius: 100}}>
                <Image source={require('../../assets/worldwide.png')} className='w-10 h-10'/>
              </View>

              <Text className='text-sm mt-2 text-black' style={{fontFamily: 'SemiBold'}}>Local</Text>
              <Text className='text-lg text-black' style={{fontFamily: 'Bold'}}>1445</Text>
            </View>

          </View>
        </View>

        {/* Participations */}
        <View className='bg-white p-6 rounded-2xl mb-3'>

          {/* Head */}
          <View className='flex-row'>
            <Image source={require('../../assets/participation.png')} />

            <View className='p-3'>
              <Text className='text-sm text-[#838383]' style={{fontFamily: 'SemiBold'}}>Participations</Text>
              <Text className='text-lg text-black' style={{fontFamily: 'Bold'}}>1445</Text>
            </View>
          </View>

          {/* Detail */}
          <View className='mt-3 flex-row items-center justify-between'>

            {/* Local */}
            <View className='bg-slate-200 p-4 rounded-xl items-center justify-center w-[120px]'>
              <View className='border border-[#FFB31B] p-2 w-14 h-14' style={{borderRadius: 100}}>
                <Image source={require('../../assets/local.png')} className='w-10 h-10'/>
              </View>

              <Text className='text-sm text-black mt-2' style={{fontFamily: 'SemiBold'}}>Local</Text>
              <Text className='text-lg text-black' style={{fontFamily: 'Bold'}}>1445</Text>
            </View>

            {/* Local */}
            <View className='bg-slate-200 p-4 rounded-xl items-center justify-center w-[120px]'>
              <View className='border border-[#FFB31B] p-2 w-14 h-14' style={{borderRadius: 100}}>
                <Image source={require('../../assets/worldwide.png')} className='w-10 h-10'/>
              </View>

              <Text className='text-sm mt-2 text-black' style={{fontFamily: 'SemiBold'}}>Local</Text>
              <Text className='text-lg text-black' style={{fontFamily: 'Bold'}}>1445</Text>
            </View>

          </View>
        </View>

        {/* Défaite */}
        <View className='bg-white p-6 rounded-2xl mb-3'>

          {/* Head */}
          <View className='flex-row'>
            <Image source={require('../../assets/defaite.png')} />

            <View className='p-3'>
              <Text className='text-sm text-[#838383]' style={{fontFamily: 'SemiBold'}}>Defaite</Text>
              <Text className='text-lg text-black' style={{fontFamily: 'Bold'}}>1445</Text>
            </View>
          </View>

          {/* Detail */}
          <View className='mt-3 flex-row items-center justify-between'>

            {/* Local */}
            <View className='bg-slate-200 p-4 rounded-xl items-center justify-center w-[120px]'>
              <View className='border border-[#FFB31B] p-2 w-14 h-14' style={{borderRadius: 100}}>
                <Image source={require('../../assets/local.png')} className='w-10 h-10'/>
              </View>

              <Text className='text-sm text-black mt-2' style={{fontFamily: 'SemiBold'}}>Local</Text>
              <Text className='text-lg text-black' style={{fontFamily: 'Bold'}}>1445</Text>
            </View>

            {/* Local */}
            <View className='bg-slate-200 p-4 rounded-xl items-center justify-center w-[120px]'>
              <View className='border border-[#FFB31B] p-2 w-14 h-14' style={{borderRadius: 100}}>
                <Image source={require('../../assets/worldwide.png')} className='w-10 h-10'/>
              </View>

              <Text className='text-sm mt-2 text-black' style={{fontFamily: 'SemiBold'}}>Local</Text>
              <Text className='text-lg text-black' style={{fontFamily: 'Bold'}}>1445</Text>
            </View>

          </View>
        </View>

      </ScrollView>
    </View>
  )
}

export default Palmares
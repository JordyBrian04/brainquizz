import { View, Text } from 'react-native'
import React from 'react'
import { useFonts } from "expo-font";

const Home = ({navigation}:any) => {

    setTimeout(() => {
        navigation.navigate("Login");
    }, 5000)

    const [fontsLoaded] = useFonts({
        Bold : require("../assets/fonts/Poppins-Bold.ttf"),
        Regular : require("../assets/fonts/Poppins-Regular.ttf")
    })

    if(!fontsLoaded){
        return undefined
    }

  return (
    <View className='flex-1 justify-center items-center bg-[#FFB31B]'>
      <Text className='text-white text-lg' style={{fontFamily: "Bold"}}>LOGO</Text>
    </View>
  )
}

export default Home
import { View, Text, ScrollView, Image, TouchableOpacity, Share } from 'react-native'
import React from 'react'
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const Precommande = ({navigation}:any) => {
  const [fontsLoaded] = useFonts({
    Bold: require("../assets/fonts/Poppins-Bold.ttf"),
    Regular: require("../assets/fonts/Poppins-Regular.ttf"),
    SemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    Medium: require("../assets/fonts/Poppins-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return undefined;
  }

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          `Utilise le code 0511545 pour rejoindre mon quiz sur BrainQuiz.`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          console.log('shared with activity type of ', result.activityType)
        } else {
          // shared
          console.log('Shared')
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('dismissed')
        // dismissed
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View className='bg-[#F9F7F7] flex-1 pt-8 pr-3 pl-3 pb-3'>
      <ScrollView>
      <TouchableOpacity
            className="flex-row items-center"
            onPress={() => navigation.goBack()}
        >
            <AntDesign name="left" size={24} color="orange" />
            <Text className="ml-1 text-[#FFB31B]">Retour</Text>
        </TouchableOpacity>

        <TouchableOpacity className='items-center p-5 mt-5 mb-4 bg-[#FFB31B] rounded-2xl' onPress={() => navigation.navigate('Commander')}>
          <Text className='text-xs text-white' style={{fontFamily: 'SemiBold'}}>Acheter un quiz</Text>
        </TouchableOpacity>

        <Text className='text-center text-[16px] mb-5' style={{fontFamily : 'Regular'}}>Historique des achats</Text>

        {/* En cours de traitement */}
        <View className='bg-white p-3 rounded-3xl mb-4'>

          <View className='flex-row items-center mb-3'>

            <View className='items-center bg-[#34B4E21C] p-6 rounded-3xl w-20 h-20 justify-center'>
              <Text className='text-4xl text-[#34B4E2]' style={{fontFamily: 'Bold'}}>?</Text>
            </View>

            <View className='ml-3'>
              <Text className='text-sm mb-3' style={{fontFamily: 'Regular'}}>Achat de quiz</Text>
              <Text className='text-xs text-[#E0850F]' style={{fontFamily: 'Regular'}}>En cours de traitement</Text>
            </View>
          </View>

          <TouchableOpacity className='items-center p-5 bg-[#FFB31B] rounded-2xl' onPress={() => navigation.navigate({name: "DetailCommande", params:{statusCommande: "traitement"}})}>
            <Text className='text-xs text-white' style={{fontFamily: 'SemiBold'}}>Voir les details</Text>
          </TouchableOpacity>

        </View>

        {/* En attente de paiement */}
        <View className='bg-white p-3 rounded-3xl mb-4'>

          <View className='flex-row items-center mb-3'>

            <View className='items-center bg-[#34B4E21C] p-6 rounded-3xl w-20 h-20 justify-center'>
              <Text className='text-4xl text-[#34B4E2]' style={{fontFamily: 'Bold'}}>?</Text>
            </View>

            <View className='ml-3'>
              <Text className='text-sm mb-3' style={{fontFamily: 'Regular'}}>Achat de quiz</Text>
              <Text className='text-xs text-[#0F68E0]' style={{fontFamily: 'Regular'}}>En attente de paiement</Text>
            </View>
          </View>

          <TouchableOpacity className='items-center p-5 bg-[#FFB31B] rounded-2xl' onPress={() => navigation.navigate({name: "DetailCommande", params:{statusCommande: "paiement"}})}>
            <Text className='text-xs text-white' style={{fontFamily: 'SemiBold'}}>Voir les details</Text>
          </TouchableOpacity>

        </View>

        {/* Annulé */}
        <View className='bg-white p-3 rounded-3xl mb-4'>

          <View className='flex-row items-center'>

            <View className='items-center bg-[#34B4E21C] p-6 rounded-3xl w-20 h-20 justify-center'>
              <Text className='text-4xl text-[#34B4E2]' style={{fontFamily: 'Bold'}}>?</Text>
            </View>

            <View className='ml-3'>
              <Text className='text-sm mb-3' style={{fontFamily: 'Regular'}}>Achat de quiz</Text>
              <Text className='text-xs text-[#E00F0F]' style={{fontFamily: 'Regular'}}>Annulé</Text>
            </View>
          </View>

        </View>

        
        {/* Terminé */}
        <View className='bg-white p-3 rounded-3xl mb-4'>

          <View className='flex-row items-center mb-3'>

            <View className='items-center bg-[#34B4E21C] p-6 rounded-3xl w-20 h-20 justify-center'>
              <Text className='text-4xl text-[#34B4E2]' style={{fontFamily: 'Bold'}}>?</Text>
            </View>

            <View className='ml-3'>
              <Text className='text-sm mb-3' style={{fontFamily: 'Regular'}}>Achat de quiz</Text>
              <Text className='text-xs text-[#0C833E]' style={{fontFamily: 'Regular'}}>Terminé</Text>
            </View>
          </View>

          <View className='flex-row justify-between items-center'>

            <TouchableOpacity className='items-center p-5 bg-[#34B4E2] rounded-2xl' onPress={onShare}>
              <Text className='text-xs text-white' style={{fontFamily: 'SemiBold'}}>Partager le code</Text>
            </TouchableOpacity>

            <TouchableOpacity className='items-center p-5 bg-[#FFB31B] rounded-2xl' onPress={() => navigation.navigate({name: "DetailCommande", params:{statusCommande: "termine"}})}>
              <Text className='text-xs text-white' style={{fontFamily: 'SemiBold'}}>Voir les details</Text>
            </TouchableOpacity>

          </View>


        </View>
      </ScrollView>
    </View>
  )
}

export default Precommande
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import CardRules from '../component/commons/CardRules';

const RegleReduction = ({navigation}:any) => {
    const [fontsLoaded] = useFonts({
        Bold: require("../assets/fonts/Poppins-Bold.ttf"),
        Regular: require("../assets/fonts/Poppins-Regular.ttf"),
        SemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
      });

      const [heure, setHeure] = useState<number>(0);
      const [minutes, setMinutes] = useState<number>(0);
      const [seconds, setSeconds] = useState<number>(0);
    
      if (!fontsLoaded) {
        return undefined;
      }

 
      function getTimeDifference(targetDate: Date): { days: number, hours: number, minutes: number, seconds: number } {
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();
        
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
        return { days, hours, minutes, seconds };
    }
    
    function startCountdown(targetDate: Date): void {
        const intervalId = setInterval(() => {
            const { days, hours, minutes, seconds } = getTimeDifference(targetDate);
            setHeure(hours)
            setMinutes(minutes)
            setSeconds(seconds)
    
            //console.log(`Time until target date: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
    
            if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
                clearInterval(intervalId);
                console.log('Countdown reached!');
            }
        }, 1000);
    }

    useEffect(() => {
        // Example usage: countdown to 1 hour from now
        const targetDate = new Date();
        targetDate.setHours(targetDate.getHours() + 1);
        startCountdown(targetDate);

        return () => clearInterval(intervalId); // Clean up interval on unmount
    }, []);

      
  return (
    <View className='bg-[#F9F7F7] flex-1 pt-8 pr-3 pl-3'>
      <ScrollView className='mt-6'>
        <TouchableOpacity
            className="flex-row items-center"
            onPress={() => navigation.goBack()}
        >
            <AntDesign name="left" size={24} color="orange" />
            <Text className="ml-1 text-[#FFB31B]">Retour</Text>
        </TouchableOpacity>

        <View className='bg-[#0C833E] p-2 mt-6 rounded-xl'>
            <Text className='text-white' style={{fontFamily: 'Regular', fontSize: 13}}>Prochaine session dans</Text>
            <Text className='text-white text-3xl mt-2 mb-4' style={{fontFamily: 'Bold'}}>{heure}:{minutes}:{seconds}</Text>

            <TouchableOpacity className='items-center justify-center p-6 bg-[#FFB31B] rounded-2xl mb-3' onPress={() => navigation.navigate('Mises')}>
                <Text className='text-white text-xs' style={{fontFamily: 'SemiBold'}}>Demander l'inscription</Text>
            </TouchableOpacity>
        </View>

        <View>
            <CardRules btnShow={false}/>
        </View>
      </ScrollView>
    </View>
  )
}

export default RegleReduction
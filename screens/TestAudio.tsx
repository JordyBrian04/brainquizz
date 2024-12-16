import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import { Audio, AVPlaybackStatus } from "expo-av";
import { Sound } from "expo-av/build/Audio";

const TestAudio = () => {
    const [sound, setSound] = useState<Sound>()
    const [status, setStatus] = useState<AVPlaybackStatus>()
    const position = status?.isLoaded ? status.positionMillis : 0;
    const duration:any = status?.isLoaded ? status.durationMillis : 1;
    const AudioProgress = position / duration;
    const [rate, setRate] = useState(1)

    async function loadSound(){
        console.log('loading sound')
        const {sound} = await Audio.Sound.createAsync(require("../assets/son.mp3"), { shouldPlay: false }, onPlayBackStatusUpdate)
        setSound(sound)
    }

    useEffect(() => {
        loadSound()
    }, [])

    async function onPlayBackStatusUpdate(status: AVPlaybackStatus) {
        console.log(JSON.stringify(status, null,2))
        setStatus(status)
        if(status.isLoaded && sound && status.didJustFinish)
        {
            await sound?.setPositionAsync(0)
            console.log('restarted sound')
        }
    }

    async function playSound(){
        if(!sound)
        {
            return
        }

        if(status?.isLoaded && status.isPlaying)
        {
            await sound.pauseAsync()
        }
        else
        {
            await sound.playAsync();
        }
        // console.log('playing sound')
        // await sound.playAsync();
    }

    const handleVitesse = async () => {
        if(status?.isLoaded && status.isPlaying)
        {
            if(rate == 1)
            {
                await sound?.setRateAsync(1.5,true)
                setRate(1.5)
            }
            else if (rate == 1.5)
            {
                await sound?.setRateAsync(2,true)
                setRate(2)
            }
            else if (rate == 2)
            {
                await sound?.setRateAsync(1,true)
                setRate(1)
            }
            
        }
    }

    useEffect(() => {
        return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync();
        } : undefined
    }, [sound])

    const isPlaying = status?.isLoaded ? status.isPlaying : false 


  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <View className="items-center justify-center bg-[#FFC919] w-[90%] h-[30%] rounded-2xl">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity className="mr-2" onPress={playSound}>
            <FontAwesome5 name={isPlaying ? "pause" : "play"} size={20} color="white" />
          </TouchableOpacity>
          {/* {isPlaying ? "pause" : "play"}  */}
          {/* taille */}
          <View className="w-[65%] h-[30px] justify-center">
            <View className="h-[3px] bg-slate-50 rounded"></View>
            <Animated.View className="w-4 rounded-full bg-blue-400 aspect-square border border-blue-400 absolute" style={{left: `${AudioProgress * 100}%`}} />
          </View>

          {/* vitesse */}
          <TouchableOpacity className="bg-[#FFB31B] w-[41px] h-[28px] rounded-3xl items-center justify-center ml-2" onPress={handleVitesse}>
            <Text className="text-white text-sm font-[Medium]">{rate == 1 ? 1.5 : rate == 1.5 ? 2 : 1}x</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TestAudio;

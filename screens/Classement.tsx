import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  Modal,
  StatusBar,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../utils/colors";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";

const Classement = ({ navigation, route }: any) => {
  //Build the iOS Voice Memos app in React Native | DEVember Day 7

  const status = "Payants";
  const type_quiz = "national";

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
    <View className="flex-1 bg-white">
      <LinearGradient
        colors={[COLORS.VIOLETPUR, COLORS.VIOLETPUR]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="flex-[2.3] rounded-b-3xl"
      >
        <ImageBackground
          source={require("../assets/bgQuiz.png")}
          imageStyle={{ tintColor: "grey", opacity: 0.2 }}
          className="flex-[0.8]"
        >
          <View className="mt-10 pr-4 pl-4">
            <Text
              className="text-white text-lg text-center"
              style={{ fontFamily: "Medium" }}
            >
              Partie
            </Text>
            <Text
              className="text-white text-2xl text-center"
              style={{ fontFamily: "Medium" }}
            >
              terminé
            </Text>

            <View className="p-2 flex-row justify-center mt-2">
              <View className="items-center mr-2 mt-8">
                <View className="w-8 h-8 bg-[#1FD625] border-[#1FD625] items-center justify-center rounded-full absolute z-30 left-0">
                  <Text className="text-white" style={{ fontFamily: "Medium" }}>
                    2
                  </Text>
                </View>
                <View className="w-[100px] h-[100px] bg-[#C5F25A] rounded-full items-center justify-center z-10">
                  <Image
                    source={require("../assets/profil.jpeg")}
                    className="w-[95px] h-[95px] rounded-full"
                  />
                </View>
                <View className="h-[60px] w-14 bg-[#C5F25A] absolute top-20"></View>

                <View className="absolute top-[150px] items-center">
                  <Text
                    className="text-sm text-[#400D3B]"
                    style={{ fontFamily: "Bold" }}
                  >
                    Sam Koné
                  </Text>
                  <Text
                    className="text-lg text-white"
                    style={{ fontFamily: "Bold" }}
                  >
                    1000
                  </Text>
                </View>
              </View>

              <View className="items-center mr-2">
                <View className="w-8 h-8 bg-[#1FD625] border-[#1FD625] items-center justify-center rounded-full absolute z-30 left-0">
                  <Text className="text-white" style={{ fontFamily: "Medium" }}>
                    1
                  </Text>
                </View>
                <View className="w-[100px] h-[100px] bg-[#FFB31B] rounded-full items-center justify-center z-10">
                  <Image
                    source={require("../assets/profil.jpeg")}
                    className="w-[95px] h-[95px] rounded-full"
                  />
                </View>
                <View className="h-[60px] w-14 bg-[#FFB31B] absolute top-20"></View>

                <View className="absolute top-[150px] items-center">
                  <Text
                    className="text-sm text-[#400D3B]"
                    style={{ fontFamily: "Bold" }}
                  >
                    Jordy Brian
                  </Text>
                  <Text
                    className="text-lg text-white"
                    style={{ fontFamily: "Bold" }}
                  >
                    4000
                  </Text>
                </View>
              </View>

              <View className="items-center mt-8">
                <View className="w-8 h-8 bg-[#1FD625] border-[#1FD625] items-center justify-center rounded-full absolute z-30 left-0">
                  <Text className="text-white" style={{ fontFamily: "Medium" }}>
                    3
                  </Text>
                </View>
                <View className="w-[100px] h-[100px] bg-[#03ADC0] rounded-full items-center justify-center z-10">
                  <Image
                    source={require("../assets/profil.jpeg")}
                    className="w-[95px] h-[95px] rounded-full"
                  />
                </View>
                <View className="h-[60px] w-14 bg-[#03ADC0] absolute top-20"></View>

                <View className="absolute top-[150px] items-center">
                  <Text
                    className="text-sm text-[#400D3B]"
                    style={{ fontFamily: "Bold" }}
                  >
                    Travis taner
                  </Text>
                  <Text
                    className="text-lg text-white"
                    style={{ fontFamily: "Bold" }}
                  >
                    900
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>

        <View className="absolute bottom-0 items-center w-full">
          <TouchableOpacity
            className="bg-[#FFB31B] p-3 flex-row items-center rounded-t-3xl"
            onPress={() =>
              navigation.navigate({
                name: "QuizzChat",
                params: { type_quiz: type_quiz, status: status },
              })
            }
          >
            <Image
              source={require("../assets/chat-a-bulles.png")}
              className="w-8 h-8"
              style={{ tintColor: "#FFFFFF" }}
            />
            <Text
              className="text-white ml-2 text-xs"
              style={{ fontFamily: "Medium" }}
            >
              Accéder au chat
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView className="flex-1 p-3">
        <View className="mt-3 p-1">

          <View className="bg-[#F5F5F5] rounded-3xl flex-row items-center justify-between p-2 mb-3">

            <View className="flex-row">

                <View className="bg-[#83838345] w-8 h-8 rounded-full mr-2 items-center justify-center">
                    <Text className="text-xs" style={{fontFamily: 'Regular'}}>04</Text>
                </View>

                <Image
                source={require("../assets/profil.jpeg")}
                className="w-8 h-8 rounded-full"
                />
            </View>

            <View className="flex-row items-center justify-between w-[75%]">
              <Text
                className="text-black text-xs"
                style={{ fontFamily: "Regular" }}
              >
                Joueur_1
              </Text>

                <Text className="text-lg" style={{fontFamily: 'Bold'}}>800</Text>
            </View>
          </View>

            {/* Current player */}
          <View className="bg-[#34B4E2] rounded-3xl flex-row items-center justify-between p-2 mb-3">

            <View className="flex-row">

                <View className="bg-[#83838345] w-8 h-8 rounded-full mr-2 items-center justify-center">
                    <Text className="text-xs text-white" style={{fontFamily: 'Regular'}}>05</Text>
                </View>

                <Image
                source={require("../assets/profil.jpeg")}
                className="w-8 h-8 rounded-full"
                />
            </View>

            <View className="flex-row items-center justify-between w-[75%]">
              <Text
                className="text-black text-xs"
                style={{ fontFamily: "Regular" }}
              >
                Joueur_2
              </Text>

                <Text className="text-lg text-white" style={{fontFamily: 'Bold'}}>780</Text>
            </View>
          </View>

          <View className="bg-[#F5F5F5] rounded-3xl flex-row items-center justify-between p-2 mb-3">

            <View className="flex-row">

                <View className="bg-[#83838345] w-8 h-8 rounded-full mr-2 items-center justify-center">
                    <Text className="text-xs" style={{fontFamily: 'Regular'}}>06</Text>
                </View>

                <Image
                source={require("../assets/profil.jpeg")}
                className="w-8 h-8 rounded-full"
                />
            </View>

            <View className="flex-row items-center justify-between w-[75%]">
              <Text
                className="text-black text-xs"
                style={{ fontFamily: "Regular" }}
              >
                Joueur_3
              </Text>

                <Text className="text-lg" style={{fontFamily: 'Bold'}}>770</Text>
            </View>
          </View>

          <View className="bg-[#F5F5F5] rounded-3xl flex-row items-center justify-between p-2 mb-3">

            <View className="flex-row">

                <View className="bg-[#83838345] w-8 h-8 rounded-full mr-2 items-center justify-center">
                    <Text className="text-xs" style={{fontFamily: 'Regular'}}>07</Text>
                </View>

                <Image
                source={require("../assets/profil.jpeg")}
                className="w-8 h-8 rounded-full"
                />
            </View>

            <View className="flex-row items-center justify-between w-[75%]">
              <Text
                className="text-black text-xs"
                style={{ fontFamily: "Regular" }}
              >
                Joueur_4
              </Text>

                <Text className="text-lg" style={{fontFamily: 'Bold'}}>600</Text>
            </View>
          </View>

        </View>

        <TouchableOpacity className="mb-6 p-3 items-center justify-center bg-[#E1E1E1] rounded-3xl h-16" onPress={() => navigation.navigate('Tabs')}>
            <Text className="text-xs" style={{fontFamily:'SemiBold'}}>Retour à l'accueil</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Classement;

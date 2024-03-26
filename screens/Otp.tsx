import { View, Text, TouchableOpacity, TextInput, Modal, Image } from "react-native";
import React, { useState } from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const Otp = ({ navigation }: any) => {
  const [fontsLoaded] = useFonts({
    Bold: require("../assets/fonts/Poppins-Bold.ttf"),
    Regular: require("../assets/fonts/Poppins-Regular.ttf"),
    SemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });
  const [security, setSecurity] = useState(true);
  const [conf_security, setConfSecurity] = useState(true);
  const [showModal, setShowModal] = useState(false);

  if (!fontsLoaded) {
    return undefined;
  }

  function renderModal () {
    return (
        <Modal visible={showModal} transparent animationType="fade">
            <View className="flex-1 bg-black/30 items-center justify-center h-full">
                <View className="bg-white w-[90%] p-8 rounded-lg items-center">
                    <Image source={require('../assets/fireworks.png')} />

                    <Text className="mt-6 text-xl" style={{fontFamily:'Bold'}}>Inscription effectué</Text>
                    <Text className='text-center text-sm text-black' style={{fontFamily: 'Regular'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</Text>

                    <TouchableOpacity className='items-center justify-center p-4 bg-[#FFB31B] rounded-2xl mb-3 w-full mt-3' onPress={() => [setShowModal(!showModal), navigation.navigate('Tabs')]}>
                        <Text className='text-white' style={{fontFamily: 'SemiBold'}}>Lancez-vous</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )

  }

  return (
    <View className="bg-white flex-1 pt-8 pr-3 pl-3">
      <TouchableOpacity
        className="flex-row items-center"
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="left" size={24} color="orange" />
        <Text className="ml-1 text-[#FFB31B]">Retour</Text>
      </TouchableOpacity>

      <View className="flex-1 items-center justify-center">
        <Text className='text-xl text-center' style={{fontFamily:'Bold'}}>Entrer le code reçu</Text>
        <Text className='text-center text-sm text-[#838383]' style={{fontFamily: 'Regular'}}>Expire dans</Text>

        <View className="bg-orange-400/20 p-2 rounded-xl w-20 items-center mt-2">
            <Text className="text-[#FFB31B] text-sm" style={{fontFamily:'Bold'}}>02:00</Text>
        </View>

        <View className="mt-6 flex-row justify-between items-center">
            
            <View className="mr-2">
                <TextInput
                    className="text-center bg-[#FAFAFA] p-3 rounded-xl w-16 h-16 text-2xl"
                    style={{fontFamily:'Bold'}}
                    keyboardType="numeric"
                    maxLength={1}
                    placeholder="-"
                    placeholderTextColor={"black"}
                />
            </View>

            <View className="mr-2">
                <TextInput
                    className="text-center bg-[#FAFAFA] p-3 rounded-xl w-16 h-16  text-2xl"
                    style={{fontFamily:'Bold'}}
                    keyboardType="numeric"
                    maxLength={1}
                    placeholder="-"
                    placeholderTextColor={"black"}
                />
            </View>

            <View className="mr-2">
                <TextInput
                    className="text-center bg-[#FAFAFA] p-3 rounded-xl w-16 h-16 text-2xl"
                    style={{fontFamily:'Bold'}}
                    keyboardType="numeric"
                    maxLength={1}
                    placeholder="-"
                    placeholderTextColor={"black"}
                />
            </View>

            <View>
                <TextInput
                    className="text-center bg-[#FAFAFA] p-3 rounded-xl w-16 h-16 text-2xl"
                    style={{fontFamily:'Bold'}}
                    keyboardType="numeric"
                    maxLength={1}
                    placeholder="-"
                    placeholderTextColor={"black"}
                />
            </View>

        </View>

        <View className="w-full p-6 mt-3">
            <TouchableOpacity className='items-center justify-center p-4 bg-[#FFB31B] rounded-2xl mb-3' onPress={() => setShowModal(!showModal)}>
                <Text className='text-white' style={{fontFamily: 'SemiBold'}}>Valider</Text>
            </TouchableOpacity>

            <TouchableOpacity className='items-center justify-center p-4 bg-[#0C833E] rounded-2xl mb-3'>
                <Text className='text-white' style={{fontFamily: 'SemiBold'}}>Renvoyer le code</Text>
            </TouchableOpacity>
        </View>
      </View>

        {renderModal()}
    </View>
  );
};

export default Otp;

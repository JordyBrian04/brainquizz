import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, Modal, Platform } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import DateTimePicker from '@react-native-community/datetimepicker';

const Transaction = ({navigation, route}:any) => {
    //console.log(route)
    const reseau = route.params.reseau
    const action = route.params.action
    const type = route.params.type
    const [showCode, setShowCode] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [date, setDate] = useState(new Date())
    const [showPicker, setShowPicker] = useState(false)

    const [fontsLoaded] = useFonts({
        Bold: require("../assets/fonts/Poppins-Bold.ttf"),
        Regular: require("../assets/fonts/Poppins-Regular.ttf"),
        SemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
        Medium: require("../assets/fonts/Poppins-Medium.ttf"),
      });
      if (!fontsLoaded) {
        return undefined;
      }

    const handleValider = () => {
        if (action === 'Recharger mon compte' && type === 'Mobile money') {
            setShowCode(true);
        }else{
            setShowModal(true)
        }
    }

    const toggleDatePicker = () => {
        setShowPicker(!showPicker)
    }

    const onChange = ({type}:any, selectedDate:any) => {
        if(type === 'set'){
            const currentDate = selectedDate;
            setDate(currentDate)

            if(Platform.OS === 'android'){
                toggleDatePicker()

                //On attribu la date à la valeur date (currentDate.toLocaleDateString('fr-FR'))
            }
        }else{
            toggleDatePicker()
        }
    }

    function renderModal () {
        return (
            <Modal visible={showModal} transparent animationType="fade">
                <View className="flex-1 bg-black/30 items-center justify-center h-full">
                    <View className="bg-white w-[90%] p-8 rounded-lg items-center">
                        <Image source={require('../assets/fireworks.png')} />
    
                        <Text className="mt-6 text-xl" style={{fontFamily:'Bold'}}>Paiement effectué</Text>
                        <Text className='text-center text-sm text-black' style={{fontFamily: 'Regular'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</Text>
    
                        <TouchableOpacity className='items-center justify-center p-4 bg-slate-200 rounded-2xl mb-3 w-full mt-3' onPress={() => [setShowModal(!showModal), navigation.navigate('MesCerveau')]}>
                            <Text className='text-black text-xs' style={{fontFamily: 'SemiBold'}}>Retour à l'accueil</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    
      }

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

            <View className='flex-1 items-center justify-center mt-10 h-full'>
                <Text className='text-lg mb-4' style={{fontFamily: 'Medium'}}>{type}</Text>

                {reseau === "orange" ? 
                
                    <Image source={require("../assets/orangeMoney.png")} className='w-11 h-[42px]'/> :

                    reseau === "wave" ? 

                    <Image source={require("../assets/wave.png")} className='w-11 h-[42px]'/> :

                    reseau === "mtn" ?

                    <Image source={require("../assets/mtn.png")} className='w-11 h-[42px]'/> :

                    reseau === "visa" ?

                    <Image source={require("../assets/visa.png")} className='w-11 h-[42px]'/> :

                    <Image source={require("../assets/djamo.png")} className='w-11 h-[42px]'/>
                }

                <View className='bg-white p-3 mt-10 w-[90%] rounded-2xl'>
                    {type === 'Mobile money' ?
                        <View>
                            <Text className='text-[#838383] text-sm ml-4' style={{fontFamily : 'Regular'}}>{showCode ? 'Code' : type === 'Mobile money' ? 'Numéro de téléphone' : 'Numéro de la carte'}</Text>
                            {showCode ? 
                                <TextInput
                                    placeholder='1234'
                                    placeholderTextColor={'#838383'}
                                    className='bg-[#FAFAFA] p-4 rounded-2xl mt-3'
                                    keyboardType='numeric'
                                />
                                :
                                <TextInput
                                    placeholder={type === 'Mobile money' ? '+225 00 00 00 00 00' : 'CI OO3 9339 9393'}
                                    placeholderTextColor={'#838383'}
                                    className='bg-[#FAFAFA] p-4 rounded-2xl mt-3'
                                    keyboardType='phone-pad'
                                />
                            }
                        </View> : 

                        <View>
                            <View className='mb-3'>
                                <Text className='text-[#838383] text-sm ml-4' style={{fontFamily : 'Regular'}}>Nom</Text>
                                <TextInput
                                    placeholder='Sypa'
                                    placeholderTextColor={'#838383'}
                                    className='bg-[#FAFAFA] p-4 rounded-2xl mt-2'
                                />
                            </View>

                            <View className='mb-3'>
                                <Text className='text-[#838383] text-sm ml-4' style={{fontFamily : 'Regular'}}>Prénoms</Text>
                                <TextInput
                                    placeholder='Ulrick'
                                    placeholderTextColor={'#838383'}
                                    className='bg-[#FAFAFA] p-4 rounded-2xl mt-2'
                                />
                            </View>

                            <View className='mb-3'>
                                <Text className='text-[#838383] text-sm ml-4' style={{fontFamily : 'Regular'}}>Numéro de la carte</Text>
                                <TextInput
                                    placeholder='CI OO3 9339 9393'
                                    placeholderTextColor={'#838383'}
                                    className='bg-[#FAFAFA] p-4 rounded-2xl mt-2'
                                />
                            </View>

                            <View className='flex-row items-center justify-between'>
                                <View className='w-[60%]'>
                                    <Text className='text-[#838383] text-sm ml-2' style={{fontFamily : 'Regular'}}>Date d'expiration</Text>
                                    {showPicker && (
                                        <DateTimePicker
                                            mode='date'
                                            display='spinner'
                                            value={date}
                                            onChange={onChange}
                                        />
                                    )}

                                    {!showPicker && (
                                        <TouchableOpacity onPress={toggleDatePicker}>
                                           <TextInput
                                               placeholder={date.toLocaleDateString('fr-FR')}
                                               placeholderTextColor={'#838383'}
                                               className='bg-[#FAFAFA] p-4 rounded-2xl mt-2'
                                               editable={false}
                                           />
                                        </TouchableOpacity>
                                    )}
                                </View>
                                <View className='w-[30%]'>
                                    <Text className='text-[#838383] text-sm ml-2' style={{fontFamily : 'Regular'}}>CVC</Text>
                                    <TextInput
                                        placeholder='123'
                                        placeholderTextColor={'#838383'}
                                        className='bg-[#FAFAFA] p-4 rounded-2xl mt-2'
                                        keyboardType='numeric'
                                    />
                                </View>
                            </View>
                        </View>
                    }

                    <TouchableOpacity className='p-6 rounded-2xl items-center justify-center bg-[#FFB31B] mt-4 mb-4' onPress={ () => showCode ? setShowModal(true) : handleValider()}>
                        <Text className='text-white text-xs' style={{fontFamily: 'SemiBold'}}>Valider</Text>
                    </TouchableOpacity>

                    {action === 'Recharger mon compte' && type === 'Mobile money' ? 
                        <Text className='text-[#838383] text-[13px]' style={{fontFamily : 'Regular'}}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                        </Text> : null
                    }
                </View>
            </View>
      </ScrollView>
      {renderModal()}
    </View>
  )
}

export default Transaction
import { View, Text, TouchableOpacity, ScrollView, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, EvilIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useFonts } from 'expo-font'

const MesCerveau = ({navigation}:any) => {

    const [showModal, setShowModal] = useState(false)
    const [typeTransaction, setTypeTransaction] = useState('Mobile money')
    const [reseau, setReseau] = useState('orange')
    const [action, setAction] = useState('')

    const [fontsLoaded] = useFonts({
        Bold: require("../assets/fonts/Poppins-Bold.ttf"),
        Regular: require("../assets/fonts/Poppins-Regular.ttf"),
        SemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
        Medium: require("../assets/fonts/Poppins-Medium.ttf"),
      });
      if (!fontsLoaded) {
        return undefined;
      }

      function renderModal () {
        return(
            <Modal visible={showModal} transparent animationType='fade'>
                <View className='flex-1 bg-black/20 items-center justify-center'>
                    <View className='p-3 bg-white rounded-2xl w-[90%]'>
                        <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                            <EvilIcons name="close" size={24} color="black" />
                        </TouchableOpacity>

                        <Text className='text-center text-[16px]' style={{fontFamily: 'Regular'}}>{action}</Text>

                        {/* Mobile Money */}
                        <View className='bg-slate-100 p-4 rounded-2xl mt-3 mb-3'>
                            <TouchableOpacity className='flex-row items-center' onPress={() => [setTypeTransaction('Mobile money'), setReseau('orange')]}>
                                <View className='w-4 h-4 border border-[#FFB31B] items-center justify-center' style={{borderRadius: 100}}>
                                    <View className='w-2 h-2' style={{backgroundColor: typeTransaction == 'Mobile money' ? '#FFB31B' : 'rgba(241 245 249 / 1)', borderRadius: 100}}></View>
                                </View>
                                <Text className='text-sm ml-2'>Mobile money</Text>
                            </TouchableOpacity>

                            <View className='p-4 mt-2' style={{display : typeTransaction == 'Mobile money' ? 'flex' : 'none'}}>
                                <View className='flex-row justify-between items-center'>

                                    {/* Orange */}
                                    <TouchableOpacity className='w-14 h-14 p-2 border-2 items-center justify-center' onPress={() => setReseau('orange')} style={{borderRadius: 100, borderColor: reseau == 'orange' ? '#FFB31B' : 'rgba(241 245 249 / 1)'}}>
                                        <Image source={require("../assets/orangeMoney.png")} className='w-11 h-[42px]'/>
                                    </TouchableOpacity>

                                    {/* Wave */}
                                    <TouchableOpacity className='w-14 h-14 p-2 border-2 items-center justify-center' onPress={() => setReseau('wave')} style={{borderRadius: 100, borderColor: reseau == 'wave' ? '#FFB31B' : 'rgba(241 245 249 / 1)'}}>
                                        <Image source={require("../assets/wave.png")} className='w-11 h-[43px]'/>
                                    </TouchableOpacity>

                                    {/* MTN */}
                                    <TouchableOpacity className='w-14 h-14 p-2 border-2 items-center justify-center' onPress={() => setReseau('mtn')} style={{borderRadius: 100, borderColor: reseau == 'mtn' ? '#FFB31B' : 'rgba(241 245 249 / 1)'}}>
                                        <Image source={require("../assets/mtn.png")} className='w-11 h-[43px]'/>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>

                        {/* Carte bancaire */}
                        <View className='bg-slate-100 p-4 rounded-2xl mt-3 mb-3'>
                            <TouchableOpacity className='flex-row items-center' onPress={() => [setTypeTransaction('Carte bancaire'), setReseau('visa')]}>
                                <View className='w-4 h-4 border border-[#FFB31B] items-center justify-center' style={{borderRadius: 100}}>
                                    <View className='w-2 h-2' style={{backgroundColor: typeTransaction == 'Carte bancaire' ? '#FFB31B' : 'rgba(241 245 249 / 1)', borderRadius: 100}}></View>
                                </View>
                                <Text className='text-sm ml-2'>Carte bancaire</Text>
                            </TouchableOpacity>

                            <View className='p-4 mt-2' style={{display : typeTransaction == 'Carte bancaire' ? 'flex' : 'none'}}>
                                <View className='flex-row items-center'>

                                    {/* Orange */}
                                    <TouchableOpacity className='w-14 h-14 p-2 border-2 items-center justify-center' onPress={() => setReseau('visa')} style={{borderRadius: 100, borderColor: reseau == 'visa' ? '#FFB31B' : 'rgba(241 245 249 / 1)'}}>
                                        <Image source={require("../assets/visa.png")} className='w-11 h-[42px]'/>
                                    </TouchableOpacity>

                                    {/* Wave */}
                                    <TouchableOpacity className='w-14 h-14 p-2 border-2 items-center justify-center ml-6' onPress={() => setReseau('djamo')} style={{borderRadius: 100, borderColor: reseau == 'djamo' ? '#FFB31B' : 'rgba(241 245 249 / 1)'}}>
                                        <Image source={require("../assets/djamo.png")} className='w-11 h-[43px]'/>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>

                        <View className='mt-6'>
                            <TouchableOpacity 
                                className='p-6 rounded-2xl items-center justify-center bg-[#FFB31B]'
                                onPress={() => [navigation.navigate({ name: 'Transaction', params: {reseau: reseau, action:action, type: typeTransaction} }), setShowModal(!showModal)]}
                            >
                                <Text className='text-white text-xs' style={{fontFamily: 'SemiBold'}}>Valider</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
      }

  return (
    <View className="bg-[#F9F7F7] flex-1 pt-8 pr-3 pl-3">

        <ScrollView className='mt-6'>
            <TouchableOpacity
                className="flex-row items-center"
                onPress={() => navigation.goBack()}
            >
                <AntDesign name="left" size={24} color="orange" />
                <Text className="ml-1 text-[#FFB31B]">Retour</Text>
            </TouchableOpacity>

            <LinearGradient
                colors={['#1FD625', '#34B4E2']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ flex: 1 }}
                className='rounded-2xl mt-8 -z-20'
            >
                <View className='p-6 flex-row items-center justify-between h-[200px]'>

                    <View>
                        <Text className='text-white text-sm' style={{fontFamily:'Regular'}}>Mes cerveaux</Text>

                        <View className='mt-2 flex-row items-center'>
                            <View className='bg-white/25 w-12 h-12 rounded-full p-2 items-center justify-center'>
                                <Image source={require("../assets/brain.png")} />
                            </View>

                            <Text className='text-white text-4xl ml-2' style={{fontFamily:'Bold'}}>1,200</Text>
                        </View>

                        <View className='mt-2 bg-[#F3D617] p-2 rounded-xl'>
                            <Text>1 cerveau = 500 FCFA</Text>
                        </View>
                    </View>

                    <View className='w-28 h-24 items-center justify-center p-4'>
                        <Image source={require("../assets/brain-lg.png")} className='w-full h-full' />
                    </View>

                </View>

            </LinearGradient>

            <View className='flex-row items-center justify-between w-full py-6 px-3 bottom-12'>
                <TouchableOpacity className='bg-[#FFB31B] p-2 rounded-3xl items-center justify-center w-[150px] h-12' onPress={() => [setAction('Retirer'), setShowModal(!showModal)]}>
                    <Text className='text-white text-xs' style={{fontFamily: 'SemiBold'}}>Retirer</Text>
                </TouchableOpacity>

                <TouchableOpacity className='bg-[#FFB31B] p-2 rounded-3xl items-center justify-center w-[150px] h-12' onPress={() => [setAction('Recharger mon compte'), setShowModal(!showModal)]}>
                    <Text className='text-white text-xs' style={{fontFamily: 'SemiBold'}}>Recharger</Text>
                </TouchableOpacity>
            </View>

            <View className='bg-white p-3 rounded-2xl bottom-11 h-full'>
                <Text className='text-xs' style={{fontFamily: 'Regular'}}>Historique des transactions</Text>

                <View className='mt-3'>

                    <View className='bg-[#F8F8F8] p-3 rounded-2xl mb-2'>

                        <View className='flex-row items-center justify-between mb-1'>
                            <Text className='text-sm' style={{fontFamily: 'Regular'}}>Retrait par orange money</Text>
                            <Text className='text-sm text-right text-[#0C833E]' style={{fontFamily: 'Regular'}}>+1,000 FCFA</Text>
                        </View>

                        <View className='flex-row items-center justify-between mb-1'>
                            <Text className='text-xs text-[#828282]' style={{fontFamily: 'Regular'}}>12/02/2022</Text>
                            <View className='flex-row justify-between items-center'>
                                <Image source={require("../assets/brain.png")} className='w-[16px] h-3 mr-1' style={{tintColor: '#FFB31B'}}/>
                                <Text className='text-sm text-right text-black' style={{fontFamily: 'Regular'}}>2</Text>
                            </View>
                        </View>

                    </View>

                    <View className='bg-[#F8F8F8] p-3 rounded-2xl mb-2'>

                        <View className='flex-row items-center justify-between mb-1'>
                            <Text className='text-sm' style={{fontFamily: 'Regular'}}>Retrait par orange money</Text>
                            <Text className='text-sm text-right text-[#EC4646]' style={{fontFamily: 'Regular'}}>-1,000 FCFA</Text>
                        </View>

                        <View className='flex-row items-center justify-between mb-1'>
                            <Text className='text-xs text-[#828282]' style={{fontFamily: 'Regular'}}>12/02/2022</Text>
                            <View className='flex-row justify-between items-center'>
                                <Image source={require("../assets/brain.png")} className='w-[16px] h-3 mr-1' style={{tintColor: '#FFB31B'}}/>
                                <Text className='text-sm text-right text-black' style={{fontFamily: 'Regular'}}>2</Text>
                            </View>
                        </View>

                    </View>

                    <View className='bg-[#F8F8F8] p-3 rounded-2xl mb-2'>

                        <View className='flex-row items-center justify-between mb-1'>
                            <Text className='text-sm' style={{fontFamily: 'Regular'}}>Retrait par orange money</Text>
                            <Text className='text-sm text-right text-[#0C833E]' style={{fontFamily: 'Regular'}}>+1,000 FCFA</Text>
                        </View>

                        <View className='flex-row items-center justify-between mb-1'>
                            <Text className='text-xs text-[#828282]' style={{fontFamily: 'Regular'}}>12/02/2022</Text>
                            <View className='flex-row justify-between items-center'>
                                <Image source={require("../assets/brain.png")} className='w-[16px] h-3 mr-1' style={{tintColor: '#FFB31B'}}/>
                                <Text className='text-sm text-right text-black' style={{fontFamily: 'Regular'}}>2</Text>
                            </View>
                        </View>

                    </View>

                    <View className='bg-[#F8F8F8] p-3 rounded-2xl mb-2'>

                        <View className='flex-row items-center justify-between mb-1'>
                            <Text className='text-sm' style={{fontFamily: 'Regular'}}>Retrait par orange money</Text>
                            <Text className='text-sm text-right text-[#0C833E]' style={{fontFamily: 'Regular'}}>+1,000 FCFA</Text>
                        </View>

                        <View className='flex-row items-center justify-between mb-1'>
                            <Text className='text-xs text-[#828282]' style={{fontFamily: 'Regular'}}>12/02/2022</Text>
                            <View className='flex-row justify-between items-center'>
                                <Image source={require("../assets/brain.png")} className='w-[16px] h-3 mr-1' style={{tintColor: '#FFB31B'}}/>
                                <Text className='text-sm text-right text-black' style={{fontFamily: 'Regular'}}>2</Text>
                            </View>
                        </View>

                    </View>
                    
                </View>
            </View>
        </ScrollView>

        {renderModal()}
    </View>
  )
}

export default MesCerveau
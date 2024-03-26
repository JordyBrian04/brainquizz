import { View, Text, ScrollView, TouchableOpacity, Image, FlatList, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Mises = ({navigation}:any) => {

    const [mise, setMise] = useState(1)
    const [autremise, setAutreMise] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const [fontsLoaded] = useFonts({
        Bold: require("../assets/fonts/Poppins-Bold.ttf"),
        Regular: require("../assets/fonts/Poppins-Regular.ttf"),
        SemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
        Medium: require("../assets/fonts/Poppins-Medium.ttf"),
    });
    
      if (!fontsLoaded) {
        return undefined;
      }

    const ListeMise = [
        {
            key:"1",
            value: 1
        },
        {
            key:"2",
            value: 5
        },
        {
            key:"3",
            value: 10
        },
        {
            key:"4",
            value: 20
        },
        {
            key:"5",
            value: 50
        },
        {
            key:"6",
            value: 100
        },
    ]

    const numRow = 3;

    const handleChangeText = (value:any) => {
        setMise(value);
    };

    function renderModal() {
        return (
            <Modal visible={showModal} animationType='fade' transparent>
                <View className='flex-1 bg-black/25 items-center justify-center'>
                    <View className='bg-white p-3 w-[90%] rounded-xl'>
                        <Text className='text-center text-black text-xl' style={{fontFamily:'Bold'}}>
                            Confirmer la demande d'inscription
                        </Text>

                        <Text className='text-center text-black text-sm' style={{fontFamily:'Regular'}}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        </Text>

                        <View className='mt-6'>
                            <TouchableOpacity className='p-6 bg-[#FFB31B] items-center justify-center rounded-3xl mb-4' onPress={() => [setShowModal(!showModal), navigation.navigate('Tabs')]}>
                                <Text className='text-xs text-white' style={{fontFamily: 'SemiBold'}}>Oui</Text>
                            </TouchableOpacity>

                            <TouchableOpacity className='p-6 bg-[#83838338] items-center justify-center rounded-3xl' onPress={() => setShowModal(!showModal)}>
                                <Text className='text-xs text-black' style={{fontFamily: 'SemiBold'}}>Non</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }

  return (
    <View className='bg-white flex-1 pt-8 pr-4 pl-4'>
      <ScrollView className='mt-6'>
        <TouchableOpacity
            className="flex-row items-center"
            onPress={() => navigation.goBack()}
        >
            <AntDesign name="left" size={24} color="orange" />
            <Text className="ml-1 text-[#FFB31B]">Retour</Text>
        </TouchableOpacity>

        <View className='p-6 bg-[#34B4E2] rounded-2xl mt-3'>
            <Text className='text-center text-white text-sm' style={{fontFamily:'Medium'}}>
                Réserver votre place en misant et profiter des -10% de reduction
            </Text>
        </View>

        <View className='mt-8'>
            <Text className='text-center text-black' style={{fontFamily:'Medium', fontSize:18}}>Combien voulez vous misez</Text>
            <Text className='text-center text-[#838383]' style={{fontFamily:'Regular', fontSize:13}}>Sélectionner votre nombre de pièces</Text>
        </View>

        <View className='flex-1 items-center justify-center mb-4'>
            <FlatList
                data={ListeMise}
                keyExtractor={item => item.key}
                renderItem={({item, index}) => {
                    return (
                        <View className='p-1 w-[33%] rounded-xl'>

                            <LinearGradient
                                colors={mise === item.value ? ['#34E2C5', '#34B4E2'] : ['#F6F6F6', '#F6F6F6']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={{ flex: 1 }}
                                className='rounded-2xl mt-8'
                            >
    
                            <View className='p-1'>
    
                                <TouchableOpacity onPress={() => [setMise(item.value), setAutreMise(false)]}>
                                    <View className='w-5 h-5 border items-center justify-center' style={{borderRadius: 100, borderColor : mise === item.value ? '#FFFFFF' : '#838383'}}>
                                        <View className='w-3 h-3 rounded-full' style={{backgroundColor: mise === item.value ? "#FFFFFF" : "#F6F6F6"}}></View>
                                    </View>
    
                                    <View className='items-center justify-center p-4'>
                                        <Image source={require("../assets/brain-lg.png")} className='w-[49px] h-10' />
                                        <Text className='bottom-[37px]' style={{fontFamily: 'Bold', fontSize: 20, color: mise === item.value ? "#FFFFFF" : "#000000"}}>{item.value}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            </LinearGradient>
                        </View>
                        )
                }}
                scrollEnabled={false}
                numColumns={numRow}
            />
        </View>

        <View className='h-1 w-[73%] bg-[#F6F6F6] ml-12'></View>

        <View className='bg-[#F6F6F6] mb-6 p-3 mt-4 rounded-2xl'>
            <View className='flex-row items-center justify-between'>
                <TouchableOpacity className='flex-row' onPress={() => [setAutreMise(true), setMise(0)]}>
                    <View className='w-5 h-5 border border-white items-center justify-center' style={{borderRadius: 100, borderColor: '#838383'}}>
                        <View className='w-3 h-3 rounded-full' style={{backgroundColor: autremise ? '#FFB31B' : '#F6F6F6'}}></View>
                    </View>

                    <Text className='ml-2' style={{fontFamily: 'Regular', fontSize: 13}}>Autres pièces</Text>
                </TouchableOpacity>

                <Image source={require("../assets/brain-lg.png")} className='w-[49px] h-10' style={{tintColor: '#838383'}} />
            </View>

            <Text className='text-sm text-[#838383] mb-3' style={{fontFamily: 'Regular'}}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            </Text>

            <View className='bg-white p-4 rounded-2xl'>
                <TextInput
                    placeholder='200'
                    className='text-2xl text-black font-extrabold'
                    editable={autremise ? true : false}
                    keyboardType='numeric'
                    onChangeText={handleChangeText}
                />
            </View>

        </View>

        <TouchableOpacity className='p-6 bg-[#FFB31B] items-center justify-center rounded-3xl' onPress={() => setShowModal(!showModal)}>
            <Text className='text-xs text-white' style={{fontFamily: 'SemiBold'}}>Suivant</Text>
        </TouchableOpacity>

      </ScrollView>
      {renderModal()}
    </View>
  )
}

export default Mises
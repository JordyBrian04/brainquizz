import { View, Text, ScrollView, Image, TouchableOpacity, Modal, TouchableWithoutFeedback, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from "expo-font";
import CardParcours from '../../component/CardParcours';
import { COLORS } from '../../utils/colors';
import { dateCardStatus } from '../../utils/data';
import Carousel from '../../component/Carousel';
import { getUser } from '../../services/AsyncStorage';
import db from '../../services/dataBase';

const Menu = ({navigation}:any) => {

    const [showModal, setShowModal] = useState(false)
    const [currentUser, setCurrentUserInfo] = useState({
      username: "",
      picture: "",
      balance: 0
    })
    const [image, setImage] = useState("");

    const [fontsLoaded] = useFonts({
        Bold: require("../../assets/fonts/Poppins-Bold.ttf"),
        Regular: require("../../assets/fonts/Poppins-Regular.ttf"),
        SemiBold: require("../../assets/fonts/Poppins-SemiBold.ttf"),
        Medium: require("../../assets/fonts/Poppins-Medium.ttf"),
    });


      useEffect(() => {
        getUser()
        .then((res) => {
          console.log(res);
          setCurrentUserInfo({...currentUser, 
            username: res?.username,
            picture : res?.profilePictureUrl,
            balance: res?.balance === null ? 0 : res?.balance
          })
        })
        .catch((err) => {
          console.error(err);
        })

        // db.transaction(tx => {
        //   tx.executeSql(
        //     "SELECT image from data LIMIT 1", 
        //     [],
        //     (_, result) => {
        //       //console.log(result.rows._array[0].image);
        //       setImage(result.rows._array[0].image)
        //     },
        //     (_, err) => {
        //       console.log(err);
        //       return false;
        //     }
        //   )
        // })
      }, [])

      const handleGet = () => {
        navigation.navigate({ name: 'RegleReduction' } as never);
      };

      const handleCommandeQuiz = () => {
        navigation.navigate({ name: 'Commande' } as never);
      };

      const closeModal = () => {
        setShowModal(false);
      };

      function renderModal() {
        return (
            <Modal visible={showModal} animationType='fade' transparent onRequestClose={closeModal}>
              <TouchableWithoutFeedback onPress={closeModal}>
                <View className='flex-1 bg-gray-100 items-center justify-center'>
                    <View className='bg-white p-3 w-[90%] rounded-xl'>
                        <Text className='text-center text-black text-lg mb-4' style={{fontFamily:'Regular'}}>
                            Entrer le code du quiz
                        </Text>

                        <TextInput
                          placeholder='1234'
                          className='bg-[#FAFAFA] p-3 rounded-3xl'
                          keyboardType='numeric'
                        />
    
                        <View className='mt-6'>
                            <TouchableOpacity className='p-6 bg-[#FFB31B] items-center justify-center rounded-3xl mb-4' onPress={() => [setShowModal(!showModal), navigation.navigate({name: 'Rejoindre', params:{status: 'joinQuiz'}})]}>
                                <Text className='text-xs text-white' style={{fontFamily: 'SemiBold'}}>Rejoindre</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>
        )
      }

      if (!fontsLoaded) {
        return undefined;
      }

  return (
    <View className='bg-[#F9F7F7] flex-1 pt-8 pr-3 pl-3'>
      <ScrollView>
        <LinearGradient
        colors={['#34E2C5', '#34B4E2']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
        className='rounded-2xl mt-8'
        >
            {/* <View className='p-6 flex-row items-center'>
                <Image source={image === "" ? require('../../assets/profil.png') : {uri:image}} className='w-12 h-12 rounded-full bg-cover' style={{borderWidth: 1, borderColor: '#EFD241'}}/>
                <View className='ml-3'>
                    <Text className='text-white' style={{fontFamily: 'Regular'}}>Hello</Text>
                    <Text className='text-white' style={{fontFamily: 'Bold'}}>{currentUser.username}</Text>
                </View>

            </View> */}
        </LinearGradient>

        <View className='absolute p-3 right-0 flex-row items-center justify-end w-full'>
            <View className='absolute z-10 w-12 h-12 p-3 bg-[#FFB31B] rounded-full items-center justify-center right-[100px]'>
                <TouchableOpacity onPress={() => navigation.navigate('MesCerveau')}>
                    <Image source={require('../../assets/brain.png')}/>
                </TouchableOpacity>
            </View>
            <View className='w-[40%] p-2 bg-[#0C833E] rounded-2xl items-center justify-center'>
                <Text className='text-white ml-4 text-xs text-center' style={{fontFamily: 'Medium'}}>0</Text>
                {/* {currentUser ? currentUser.balance.toLocaleString() : 0} */}
            </View>
        </View>

        <TouchableOpacity onPress={handleGet}>
          <CardParcours
              img={require('../../assets/interrogation.png')}
              textBtn="Obtenir"
              title={'78%'}
              widthcustom={'50%'}
              linearOne={'one'}
              onPress={handleGet}
              switchImage={true}
              bgBtn={COLORS.ORANGE}
          />
        </TouchableOpacity>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
          {dateCardStatus.map(dateCardStat => {
            return (
              <View key={dateCardStat?.id}>

                    <View className='self-center z-10 top-6 w-12 h-12 rounded-full items-center justify-center' style={{backgroundColor: dateCardStat?.bgColor}}>
                        <Image source={dateCardStat?.img} className='w-6 h-6' tintColor={COLORS.WHITE} />
                    </View> 

                <TouchableOpacity className='w-[110px] h-[120px] bg-white items-center rounded-xl mr-3 p-1' 
                  onPress={() => dateCardStat?.page === 'ChoixQuiz' ? navigation.navigate({name: dateCardStat?.page, params: {status: dateCardStat?.title}}) : dateCardStat?.page === 'Rejoindre' ? setShowModal(true) : navigation.navigate(dateCardStat?.page)}
                >

                    <Text className='text-[12px] text-[#2A2A2A] text-center mt-8' style={{fontFamily: 'Regular'}}>{dateCardStat?.title}</Text>

                    <View className='flex-1 justify-end items-end'>
                        <Image source={require('../../assets/back.png')} className='w-8 h-8'/>
                    </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>

          <View className='p-6 mt-6 bg-[#18CEF1] rounded-2xl flex-row justify-between items-center'>

            <View>
                <Text style={{fontFamily: 'Medium'}}>Commander des quiz</Text>
                <Text className='w-48 text-white text-sm' style={{fontFamily: 'Regular'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>

                <TouchableOpacity className='bg-[#FFB31B] p-3 mt-2 items-center rounded-2xl w-40' onPress={() => navigation.navigate('Commander')}>
                    <Text className='text-xs text-white' style={{fontFamily: 'SemiBold'}}>Lancez vous</Text>
                </TouchableOpacity>
            </View>

            <Image source={require('../../assets/interro.png')} />
          </View>

          <Carousel/>

      </ScrollView>
      {renderModal()}
    </View>
  )
}

export default Menu
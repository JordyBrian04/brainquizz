import { View, Text, ScrollView, Image, TouchableOpacity, Modal, Share } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";


const DetailCommande = ({navigation, route} : any) => {

  const [showModal, setShowModal] = useState(false)
  const [showPaieModal, setShowPaieModal] = useState(false)
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

  const statusCommande = route.params.statusCommande;

  function renderModal() {
    return (
        <Modal visible={showModal} animationType='fade' transparent>
            <View className='flex-1 bg-black/25 items-center justify-center'>
                <View className='bg-white p-3 w-[90%] rounded-xl'>
                    <Text className='text-center text-black text-xl mb-4' style={{fontFamily:'Bold'}}>
                        Confirmer l'annulation
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

  function renderPaieModal() {
    return (
        <Modal visible={showPaieModal} animationType='fade' transparent>
            <View className='flex-1 bg-black/25 items-center justify-center'>
                <View className='bg-white p-3 w-full h-full'>
                    <TouchableOpacity
                      className="flex-row items-center mb-5"
                      onPress={() => setShowPaieModal(!showPaieModal)}
                    >
                      <AntDesign name="left" size={24} color="orange" />
                      <Text className="ml-1 text-[#FFB31B]">Retour</Text>
                    </TouchableOpacity>

                    <Text className='text-center text-[16px]' style={{fontFamily: 'Regular'}}>Paiement</Text>

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
                            onPress={() => [navigation.navigate({ name: 'Transaction', params: {reseau: reseau, action:action, type: typeTransaction} }), setShowPaieModal(!showPaieModal)]}
                        >
                            <Text className='text-white text-xs' style={{fontFamily: 'SemiBold'}}>Valider</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
  }

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          `Utilise le code 0511545 pour rejoindre mon quiz sur BrainQuiz`,
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

  const handleButton = () => {
    if (statusCommande === 'traitement'){
      setShowModal(!showModal)
    }

    if (statusCommande === 'paiement'){
      setShowPaieModal(!showPaieModal)
    }

    if (statusCommande === 'termine'){
      onShare()
    }

  }

  return (
    <View className='bg-[#F9F7F7] flex-1 pt-8 pr-3 pl-3 pb-3'>
      <ScrollView>
        {statusCommande === 'traitement' ? (
          <View>
            <TouchableOpacity
              className="flex-row items-center"
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="left" size={24} color="orange" />
              <Text className="ml-1 text-[#FFB31B]">Retour</Text>
            </TouchableOpacity>

            <View className='mt-4 mb-4'>
              <View className='bg-white p-3 rounded-3xl'>

                <View className='p-2 borber-b-2 border-[#7070703B]'>
                  <Text className='text-sm mb-2' style={{fontFamily: 'Regular'}}>Qui êtes-vous ?</Text>
                  <Text className='text-xs text-[#838383]' style={{fontFamily: 'Regular'}}>Sylla Karamoko</Text>
                </View>

                <View className='p-2 borber-b-2 border-[#7070703B]'>
                  <Text className='text-sm mb-2' style={{fontFamily: 'Regular'}}>Quel est le contexte ?</Text>
                  <Text className='text-xs text-[#838383]' style={{fontFamily: 'Regular'}}>Anniversaire</Text>
                </View>

                <View className='p-2 borber-b-2 border-[#7070703B]'>
                  <Text className='text-sm mb-2' style={{fontFamily: 'Regular'}}>Combien de temps devra durer le quiz?</Text>
                  <Text className='text-xs text-[#838383]' style={{fontFamily: 'Regular'}}>03:00</Text>
                </View>

                <View className='p-2 borber-b-2 border-[#7070703B]'>
                  <Text className='text-sm mb-2' style={{fontFamily: 'Regular'}}>Combien de personnes doivent participer?</Text>
                  <Text className='text-xs text-[#838383]' style={{fontFamily: 'Regular'}}>10</Text>
                </View>

                <View className='p-2 borber-b-2 border-[#7070703B]'>
                  <Text className='text-sm mb-2' style={{fontFamily: 'Regular'}}>Quel est le thème à aborder?</Text>
                  <Text className='text-xs text-[#838383]' style={{fontFamily: 'Regular'}}>Anniversaire</Text>
                </View>

                <View className='p-2 borber-b-2 border-[#7070703B] flex-row justify-between items-center'>

                  <View>
                    <Text className='text-sm mb-2' style={{fontFamily: 'Regular'}}>Date de déroulement :</Text>
                    <Text className='text-xs text-[#838383]' style={{fontFamily: 'Regular'}}>12/02/2023</Text>
                  </View>

                  <View className='items-start'>
                    <Text className='text-sm mb-2' style={{fontFamily: 'Regular'}}>Heure :</Text>
                    <Text className='text-xs text-[#838383]' style={{fontFamily: 'Regular'}}>03:00</Text>
                  </View>
                  
                </View>
                
                <View className='p-2 borber-b-2 border-[#7070703B]'>
                  <Text className='text-sm mb-2' style={{fontFamily: 'Regular'}}>Lieu de déroulement :</Text>
                  <Text className='text-xs text-[#838383]' style={{fontFamily: 'Regular'}}>Marcory</Text>
                </View>
                
                <View className='p-2 borber-b-2 border-[#7070703B]'>
                  <Text className='text-sm mb-2' style={{fontFamily: 'Regular'}}>A quel numéro pouvons nous vous contacter</Text>
                  <Text className='text-xs text-[#838383]' style={{fontFamily: 'Regular'}}>+225 00 00 00 00 00</Text>
                </View>
                
                <View className='p-2 borber-b-2 border-[#7070703B]'>
                  <Text className='text-sm mb-2' style={{fontFamily: 'Regular'}}>A quel email pouvons nous vous contacter</Text>
                  <Text className='text-xs text-[#838383]' style={{fontFamily: 'Regular'}}>email@email.com</Text>
                </View>

              </View>
            </View>
          </View>
        ): (
          <View>
            <View className='flex-row items-center justify-between mb-4'>

              <TouchableOpacity
                className="flex-row items-center"
                onPress={() => navigation.goBack()}
              >
                <AntDesign name="left" size={24} color="orange" />
                <Text className="ml-1 text-[#FFB31B]">Retour</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="flex-row items-center"
                onPress={() => navigation.goBack()}
              >
                <Feather name="alert-circle" size={24} color="orange" />
                <Text className="ml-1 text-[#FFB31B]">Signaler un problème</Text>
              </TouchableOpacity>

            </View>

            <Text className='text-center text-sm mb-4' style={{fontFamily: 'Regular'}}>Questions propposé</Text>

            <View className='bg-[#DBDBDB21] rounded-3xl p-3 mb-4'>
              <View className='flex-row'>
                <Text className='text-lg mr-3' style={{fontFamily: 'Bold'}}>01</Text>
                <TouchableOpacity className='flex-row justify-between w-[85%]'>
                  <Text className='text-sm' style={{fontFamily: 'Medium'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</Text>
                  <AntDesign name="down" size={24} color="orange" />
                </TouchableOpacity>
              </View>

              <View className='p-3'>
                <View className='bg-[#DBDBDB40] p-2 rounded-3xl mb-3'>
                  <Text style={{fontFamily:'Regular', fontSize : 14, textAlign: 'center'}}>Lorem ipsum dolor sit amet, consetetur</Text>
                </View>
                <View className='bg-[#0C833E] p-2 rounded-3xl mb-3'>
                  <Text style={{fontFamily:'Regular', fontSize : 14, textAlign: 'center', color: '#ffffff'}}>Lorem ipsum dolor sit amet, consetetur</Text>
                </View>
                <View className='bg-[#DBDBDB40] p-2 rounded-3xl'>
                  <Text style={{fontFamily:'Regular', fontSize : 14, textAlign: 'center'}}>Lorem ipsum dolor sit amet, consetetur</Text>
                </View>
              </View>
            </View>

            <View className='bg-[#DBDBDB21] rounded-3xl p-3 mb-4'>
              <View className='flex-row'>
                <Text className='text-lg mr-3' style={{fontFamily: 'Bold'}}>01</Text>
                <Text className='text-sm' style={{fontFamily: 'Medium'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</Text>
              </View>

              <View className='p-3'>
                <Text style={{fontFamily:'Regular', fontSize : 14, textAlign: 'center', color :'#838383'}}>Lorem ipsum dolor sit amet, consetetur</Text>
              </View>
            </View>

            <View className='bg-[#DBDBDB21] rounded-3xl p-3 mb-4'>
              <View className='flex-row'>
                <Text className='text-lg mr-3' style={{fontFamily: 'Bold'}}>01</Text>
                <Text className='text-sm' style={{fontFamily: 'Medium'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</Text>
              </View>

              <View className='p-3'>
                <Text style={{fontFamily:'Regular', fontSize : 14, textAlign: 'center', color :'#838383'}}>Lorem ipsum dolor sit amet, consetetur</Text>
              </View>
            </View>

            <View className='bg-[#DBDBDB21] rounded-3xl p-3 mb-4'>
              <View className='flex-row'>
                <Text className='text-lg mr-3' style={{fontFamily: 'Bold'}}>01</Text>
                <Text className='text-sm' style={{fontFamily: 'Medium'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</Text>
              </View>

              <View className='p-3'>
                <Text style={{fontFamily:'Regular', fontSize : 14, textAlign: 'center', color :'#838383'}}>Lorem ipsum dolor sit amet, consetetur</Text>
              </View>
            </View>
          </View>
        )}

        <TouchableOpacity
            className="items-center justify-center mb-3 p-5 rounded-3xl"
            onPress={handleButton}
            style={{backgroundColor : statusCommande === 'traitement' ? '#8383831F' :  statusCommande === 'paiement' ? '#FFB31B' : '#34B4E2'}}
        >
            <Text className="ml-1 text-xs" style={{color : statusCommande === 'traitement' ? '#000000' : '#ffffff', fontFamily:'SemiBold'}}>
              {statusCommande === 'traitement' ? 'Annuler la demande' : statusCommande === 'paiement' ? 'Passer au paiement' : 'Partager le code'}
            </Text>
        </TouchableOpacity>
      </ScrollView>
      {renderModal()}
      {renderPaieModal()}
    </View>
  )
}

export default DetailCommande
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useFonts } from "expo-font";
import { getUser } from '../services/AsyncStorage';

const EditProfil = ({navigation}:any) => {

    const [fontsLoaded] = useFonts({
        Bold : require("../assets/fonts/Poppins-Bold.ttf"),
        Regular : require("../assets/fonts/Poppins-Regular.ttf"),
        SemiBold : require("../assets/fonts/Poppins-SemiBold.ttf"),
        Medium : require("../assets/fonts/Poppins-Medium.ttf"),
    })
    const [security, setSecurity] = useState(true)
    const [newsecurity, setNewSecurity] = useState(true)
    const [conf_security, setConfSecurity] = useState(true)
    const [currentUser, setCurrentUserInfo] = useState({
        nom: "",
        prenom: "",
        numero: "",
        email: ""
    })

    if(!fontsLoaded){
        return undefined
    }

    useEffect(() => {
        getUser()
        .then((res) => {
          //console.log(res);
          setCurrentUserInfo({...currentUser, 
            nom: res?.lastName,
            prenom: res?.firstName,
            email : res?.email,
            numero: res?.phoneNumber
          })
        })
        .catch((err) => {
          console.error(err);
        })
      }, [])
    
  return (
    <View className='flex-1 pt-8 pr-3 pl-3 bg-white'>
      <ScrollView className='mt-6'>
        <TouchableOpacity className='flex-row items-center'  onPress={()=> navigation.goBack()}>
            <AntDesign name="left" size={24} color="orange" />
            <Text className='ml-1 text-[#FFB31B]'>Retour</Text>
        </TouchableOpacity>


            <View className='text-left mt-6 px-4'>

                <Text className='text-lg mb-6' style={{fontFamily: 'Medium'}}>Editer les informations</Text>

                <View className='mb-2'>
                    <Text className='text-[#838383] ml-4' style={{fontFamily: 'Regular'}}>Nom</Text>
                    <TextInput
                        placeholder='Dios'
                        className='p-3 bg-[#FAFAFA] rounded-xl'
                        autoCapitalize='words'
                        value={currentUser.nom}
                    />
                </View>

                <View className='mb-2'>
                    <Text className='text-[#838383] ml-4' style={{fontFamily: 'Regular'}}>Prénoms</Text>
                    <TextInput
                        placeholder='Siols'
                        className='p-3 bg-[#FAFAFA] rounded-xl'
                        autoCapitalize='words'
                        value={currentUser.prenom}
                    />
                </View>
                <View className='mb-2'>
                    <Text className='text-[#838383] ml-4' style={{fontFamily: 'Regular'}}>Numéro de téléphone (WhatsApp)</Text>
                    <TextInput
                        placeholder='+225 00 00 00 00 00'
                        className='p-3 bg-[#FAFAFA] rounded-xl'
                        keyboardType='phone-pad'
                        value={currentUser.numero}
                    />
                </View>
                <View className='mb-6'>
                    <Text className='text-[#838383] ml-4' style={{fontFamily: 'Regular'}}>Email</Text>
                    <TextInput
                        placeholder='email@email.com'
                        className='p-3 bg-[#FAFAFA] rounded-xl'
                        keyboardType='email-address'
                        value={currentUser.email}
                    />
                </View>

                <Text className='text-lg mb-6' style={{fontFamily: 'Medium'}}>Sécurité</Text>

                <View className='mb-2'>
                    <Text className='text-[#838383] ml-4' style={{fontFamily: 'Regular'}}>Mot de passe</Text>
                    <View className='flex-row items-center justify-between p-3 bg-[#FAFAFA] rounded-xl'>

                        <TextInput
                            placeholder='********************'
                            className='w-[90%]'
                            secureTextEntry={security}
                        />

                        <TouchableOpacity onPress={() => setSecurity(!security)}>
                            {security ? <AntDesign name="eye" size={24} color="orange" /> : <FontAwesome name="eye-slash" size={24} color="orange" />}
                        </TouchableOpacity>

                    </View>
                </View>

                <View className='mb-2'>
                    <Text className='text-[#838383] ml-4' style={{fontFamily: 'Regular'}}>Nouveau mot de passe</Text>
                    <View className='flex-row items-center justify-between p-3 bg-[#FAFAFA] rounded-xl'>

                        <TextInput
                            placeholder='********************'
                            className='w-[90%]'
                            secureTextEntry={newsecurity}
                        />

                        <TouchableOpacity onPress={() => setNewSecurity(!newsecurity)}>
                            {conf_security ? <AntDesign name="eye" size={24} color="orange" /> : <FontAwesome name="eye-slash" size={24} color="orange" />}
                        </TouchableOpacity>

                    </View>
                </View>

                <View className='mb-2'>
                    <Text className='text-[#838383] ml-4' style={{fontFamily: 'Regular'}}>Confirmer nouveau mot de passe</Text>
                    <View className='flex-row items-center justify-between p-3 bg-[#FAFAFA] rounded-xl'>

                        <TextInput
                            placeholder='********************'
                            className='w-[90%]'
                            secureTextEntry={conf_security}
                        />

                        <TouchableOpacity onPress={() => setConfSecurity(!conf_security)}>
                            {conf_security ? <AntDesign name="eye" size={24} color="orange" /> : <FontAwesome name="eye-slash" size={24} color="orange" />}
                        </TouchableOpacity>

                    </View>
                </View>

                 <View className='mt-6'>

                    <TouchableOpacity className='items-center justify-center p-6 bg-[#FFB31B] rounded-2xl mb-3' onPress={() => navigation.navigate('InformationProfil')}>
                        <Text className='text-white text-xs' style={{fontFamily: 'SemiBold'}}>Valider</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className='items-center justify-center p-6 bg-[#83838326] rounded-2xl mb-3' onPress={() => navigation.navigate('InformationProfil')}>
                        <Text className='text-black text-xs' style={{fontFamily: 'SemiBold'}}>Annuler</Text>
                    </TouchableOpacity>

                </View>
            </View>
      </ScrollView>
    </View>
  )
}

export default EditProfil
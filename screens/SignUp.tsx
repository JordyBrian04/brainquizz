import { View, Text, ScrollView, TouchableOpacity, TextInput, Alert, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useFonts } from "expo-font";
import { EmailVerification, UserSignUp } from '../services/apiService';
import { storeUser } from '../services/AsyncStorage';

const SignUp = ({navigation}:any) => {

    const [fontsLoaded] = useFonts({
        Bold : require("../assets/fonts/Poppins-Bold.ttf"),
        Regular : require("../assets/fonts/Poppins-Regular.ttf"),
        SemiBold : require("../assets/fonts/Poppins-SemiBold.ttf"),
    })
    const [security, setSecurity] = useState(true)
    const [conf_security, setConfSecurity] = useState(true)
    const [conf_Pass, setConfPass] = useState("")
    const [loading, setLoading] = useState(false)
    const [userAuthentication, setUserAuthentication] = useState({
        firstName: "",
        lastName: "",
        username: "",
        phoneNumber: "",
        email: "",
        password: ""
    })


    const handleSignupButton = async () => {
        if( userAuthentication.firstName !== "" 
            && userAuthentication.lastName !== ""
            && userAuthentication.username !== "" 
            && userAuthentication.phoneNumber !== "" 
            && userAuthentication.email !== "" 
            && userAuthentication.password !== "" 
            && conf_Pass !== ""
        )
            {
                if( userAuthentication.password === conf_Pass){
                    try {
                        setLoading(true)
                        //console.log(userAuthentication)
                        UserSignUp(userAuthentication)
                        .then((result) => {
                            storeUser(result.data.data.user)
                            if(result.data.message === "OK"){
                                EmailVerification(userAuthentication.email)
                                .then((Newresult) => {
                                    if(Newresult.data.message === 'OK'){
                                        setLoading(false)
                                        Alert.alert("Votre inscription à été prise en compte")
                                        setUserAuthentication({...userAuthentication,
                                            firstName: "",
                                            lastName: "",
                                            username: "",
                                            phoneNumber: "",
                                            email: "",
                                            password: ""
                                        })
                                        setConfPass('')
                                        navigation.navigate("Otp")
                                    }
                                })
                                .catch((err) => {
                                    setLoading(false)
                                    console.error(err)
                                })
                            }
                        })
                        .catch((err) => {
                            setLoading(false)
                            console.error("Erreur à l'inscription ",err)
                            if(err.response && err.response.status === 409)
                            {
                                Alert.alert("Erreur d'inscription", "Ce compte existe déjà.")
                            }
                        })
                        //console.log(response.data.data.user)
                    } catch (error) {
                        setLoading(false)
                        console.error("Erreur d'inscription ", error)
                    }
                }else{
                    Alert.alert("Erreur de saisie", "Les mots de passe ne sont pas identique.")
                }
            }else{
                Alert.alert("Erreur de saisie", "Veuillez remplir les champs vides.")
            }

    }

    if(!fontsLoaded){
        return undefined
    }
    
  return (
    <View className='flex-1 pt-8 pr-3 pl-3 bg-white'>
      <ScrollView className='mt-6'>
        <TouchableOpacity className='flex-row items-center'  onPress={()=> navigation.goBack()}>
            <AntDesign name="left" size={24} color="orange" />
            <Text className='ml-1 text-[#FFB31B]'>Retour</Text>
        </TouchableOpacity>

        <View className='px-10'>

                <View className='flex-row justify-between items-center mt-3 p-3'>

                    <TouchableOpacity className='w-16 h-16 bg-[#122294] border items-center justify-center rounded-full'>
                        <FontAwesome name="facebook-f" size={24} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity className='w-16 h-16 bg-[#C31010] border items-center justify-center rounded-full'>
                        <FontAwesome name="google" size={24} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity className='w-16 h-16 bg-[#2A2A2A] border items-center justify-center rounded-full'>
                        <FontAwesome name="apple" size={24} color="white" />
                    </TouchableOpacity>

                </View>

                <Text className='text-center mt-2 text-[#838383]' >____Ou____</Text>

            </View>

            <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.OS == 'ios' ? 20 : 0} className='text-left mt-6 px-4'>
                <View className='mb-2'>
                    <Text className='text-[#838383] ml-4' style={{fontFamily: 'Regular'}}>Nom</Text>
                    <TextInput
                        placeholder='Dios'
                        className='p-3 bg-[#FAFAFA] rounded-xl'
                        autoCapitalize='words'
                        returnKeyType='next'
                        onChangeText={e => setUserAuthentication({...userAuthentication, firstName:e})}
                        value={userAuthentication.firstName}
                    />
                </View>

                <View className='mb-2'>
                    <Text className='text-[#838383] ml-4' style={{fontFamily: 'Regular'}}>Prénoms</Text>
                    <TextInput
                        placeholder='Siols'
                        className='p-3 bg-[#FAFAFA] rounded-xl'
                        autoCapitalize='words'
                        returnKeyType='next'
                        onChangeText={e => setUserAuthentication({...userAuthentication, lastName:e})}
                        value={userAuthentication.lastName}
                    />
                </View>

                <View className='mb-2'>
                    <Text className='text-[#838383] ml-4' style={{fontFamily: 'Regular'}}>Nom d'utilisateur</Text>
                    <TextInput
                        placeholder='Siols'
                        className='p-3 bg-[#FAFAFA] rounded-xl'
                        returnKeyType='next'
                        onChangeText={e => setUserAuthentication({...userAuthentication, username:e})}
                        value={userAuthentication.username}
                    />
                </View>

                <View className='mb-2'>
                    <Text className='text-[#838383] ml-4' style={{fontFamily: 'Regular'}}>Numéro de téléphone (WhatsApp)</Text>
                    <TextInput
                        placeholder='+225 00 00 00 00 00'
                        className='p-3 bg-[#FAFAFA] rounded-xl'
                        keyboardType='phone-pad'
                        returnKeyType='next'
                        onChangeText={e => setUserAuthentication({...userAuthentication, phoneNumber:e})}
                        value={userAuthentication.phoneNumber}
                    />
                </View>
                <View className='mb-2'>
                    <Text className='text-[#838383] ml-4' style={{fontFamily: 'Regular'}}>Email</Text>
                    <TextInput
                        placeholder='email@email.com'
                        className='p-3 bg-[#FAFAFA] rounded-xl'
                        keyboardType='email-address'
                        returnKeyType='next'
                        onChangeText={e => setUserAuthentication({...userAuthentication, email:e})}
                        value={userAuthentication.email}
                    />
                </View>

                <View className='mb-2'>
                    <Text className='text-[#838383] ml-4' style={{fontFamily: 'Regular'}}>Mot de passe</Text>
                    <View className='flex-row items-center justify-between p-3 bg-[#FAFAFA] rounded-xl'>

                        <TextInput
                            placeholder='********************'
                            className='w-[90%]'
                            secureTextEntry={security}
                            returnKeyType='next'
                            onChangeText={e => setUserAuthentication({...userAuthentication, password:e})}
                            value={userAuthentication.password}
                        />

                        <TouchableOpacity onPress={() => setSecurity(!security)}>
                            {security ? <AntDesign name="eye" size={24} color="orange" /> : <FontAwesome name="eye-slash" size={24} color="orange" />}
                        </TouchableOpacity>

                    </View>
                </View>

                <View className='mb-2'>
                    <Text className='text-[#838383] ml-4' style={{fontFamily: 'Regular'}}>Confirmer mot de passe</Text>
                    <View className='flex-row items-center justify-between p-3 bg-[#FAFAFA] rounded-xl'>

                        <TextInput
                            placeholder='********************'
                            className='w-[90%]'
                            secureTextEntry={conf_security}
                            returnKeyType='done'
                            onChangeText={e => setConfPass(e)}
                            value={conf_Pass}
                        />

                        <TouchableOpacity onPress={() => setConfSecurity(!conf_security)}>
                            {conf_security ? <AntDesign name="eye" size={24} color="orange" /> : <FontAwesome name="eye-slash" size={24} color="orange" />}
                        </TouchableOpacity>

                    </View>
                </View>

                 <View className='mt-6'>
                    <TouchableOpacity className='items-center justify-center p-3 bg-[#FFB31B] rounded-2xl mb-3' onPress={handleSignupButton} disabled={loading}>
                        {loading ? <ActivityIndicator/> : <Text className='text-white' style={{fontFamily: 'SemiBold'}}>Valider</Text>}
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
      </ScrollView>
    </View>
  )
}

export default SignUp
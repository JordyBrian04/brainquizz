import React, { useCallback, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, ActivityIndicator, Alert } from 'react-native'
import { FontAwesome, AntDesign  } from '@expo/vector-icons';
import * as Recaptchas from 'react-native-recaptcha-that-works';
import ReCaptcha from '../services/ReCaptcha';
import { io } from 'socket.io-client'
import { SignIn } from '../services/apiService';
import { getToken, storeIdClientWs, storeToken, storeUser } from '../services/AsyncStorage';
import useCustomFonts from '../constantes/FONTS';
// import { useDispatch } from 'react-redux';

const Login = ({navigation}:any) => {

    const fontsLoaded = useCustomFonts();

    
    const [security, setSecurity] = useState(true)
    const [loading, setLoading] = useState(false)
    const [userAuthentication, setUserAuthentication] = useState({
        email: "",
        password: "",
    })


    const recaptcha:any = useRef<Recaptchas.RecaptchaProps>(null);

    const [key, setKey] = useState()

    const onVerify = (token: any) => {
        if(token){
            
            setKey(token)
            setLoading(true)
            const data = {
                captchaToken: token,
                accountId: userAuthentication.email,
                password: userAuthentication.password
            };
            SignIn(data)
            .then((res) => {
                //console.log(res.data?.data?.accessToken)
                storeToken(res.data?.data?.accessToken);
                
                storeUser(res.data.data.user);
                getToken()
                .then((res) => {
                    // const dispatch = useDispatch();
                    //dispatch(setToken(res))
                })
                .catch((err) => {
                   // console.error('errtoken', err);
                })
                setUserAuthentication({
                    email: "",
                    password: ""
                })
                if(res?.data?.data?.user?.accountType == "USER") {
                    let accesToken = res.data?.data?.accessToken
                    const socket = io('https://brainsquiz.com:8443',{
                        extraHeaders: {
                            Authorization: `Bearer ${accesToken}`,
                        },
                    })

                    //console.log('initializing socket', {accesToken});

                    socket.on('connect', () => {
                      //console.log('=== socket connected ====');
                    });
            
                    socket.on('error', (error) => {
                      console.log('error : ', error);
                    });

                    socket.on('clientId', (clientId) => {
                        //console.log('clientId : ', clientId);
                        storeToken(res.data?.data?.accessToken)
                        storeIdClientWs(clientId);
                    });

                    setLoading(false);
                   navigation.navigate("Tabs")
                }
            })
            .catch((err) => {
                //console.error('errLogin', err.response.data.error.kind.message);
                Alert.alert("Erreur de connexion", err.response.data.error.kind.message);
                setLoading(false);
            })
        }
    };

    const handleLogin = async () => {
        if(userAuthentication.email !== "" && userAuthentication.password !== ""){
            setLoading(true)
            recaptcha.current?.open();
            //console.log(userAuthentication)
        }else{
            Alert.alert("Erreur de saisie","Veuillez remplir tous les champs vides.")
        }
    }

    if (!fontsLoaded) {
        return undefined; // Render a loading indicator or something else
    }

  return (
    <View className='bg-white flex-1 p-10'>

            <View className='mt-4'>
                <Text className='text-xl text-center' style={{fontFamily: 'Bold'}}>Content de vous revoir</Text>
                <Text className='text-center text-sm text-[#838383]' style={{fontFamily: 'Regular'}}>Lorem ipsum dolor sit amet, consetetur</Text>

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

            <View className='text-left mt-6'>
                <View className='mb-2'>
                    <Text className='text-[#838383] ml-4' style={{fontFamily: 'Regular'}}>Email</Text>
                    <TextInput
                        placeholder='email@email.com'
                        className='p-3 bg-[#FAFAFA] rounded-xl'
                        value={userAuthentication.email}
                        onChangeText={e => setUserAuthentication({...userAuthentication, email: e})}
                        returnKeyType='next'
                        keyboardType='email-address'
                    />
                </View>

                <View className='mb-2'>
                    <Text className='text-[#838383] ml-4' style={{fontFamily: 'Regular'}}>Mot de passe</Text>
                    <View className='flex-row items-center justify-between p-3 bg-[#FAFAFA] rounded-xl'>

                        <TextInput
                            placeholder='********************'
                            className='w-[90%]'
                            secureTextEntry={security}
                            value={userAuthentication.password}
                            onChangeText={e => setUserAuthentication({...userAuthentication, password: e})}
                            autoCapitalize='none'
                        />

                        <TouchableOpacity onPress={() => setSecurity(!security)}>
                            {security ? <AntDesign name="eye" size={24} color="orange" /> : <FontAwesome name="eye-slash" size={24} color="orange" />}
                        </TouchableOpacity>

                    </View>
                </View>
                <ReCaptcha onVerify={onVerify} recaptcha={recaptcha}/>
                <TouchableOpacity>
                    <Text className='text-center text-[#FFB31B]' style={{fontFamily: 'Regular'}}>Mot de passe oublié ?</Text>
                </TouchableOpacity>

                <View className='mt-6'>
                    <TouchableOpacity className='items-center justify-center p-3 bg-[#FFB31B] rounded-2xl mb-3' onPress={handleLogin}>
                        {loading ? <ActivityIndicator/> : <Text className='text-white' style={{fontFamily: 'SemiBold'}}>Connexion</Text>}
                    </TouchableOpacity>

                    <TouchableOpacity className='items-center justify-center p-3 bg-[#0C833E] rounded-2xl' onPress={() => navigation.navigate("Signup")}>
                        <Text className='text-white' style={{fontFamily: 'SemiBold'}}>Créer un compte</Text>
                    </TouchableOpacity>
                </View>
            </View>
    </View>
  )
}

export default Login
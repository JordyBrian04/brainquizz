import { View, Text, ScrollView, TouchableOpacity, Image, FlatList, TextInput, Modal, Platform } from 'react-native'
import React, { useState } from 'react'
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../utils/colors';
import { SelectList } from 'react-native-dropdown-select-list'
import DateTimePicker from '@react-native-community/datetimepicker';

const Commander = ({navigation}:any) => {

    const [userCommande, setUserCommande] = useState({
        qui: "",
        contexte: "",
        description: "",
        temps: "",
        nb_participants: "",
        theme: "",
        date: "",
        heure: "",
        lieu: "",
        contacts: "",
        email:"",
        nb_questions: "",
    });
    const [date, setDate] = useState(new Date);
    const [time, setTime] = useState(new Date());
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [open, setOpen] = useState(false)
    const [openTime, setOpenTime] = useState(false)
    const [showModal, setShowModal] = useState(false)

        //Remplir le select list par programmation
        const data = [
            {key:'1', value:'Anniverssaire'},
            {key:'2', value:'Appliances'},
            {key:'3', value:'Cameras'},
            {key:'4', value:'Computers'},
            {key:'5', value:'Vegetables'},
            {key:'6', value:'Diary Products'},
            {key:'7', value:'Drinks'},
        ]

        const min = Array.from({ length: 60 }, (_, index) => ({
            key: index,
            value: `${('0' + (index)).slice(-2)}`,
        }));

        const handleMinute = (value:any) => {
            setMinutes(value)
        }

        const handleSeconde = (value:any) => {
            setSeconds(value)
        }

        const sec = Array.from({ length: 60 }, (_, index) => ({
            key: index,
            value: `${('0' + index).slice(-2)}`,
        }));

    const [fontsLoaded] = useFonts({
        Bold: require("../assets/fonts/Poppins-Bold.ttf"),
        Regular: require("../assets/fonts/Poppins-Regular.ttf"),
        SemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
        Medium: require("../assets/fonts/Poppins-Medium.ttf"),
    });
    
    if (!fontsLoaded) {
        return undefined;
    }

    const toggleDatePicker = () => {
        setOpen(!open)
    }

    const toggleTimePicker = () => {
        setOpenTime(!openTime)
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

    const onChangeTime = ({type}:any, selectedTime:any) => {
        if(type === 'set'){
            const currentTime = selectedTime;
            setTime(currentTime)

            if(Platform.OS === 'android'){
                toggleTimePicker()

                //On attribu la date à la valeur date (currentDate.toLocaleDateString('fr-FR'))
            }
        }else{
            toggleTimePicker()
        }
    }

    function renderModal () {
        return (
            <Modal visible={showModal} transparent animationType="fade">
                <View className="flex-1 bg-black/30 items-center justify-center h-full">
                    <View className="bg-white w-[90%] p-8 rounded-lg items-center">
                        <Image source={require('../assets/fireworks.png')} />
    
                        <Text className='text-center text-sm text-black mt-4' style={{fontFamily: 'Regular'}}>
                            Vous recevrez un devis sous 3 jours maximum après avoir commandé votre quiz. Les travaux démarrent 
                            effectivement après la réception d'une avance de 50% du devis. Les autres 50% doivent être réglé à la 
                            réception de la version test du quiz.
                        </Text>
    
                        <TouchableOpacity className='items-center justify-center p-4 bg-slate-200 rounded-2xl mb-3 w-full mt-4' onPress={() => [setShowModal(!showModal), navigation.navigate('Tabs')]}>
                            <Text className='text-black text-xs' style={{fontFamily: 'SemiBold'}}>Retour à l'accueil</Text>
                        </TouchableOpacity>
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

            <View className='mt-4 p-3'>

                <View className='mb-4'>
                    <Text className='ml-3 text-[#838383] text-sm' style={{fontFamily: 'Regular'}}>Qui êtes-vous ?</Text>
                    <TextInput
                        placeholder='Dios'
                        className='bg-[#FAFAFA] p-4 rounded-3xl mt-2'
                        onChangeText={e => setUserCommande({...userCommande, qui: e})}
                        value={userCommande.qui}
                        autoCapitalize='words'
                    />
                </View>

                <View className='mb-4'>
                    <Text className='ml-3 text-[#838383] text-sm' style={{fontFamily: 'Regular'}}>Quel est le contexte ?</Text>
                    <SelectList                     
                        setSelected={(val:any) => setUserCommande({...userCommande, contexte: val})} 
                        data={data} 
                        save="value"
                        placeholder='Selectonnez un contexte'
                        searchPlaceholder='Entrez un contexte'
                        boxStyles={{ height:65, marginTop:10, paddingTop:20, borderRadius: 20, borderColor: '#FAFAFA',backgroundColor: '#FAFAFA',borderWidth: 1}}
                        inputStyles={{fontSize: 15, color:'#838383',}}
                        //dropdownStyles={{width:393,}}
                        dropdownTextStyles={{fontSize: 15}}
                        arrowicon={<Image source={require('../assets/arrow-down-sign-to-navigate.png')} style={{width: 18, height: 18,tintColor: COLORS.ORANGE, resizeMode: 'contain'}}/>}
                        closeicon={<Image source={require('../assets/close.png')} style={{width: 13, height: 13,tintColor: COLORS.ORANGE, resizeMode: 'contain'}}/>}
                        searchicon={<Image source={require('../assets/search.png')} style={{width: 18, height: 18,tintColor: COLORS.ORANGE, resizeMode: 'contain'}}/>}
                        notFoundText='Donnée introuvable'                    
                    />
                </View>

                <View className='mb-4'>
                    <Text className='ml-3 text-[#838383] text-sm' style={{fontFamily: 'Regular'}}>Combien de temps devra durer le quiz?</Text>
                    <View className='flex-row items-center justify-between'>
                        {/* <View className='flex-row items-center justify-between'> */}

                            <SelectList                     
                                setSelected={handleMinute} 
                                data={min} 
                                save="value"
                                placeholder={'0'+minutes.toLocaleString()}
                                searchPlaceholder='Entrez un contexte'
                                boxStyles={{ height:65, marginTop:10, paddingTop:20, borderRadius: 20, borderColor: '#FAFAFA',backgroundColor: '#FAFAFA',borderWidth: 1}}
                                inputStyles={{fontSize: 15, color:'#838383',}}
                                //dropdownStyles={{width:393,}}
                                dropdownTextStyles={{fontSize: 15}}
                                arrowicon={<Image source={require('../assets/arrow-down-sign-to-navigate.png')} style={{width: 18, height: 18,tintColor: COLORS.ORANGE, resizeMode: 'contain', marginLeft: 9}}/>}
                                closeicon={<Image source={require('../assets/close.png')} style={{width: 13, height: 13,tintColor: COLORS.ORANGE, resizeMode: 'contain'}}/>}
                                search={false}
                                notFoundText='Donnée introuvable'                    
                            />

                            <Text className='ml-3' style={{fontFamily: 'Regular'}}>min</Text>

                        {/* </View> */}

                        {/* <View className='flex-row items-center justify-between'> */}

                            <SelectList                     
                                setSelected={handleSeconde} 
                                data={sec} 
                                save="value"
                                placeholder={'0'+seconds.toLocaleString()}
                                searchPlaceholder='Entrez un contexte'
                                boxStyles={{ height:65, marginTop:10, paddingTop:20, borderRadius: 20, borderColor: '#FAFAFA',backgroundColor: '#FAFAFA',borderWidth: 1}}
                                inputStyles={{fontSize: 15, color:'#838383',}}
                                //dropdownStyles={{width:393,}}
                                dropdownTextStyles={{fontSize: 15}}
                                arrowicon={<Image source={require('../assets/arrow-down-sign-to-navigate.png')} style={{width: 18, height: 18,tintColor: COLORS.ORANGE, resizeMode: 'contain', marginLeft: 9}}/>}
                                closeicon={<Image source={require('../assets/close.png')} style={{width: 13, height: 13,tintColor: COLORS.ORANGE, resizeMode: 'contain'}}/>}
                                search={false}
                                notFoundText='Donnée introuvable'                    
                            />

                            <Text className='ml-3' style={{fontFamily: 'Regular'}}>sec</Text>

                        {/* </View> */}
                    </View>
                </View>

                <View className='mb-4'>
                    <Text className='ml-3 text-[#838383] text-sm' style={{fontFamily: 'Regular'}}>Combien de personnes doivent participer?</Text>
                    <TextInput
                        placeholder='2'
                        className='bg-[#FAFAFA] p-4 rounded-3xl mt-2'
                        onChangeText={e => setUserCommande({...userCommande, nb_participants: e})}
                        value={userCommande.nb_participants}
                        keyboardType='numeric'
                    />
                </View>

                <Text className='ml-3 text-[#34B4E2] text-sm' style={{fontFamily: 'Regular'}}>Où et quand ce jeu doit il se dérouler?</Text>

                <View className='flex-row items-center justify-between mt-4'>
                    
                    <View className='mb-4 w-[45%]'>
                        <Text className='ml-3 text-[#838383] text-sm' style={{fontFamily: 'Regular'}}>Date</Text>
                        {open && (
                            <DateTimePicker
                                mode='date'
                                display='spinner'
                                value={date}
                                onChange={onChange}
                            />
                        )}
                        {!open && (
                            <TouchableOpacity onPress={toggleDatePicker}>
                                <TextInput
                                    placeholder={date.toLocaleDateString('fr-FR')}
                                    className='bg-[#FAFAFA] p-4 rounded-3xl mt-2'
                                    onChangeText={e => setUserCommande({...userCommande, date: e})}
                                    value={userCommande.date}
                                    editable={false}
                                />
                            </TouchableOpacity>
                        )}

                    </View>

                    <View className='mb-4 w-[45%]'>
                        <Text className='ml-3 text-[#838383] text-sm' style={{fontFamily: 'Regular'}}>Heure</Text>
                        {openTime && (
                            <DateTimePicker
                                mode='time'
                                display='spinner'
                                value={time}
                                onChange={onChangeTime}
                            />
                        )}
                        {!openTime && (
                            <TouchableOpacity onPress={toggleTimePicker}>
                                <TextInput
                                    placeholder={time.toLocaleTimeString()}
                                    className='bg-[#FAFAFA] p-4 rounded-3xl mt-2'
                                    onChangeText={e => setUserCommande({...userCommande, heure: e})}
                                    value={userCommande.heure}
                                    editable={false}
                                />
                            </TouchableOpacity>
                        )}

                    </View>
                </View>

                <View className='mb-4'>
                    <Text className='ml-3 text-[#838383] text-sm' style={{fontFamily: 'Regular'}}>Lieu</Text>
                    <TextInput
                        placeholder='Marcory'
                        className='bg-[#FAFAFA] p-4 rounded-3xl mt-2'
                        onChangeText={e => setUserCommande({...userCommande, lieu: e})}
                        value={userCommande.lieu}
                    />
                </View>          

                <View className='mb-4'>
                    <Text className='ml-3 text-[#838383] text-sm' style={{fontFamily: 'Regular'}}>A quel numéro pouvons nous vous contacter</Text>
                    <TextInput
                        placeholder='+225 00 00 00 00 00'
                        className='bg-[#FAFAFA] p-4 rounded-3xl mt-2'
                        onChangeText={e => setUserCommande({...userCommande, contacts: e})}
                        value={userCommande.contacts}
                    />
                </View>          

                <View className='mb-4'>
                    <Text className='ml-3 text-[#838383] text-sm' style={{fontFamily: 'Regular'}}>A quel email pouvons nous vous contacter</Text>
                    <TextInput
                        placeholder='email@email.com'
                        className='bg-[#FAFAFA] p-4 rounded-3xl mt-2'
                        onChangeText={e => setUserCommande({...userCommande, email: e})}
                        value={userCommande.email}
                    />
                </View>      

                <TouchableOpacity className='p-6 rounded-2xl items-center justify-center bg-[#FFB31B] mt-4 mb-4' onPress={ () => setShowModal(true)}>
                    <Text className='text-white text-xs' style={{fontFamily: 'SemiBold'}}>Valider</Text>
                </TouchableOpacity>

                <TouchableOpacity className='mt-2 p-3 items-center justify-center mb-2'>
                    <Text className='text-[#838383] text-xs text-center' style={{fontFamily: 'Regular'}}>
                        En cliquant vous accepter <Text className='text-[#FFB31B]' style={{fontFamily: 'Bold'}}>les termes de conditions d'utulisations</Text>
                    </Text>
                </TouchableOpacity>    

            </View>
        </ScrollView>
        {renderModal()}
    </View>
  )
}

export default Commander
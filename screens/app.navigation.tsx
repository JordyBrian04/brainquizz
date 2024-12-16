import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { FontAwesome5, Entypo, MaterialIcons, Ionicons  } from '@expo/vector-icons';
import { useFonts } from "expo-font";
import { View, Text, Image } from 'react-native';
import db from '../services/dataBase';


import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Otp from './Otp';
import Menu from './(tabs)/Menu';
import Historique from './(tabs)/Historique';
import Palmares from './(tabs)/Palmares';
import Notifications from './(tabs)/Notifications';
import Profil from './(tabs)/Profil';
import MesCerveau from './MesCerveau';
import Transaction from './Transaction';
import RegleReduction from './RegleReduction';
import Mises from './Mises';
import Commander from './Commander';
import InformationProfil from './InformationProfil';
import Parametre from './Parametre';
import RegleJeu from './RegleJeu';
import Confidentalite from './Confidentalite';
import ConditionUtilisation from './ConditionUtilisation';
import Contacts from './Contacts';
import EditProfil from './EditProfil';
import ChoixQuiz from './ChoixQuiz';
import Precommande from './Precommande';
import Rejoindre from './Rejoindre';
import QuizRules from './QuizRules';
import QuizzScreen from './QuizzScreen';
import QuizzResult from './QuizzResult';
import SalleAttenteQuizz from './SalleAttenteQuizz';
import QuizzChat from './QuizzChat';
import Classement from './Classement';
import ClassementExeco from './ClassementExeco';
import DetailCommande from './DetailCommande';
import TestAudio from './TestAudio';

const Stack = createStackNavigator();
const TabStack = createBottomTabNavigator()


const screenOptions = ({route, focus}:any) => ({
  tabBarIcon : ({focused}:any) => {
      const [image, setImage] = useState("")
      let icon: any = null;
      const size = 24
      const color = focused ? "#FFFFFF" : "#838383";
      const font = focused ? <View></View> : <View></View>

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
    
      switch (route.name) {
        case "Menu":
          icon = focused ? 
                <View className='bottom-6'>
                    <View className='bg-[#0C833E] p-3 rounded-full border-4 border-white w-16 h-16 items-center justify-center'>
                        <Entypo name="home" size={24} color={color} />
                    </View>

                    <Text className='text-center text-[#0C833E] text-[12px]'>{route.name}</Text>
                </View>
                : 
                <Entypo name="home" size={24} color={color} />;
          break;
        case "Historique":
            icon = focused ? 
            <View className='bottom-6'>
                <View className='bg-[#0C833E] p-3 rounded-full border-4 border-white w-16 h-16 items-center justify-center'>
                    <MaterialIcons name="history" size={24} color={color} />
                </View>

                <Text className='text-center text-[#0C833E] text-[12px]'>{route.name}</Text>
            </View>
            : 
            <MaterialIcons name="history" size={24} color={color} />;
          break;
        case "Palmarès":
            icon = focused ? 
            <View className='bottom-6'>
                <View className='bg-[#0C833E] p-3 rounded-full border-4 border-white w-16 h-16 items-center justify-center'>
                    <Ionicons name="trophy" size={20} color={color} />
                </View>

                <Text className='text-center text-[#0C833E] text-[12px]'>{route.name}</Text>
            </View>
            : 
            <Ionicons name="trophy" size={20} color={color} />;
          break;
        case "Notification":
            icon = focused ? 
            <View className='bottom-6'>
                <View className='bg-[#0C833E] p-3 rounded-full border-4 border-white w-16 h-16 items-center justify-center'>
                    <Ionicons name="notifications" size={20} color={color} />
                </View>

                <Text className='text-center text-[12px] text-[#0C833E]'>{route.name}</Text>
            </View>
            : 
            <Ionicons name="notifications" size={20} color={color} />;
          break;
        case "Profil":
            icon = focused ? 
            <View className='bottom-6'>
                <View className='bg-[#0C833E] p-3 rounded-full border-4 border-white w-16 h-16 items-center justify-center'>
                    <Image source={image === "" ? require('../assets/profil.png') : {uri:image}} className='w-16 h-16 rounded-full bg-cover' style={{borderWidth: 1, borderColor: '#EFD241'}}/>
                </View>

                <Text className='text-center text-[12px] text-[#0C833E]'>{route.name}</Text>
            </View>
            : 
            <Image source={image === "" ? require('../assets/profil.png') : {uri:image}} className='w-10 h-10 rounded-full bg-cover' style={{borderWidth: 1, borderColor: '#EFD241'}}/>;
          break;
      }
    
      return icon
    }, 
  
    tabBarActiveTintColor: '#3b82f6',
    tabBarInactiveTintColor: '#5C5E5F',
    tabBarLabelStyle: {
      fontSize: 13,
      display: 'none'
    },
    tabBarStyle: {
      backgroundColor: "#ffffff",
      width: 'full',
      height: 60,
    },
  })

  const TabStackScreens = () => {
    return (
      <TabStack.Navigator screenOptions={screenOptions}>
        <TabStack.Screen options={{ headerShown: false }} name="Menu" component={Menu} />
        <TabStack.Screen options={{ headerShown: false }} name="Historique" component={Historique} />
        <TabStack.Screen options={{ headerShown: false }} name="Palmarès" component={Palmares} />
        <TabStack.Screen options={{ headerShown: false }} name="Notification" component={Notifications} />
        <TabStack.Screen options={{ headerShown: false }} name="Profil" component={Profil} />
      </TabStack.Navigator>
    )
  }

const Appnavigation = () => {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="TestAudio">
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="Signup" component={SignUp} />
        <Stack.Screen options={{headerShown: false}} name="Otp" component={Otp} />
        <Stack.Screen options={{headerShown: false}} name="Tabs" component={TabStackScreens}/>
        <Stack.Screen options={{headerShown: false}} name="MesCerveau" component={MesCerveau}/>
        <Stack.Screen options={{headerShown: false}} name="Transaction" component={Transaction}/>
        <Stack.Screen options={{headerShown: false}} name="RegleReduction" component={RegleReduction}/>
        <Stack.Screen options={{headerShown: false}} name="Mises" component={Mises}/>
        <Stack.Screen options={{headerShown: false}} name="Commander" component={Commander}/>
        <Stack.Screen options={{headerShown: false}} name="InformationProfil" component={InformationProfil}/>
        <Stack.Screen options={{headerShown: false}} name="Parametre" component={Parametre}/>
        <Stack.Screen options={{headerShown: false}} name="RegleJeu" component={RegleJeu}/>
        <Stack.Screen options={{headerShown: false}} name="Confidentialite" component={Confidentalite}/>
        <Stack.Screen options={{headerShown: false}} name="ConditionUtilisation" component={ConditionUtilisation}/>
        <Stack.Screen options={{headerShown: false}} name="Contacts" component={Contacts}/>
        <Stack.Screen options={{headerShown: false}} name="EditProfil" component={EditProfil}/>
        <Stack.Screen options={{headerShown: false}} name="ChoixQuiz" component={ChoixQuiz}/>
        <Stack.Screen options={{headerShown: false}} name="Precommande" component={Precommande}/>
        <Stack.Screen options={{headerShown: false}} name="Rejoindre" component={Rejoindre}/>
        <Stack.Screen options={{headerShown: false}} name="QuizRules" component={QuizRules}/>
        <Stack.Screen options={{headerShown: false}} name="QuizzScreen" component={QuizzScreen}/>
        <Stack.Screen options={{headerShown: false}} name="QuizzResult" component={QuizzResult}/>
        <Stack.Screen options={{headerShown: false}} name="SalleAttenteQuizz" component={SalleAttenteQuizz}/>
        <Stack.Screen options={{headerShown: false}} name="QuizzChat" component={QuizzChat} />
        <Stack.Screen options={{headerShown: false}} name="Classement" component={Classement} />
        <Stack.Screen options={{headerShown: false}} name="ClassementExeco" component={ClassementExeco} /> 
        <Stack.Screen options={{headerShown: false}} name="DetailCommande" component={DetailCommande} /> 
        <Stack.Screen options={{headerShown: false}} name="TestAudio" component={TestAudio} /> 
        {/* 
        <Stack.Screen options={{headerShown: false}} name="Fournisseurs" component={Fournisseurs} /> 
        <Stack.Screen options={{headerShown: false}} name="Fournisseurs" component={Fournisseurs} /> 
        <Stack.Screen options={{headerShown: false}} name="Fournisseurs" component={Fournisseurs} /> 
        <Stack.Screen options={{headerShown: false}} name="Fournisseurs" component={Fournisseurs} /> 
        */}
      </Stack.Navigator>
    </NavigationContainer>
    );
  };
  
  export default Appnavigation;
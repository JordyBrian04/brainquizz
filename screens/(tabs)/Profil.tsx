import { View, Text, ScrollView, Image, TouchableOpacity, Modal, Alert, TouchableWithoutFeedback } from 'react-native'
import React, {useState, useEffect} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { dataProfil } from '../../utils/data';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { getUser } from '../../services/AsyncStorage';
import * as ImagePicker from 'expo-image-picker'
import { PhotoUpload } from '../../services/apiService';
import db from '../../services/dataBase';

const Profil = ({navigation}:any) => {

  const [currentUser, setCurrentUserInfo] = useState({
    username: "",
    picture: "",
    nom : ""
  })
  const [showModal, setShowModal] = useState(false)
  const [image, setImage] = useState("")

  useEffect(() => {
    getUser()
    .then((res) => {
      //console.log(res);
      setCurrentUserInfo({...currentUser, 
        username: res?.username,
        picture : res?.profilePictureUrl,
        nom: res.lastName + " " + res.firstName
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
  }, []);

  const uploadImage = async (mode:string) => {
    try {

      let result = {};

      if(mode === "camera"){
        await ImagePicker.requestCameraPermissionsAsync()

        result = await ImagePicker.launchCameraAsync({
          cameraType : ImagePicker.CameraType.front,
          allowsEditing : true,
          aspect: [1,1],
          quality: 1
        });
  
      }else{
        await ImagePicker.requestMediaLibraryPermissionsAsync()

        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing : true,
          aspect: [1,1],
          quality: 1
        })
      }

      if(!result?.canceled){
        //console.log(result?.assets[0]?.uri)
        setImage(result?.assets[0]?.uri)

        PhotoUpload(result.assets[0]?.uri)
        .then(async (res) => {
          if(res.status === 201){
            
            db.transaction(tx => {
              tx.executeSql(
                "UPDATE data set image=?", 
                [result.assets[0]?.uri],
                (_, result) => {
                  console.log('Success', result.rows._array);
                  Alert.alert("Profil changé avec succès", "Votre photo de profil à été changée.")
                },
                (_, err) => {
                  console.log(err);
                  return false;
                }
              )
            })
          }
        })
        .catch((err) => {
          console.error(err)
        })

        setShowModal(false)
      }
      
    } catch (error:any) {
      Alert.alert('Erreur de la modification de l\'image', error)
      setShowModal(false)
    }
  }

  function renderModal() {
    return (
      <Modal visible={showModal} transparent animationType='fade' onRequestClose={()=>setShowModal(false)}>
        <TouchableWithoutFeedback onPress={()=>setShowModal(false)}>
          <View className='flex-1 bg-black/25 items-center justify-center'>
            <View className='bg-white p-3 w-[90%] rounded-lg'>
              <Text className='text-center text-xl' style={{fontFamily : 'Bold'}}>Photo de profil</Text>

              <View className='flex-row items-center justify-between mt-3 mb-3'>

                <TouchableOpacity className='bg-slate-200 p-2 rounded-lg w-20 h-20 items-center justify-center' onPress={()=>uploadImage('camera')}>
                  <AntDesign name="camerao" size={30} color="orange" />
                  <Text>Caméra</Text>
                </TouchableOpacity>

                <TouchableOpacity className='bg-slate-200 p-2 rounded-lg w-20 h-20 items-center justify-center' onPress={()=>uploadImage('galerie')}>
                  <AntDesign name="picture" size={30} color="orange" />
                  <Text>Galerie</Text>
                </TouchableOpacity>

                <TouchableOpacity className='bg-slate-200 p-2 rounded-lg w-20 h-20 items-center justify-center'>
                  <FontAwesome name="trash-o" size={30} color="orange" />
                  <Text>Supprimer</Text>
                </TouchableOpacity>

              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }
  
  return (
    <View className='bg-[#F9F7F7] flex-1 pt-8 pr-3 pl-3'>

      <ScrollView className='p-3 mt-4'>

        <LinearGradient
          colors={['#34E2C5', '#34B4E2']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ flex: 1 }}
          className='rounded-2xl mt-4'
          >
              <View className='p-6 items-center justify-center'>
                  <TouchableOpacity onPress={() => setShowModal(true)}>
                      <Image source={image === "" ? require('../../assets/profil.png') : {uri: image}} className='w-28 h-28 rounded-full bg-cover' style={{borderWidth: 2, borderColor: '#EFD241'}}/>
                      <View className='w-10 h-10 bg-slate-200 items-center justify-center rounded-full absolute bottom-0 right-0'>
                        <AntDesign name="camera" size={24} color="orange" />
                      </View>
                  </TouchableOpacity>
                  <View className=''>
                      <Text className='text-white text-center mt-2 text-lg' style={{fontFamily: 'Bold'}}>{currentUser.nom}</Text>
                      <Text className='text-white text-center text-xs' style={{fontFamily: 'Regular'}}>@{currentUser.username}</Text>
                  </View>

              </View>
          </LinearGradient>

          <View className='bg-white p-3 mt-3 rounded-2xl mb-4'>
            {dataProfil.map((item:any) => {
              return (
                <View className='border-b border-slate-200 p-2' key={item.id}>
                  <TouchableOpacity className='flex-row items-center justify-between' onPress={() => navigation.navigate(item.page)}>
                    <View className='flex-row items-center'>
                      <View className='w-10 h-10 rounded-full items-center justify-center p-2' style={{backgroundColor: item.bgColor}}>
                        <Image source={item.icon} className='w-4 h-4' style={{tintColor: '#FFFFFF'}} />
                      </View>
                      <Text className='ml-3 text-xs' style={{fontFamily: 'Regular'}}>{item.text}</Text>
                    </View>

                    <AntDesign name="right" size={20} color="black" />
                  </TouchableOpacity>
                </View>
              )
            })}

            <TouchableOpacity className='items-center justify-center p-4 rounded-3xl mt-6' style={{backgroundColor: 'rgba(253, 0, 0, 0.1)'}}>
              <Text className='text-sm text-[#FD0000]' style={{fontFamily: "SemiBold"}}>Déconnexion</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
            {renderModal()}
    </View>
  )
}

export default Profil
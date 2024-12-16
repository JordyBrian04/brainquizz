import { View, Text, ScrollView, Image, TouchableOpacity, ImageBackground, Modal, StatusBar } from "react-native";
import React, {useEffect, useRef, useState} from 'react';
import { useFonts } from "expo-font";
import { dataNational, dataInternational } from "../utils/data";
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from "../utils/colors";
import {Video, ResizeMode, Audio, AVPlaybackStatus} from "expo-av";
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import { Sound } from "expo-av/build/Audio";
// import { useAudioPlayer } from 'expo-audio'; 
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import Button from "../component/Button";
import ProgressCircle from 'react-native-progress-circle';

const QuizzScreen = ({ navigation, route }: any) => {

    //Build the iOS Voice Memos app in React Native | DEVember Day 7
    const name = route.params.type_quiz
    const gameType = route.params.status
    //const name = 'national';
    //const gameType = 'Gratuits';
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);
    const [score, setScore] = useState(0);
    const [pointTotal, setPointTotal] = useState(0);
    const [showScoreModal, setShowScoreModal] = useState(false);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const musicString = ["mp3", "m4a"];
    const imageString = ["jpeg", "jpg", "png"];
    const videoString = "mp4";
    const [extension, setExtension] = useState("");
    const [media, setMedia] = useState("");
    const [stopTimer, setStopTimer] = useState(false);



    const video = useRef(null)
    const [showButton, setShowButton] = useState(true);
    const [allQuestion, setAllQuestion] = useState([]);
    const [statusVideo, setStatusVideo] = useState({});
    //const question = "https://relationship2.000webhostapp.com/relationship/images/nimba.jpg";
    //const question = "https://relationship2.000webhostapp.com/relationship/images/4-01h00.mp4";
    const question = "https://relationship2.000webhostapp.com/relationship/images/audio.m4a";
    //const question = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor";
    
    const [sound, setSound] = useState<Audio.Sound | null>(null);
    const [soundStatus, setSoundStatus] = useState<AVPlaybackStatus | null>(null);
    const isPlaying = soundStatus?.isLoaded ? soundStatus.isPlaying : false;
    const position = soundStatus?.isLoaded ? soundStatus.positionMillis : 0;
    const duration:any = soundStatus?.isLoaded ? soundStatus.durationMillis : 1;
    // const AudioProgress = position / duration;
    const AudioProgress = soundStatus?.isLoaded && soundStatus.durationMillis
    ? soundStatus.positionMillis / soundStatus.durationMillis
    : 0;

    async function requestPermissions() {
      const { status } = await Audio.requestPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission audio refusée');
      }
    }
    // const animatedIndicatorStyle = useAnimatedStyle(() => ({
    //   left: `${Math.min((AudioProgress*100), 95)}%`
    // }))
    // const animatedIndicatorStyle = useAnimatedStyle(() => ({
    //   left: withTiming(`${Math.min(AudioProgress * 100, 95)}%`, { duration: 100 }),
    // }));

    const Time = (timer:any) => {
      const m = parseInt(timer.toLocaleString()) / 60
      const s = parseInt(timer.toLocaleString())%60
      setMinutes(Math.floor(m))
      setSeconds(Math.floor(s))
    }

    const initialiseGame = () => {
      if (name === 'national') {
        setAllQuestion(dataNational);
        
        //Avoir le nombre de point total
        if(pointTotal === 0){
          dataNational.map((data:any) => {
            const point = data.correct_option_point
            setPointTotal(prev => prev+parseInt(point))
          })
        }

        if(dataNational[currentQuestionIndex]['question_type'] === 'music'){
          loadSound()
        }

        // const currentQuestion = dataNational[currentQuestionIndex]['question']
        // const delimiter = "."
        // const result = currentQuestion.split(delimiter)
        // console.log(result[result.length-1], result.length)
        // if(result.length > 1) {
        //   setExtension(result[result.length-1])

        //   if(musicString.some(ext => result[result.length-1].indexOf(ext) !== -1)){
        //     loadSound(dataNational[currentQuestionIndex]['question'])
        //   }else if (result[result.length-1] === videoString){
        //     //setMedia(`${require(dataNational[currentQuestionIndex]['question'])}`)
        //   }
          
        // }else{
        //   setExtension("")
        // }

        if(dataNational[currentQuestionIndex]['time'] < 60){
          setSeconds(dataNational[currentQuestionIndex]['time'])

        }else{
          Time(dataNational[currentQuestionIndex]['time'])
        }
      } else {
        setAllQuestion(dataInternational);

        //Avoir le nombre de point total
        if(pointTotal === 0){
          dataInternational.map((data:any) => {
            const point = data.correct_option_point
            setPointTotal(prev => prev+parseInt(point))
          })
        }
        
        if(dataInternational[currentQuestionIndex]['question_type'] === 'music'){
          loadSound()
        }
        if(dataInternational[currentQuestionIndex]['time'] < 60){
          setSeconds(dataInternational[currentQuestionIndex]['time'])
        }else{
          Time(dataInternational[currentQuestionIndex]['time'])
        }
      }
    }

    useEffect(() => {
      initialiseGame()
      requestPermissions()
    }, [allQuestion]);

    useEffect(() => {
      if(!stopTimer){

        const interval = setInterval(() => {
          if (seconds > 0) {
            setSeconds(seconds - 1);
          }
    
          if (seconds === 0) {
            if (minutes === 0) {
              clearInterval(interval);
              handleNext()
              // Alert.alert('OTP', 'Le temps est ecoulé', [
              //   {
              //     text: 'Cancel',
              //     onPress: () => console.log('Cancel Pressed'),
              //     style: 'cancel',
              //   },
              //   {text: 'OK', onPress: () => goBack()},
              // ]);
            } else {
              setSeconds(59);
              setMinutes(minutes - 1);
            }
          }
        }, 1000);


        return () => {
          clearInterval(interval);
        };
      }
  
    }, [seconds]);

    const renderNextButton = () => {
      if (showNextButton) {
        return (
          <View style={{marginTop: 30}}>
            <Button
              titleColor={COLORS.WHITE}
              bgColor={COLORS.ORANGE}
              onPress={handleNext}
              title="Suivant"
            />
          </View>
        );
      } else {
        return null;
      }
    };

    const validateAnswer = (selectedOptions: any) => {
      let correct_option = allQuestion[currentQuestionIndex]?.correct_option;
      setCurrentOptionSelected(selectedOptions);
      setCorrectOption(correct_option);
      setIsOptionsDisabled(true);
      if (selectedOptions === correct_option) {
        setScore(score + parseInt(allQuestion[currentQuestionIndex]?.correct_option_point || 0));
      }
  
      setShowNextButton(true);
    };

    const handleNext = () => {
      if (currentQuestionIndex == allQuestion.length - 1) {
        if (gameType === 'Gratuits') {
          setStopTimer(true)
          setShowScoreModal(true);
        } else {
          navigation.navigate({name: 'PartFinish'} as never);
        }
      } else {
        const nextQuestion = currentQuestionIndex + 1
        setCurrentQuestionIndex(nextQuestion);
        Time(allQuestion[nextQuestion]?.time)

        if(allQuestion[nextQuestion]?.question_type === 'music'){
          loadSound()
        }

        //console.log(score)

        // const currentQuestion = allQuestion[nextQuestion]?.question
        // console.log(currentQuestion)
        // const delimiter = "."
        // const result = currentQuestion.split(delimiter)
        // console.log(result[result.length-1], result.length)
        // if(result.length > 1) {
        //   setExtension(result[result.length-1])

        //   if(musicString.some(ext => result[result.length-1].indexOf(ext) !== -1)){
        //     loadSound(allQuestion[nextQuestion]?.question)
        //   }

        // }else{
        //   setExtension("")
        // }


        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
      }
    };

    const restartQuiz = () => {
      setShowScoreModal(false);
      setCurrentQuestionIndex(0);
      setScore(0);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
      navigation.navigate({name: 'ChoixQuiz', params: {status: gameType}} as never);
    };

    const handleBackHome = () => {
      navigation.navigate({name: 'Tabs'} as never);
    };

  async function loadSound() {
    //console.log('Loading Sound');
    // En ligne
    //const { sound } = await Audio.Sound.createAsync({uri: question}, {progressUpdateIntervalMillis: 1000/60}, onPlaybackStatusUpdate);
    // Local
    try {
      const questionFile = require('../assets/son.mp3');;
      // const questionFile = { uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' };
      const { sound } = await Audio.Sound.createAsync(questionFile, {progressUpdateIntervalMillis: 1000/60}, onPlaybackStatusUpdate);
      sound.setVolumeAsync(0.5);
      // console.log(allQuestion[currentQuestionIndex]?.question);
      setSound(sound);
    } catch (error) {
      console.error('Erreur de chargement du son:', error);
    }

  
    //sound.setOnAudioSampleReceived((sample) => console.log(JSON.stringify(sample, null, 2)));
  }

  // const animatedIndicatorStyle = useAnimatedStyle(() => ({
  //   left: `${Math.min((AudioProgress*100), 95)}%`
  //   //withTiming(`${Math.min((AudioProgress*100), 95)}%`, {duration: (soundStatus?.isLoaded && soundStatus?.progressUpdateIntervalMillis) || 100})
  // }));
  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    left: withTiming(`${Math.min(AudioProgress * 100, 95)}%`, { duration: 100 }),
  }));

  // useEffect(() => {
  //   loadSound("")
  // }, [question])

  function onPlaybackStatusUpdate(status: AVPlaybackStatus) {
    setSoundStatus(status)

    if (!status.isLoaded) {
      return;
      console.log('Erreur de chargement du son');
    }

    if(status.didJustFinish){
      sound?.setPositionAsync(0)
    }
    //console.log(JSON.stringify(status, null, 2))
  }

  async function playSound() {
    const player = useAudioPlayer(require('../assets/son.mp3'));
    // if(!sound){
    //   return;
    // }
    // console.log('Playing Sound');
    // if(soundStatus?.isLoaded && soundStatus?.isPlaying){
    //   await sound.pauseAsync()
    // }else{
    //   await sound.replayAsync();
    //   //sound.setRateAsync
    // }
  }

  useEffect(() => {
    // return sound
    //   ? () => {
    //       //console.log('Unloading Sound');
    //       sound.unloadAsync();
    //     }
    //   : undefined;
    loadSound(); // Charger le son lorsque le composant est monté

    return () => {
      if (sound) {
        sound.unloadAsync(); // Décharger le son lors de la destruction du composant
      }
    };
  }, [sound]);


  const [fontsLoaded] = useFonts({
    Bold: require("../assets/fonts/Poppins-Bold.ttf"),
    Regular: require("../assets/fonts/Poppins-Regular.ttf"),
    SemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    Medium: require("../assets/fonts/Poppins-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return undefined;
  }

  const renderModal = () => {
    return (
      <Modal animationType="slide" visible={showScoreModal}>
        <StatusBar animated={true} backgroundColor={name==='national' ? COLORS.ORANGE :  COLORS.BLEULIGHT} />
        <LinearGradient
          colors={[
            name === 'national' ? COLORS.GREEN :  name === 'international' ?  COLORS.BLEULIGHT : COLORS.ROSE,
            name === 'national' ?  COLORS.ORANGEGRADIANT : name === 'international'  ? COLORS.BLEULIGHT : COLORS.ROSE,
          ]}
          start={{x: 1, y: 1}}
          end={{x: 1, y: 0.4}}
          style={{
            flex: 1,
          }}>
          <ImageBackground
            source={require('../assets/imgOther.png')}
            style={{
              flex: 0.3,
            }}>
            <View style={{alignItems: 'center', marginTop: 40}}>
              <Text style={{color: COLORS.WHITE, fontSize: 18}}>Partie</Text>
              <Text
                style={{color: COLORS.WHITE, fontSize: 25, fontWeight: '700'}}>
                terminé
              </Text>
            </View>
          </ImageBackground>
          <View className="mt-3" style={{alignItems: 'center'}}>

            <ProgressCircle
              percent={Math.round((score * 100)/pointTotal)}
              radius={100}
              borderWidth={15}
              color={'#1FD625'}
              shadowColor={COLORS.WHITE}
              bgColor={COLORS.ORANGE}>
              <Text
                style={{fontSize: 30, color: COLORS.WHITE, fontFamily: 'Bold'}}>
                {Math.round((score * 100)/pointTotal)}%
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: COLORS.WHITE,
                  fontFamily: 'Medium'
                }}>
                {score} / {pointTotal}
              </Text>
            </ProgressCircle>
          </View>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <TouchableOpacity onPress={() => navigation.navigate({name:'QuizzResult', params:{type_quiz: name, status: gameType}})}>
            <Text
              style={{color: COLORS.WHITE, fontSize: 18, fontFamily: 'Medium'}}>
              Voir les resultats
            </Text>
            </TouchableOpacity>
          </View>
          <View
            className="bottom-0 right-0 absolute w-full px-5">
            <Button
              titleColor={COLORS.WHITE}
              bgColor={COLORS.ORANGE}
              onPress={restartQuiz}
              title="Reessayer"
            />
            <View style={{marginTop: 20, paddingBottom: 20}}>
              <Button
                titleColor={COLORS.BLACK}
                bgColor={COLORS.GREYWHITE}
                onPress={handleBackHome}
                title="Retour a l'accueil"
              />
            </View>
          </View>
        </LinearGradient>
      </Modal>
    );
  };

  return (
    <View className="flex-1 bg-white">

        <LinearGradient
          colors={[
            name === 'national' ? '#F9A22C' :  name === 'international' ?  COLORS.BLEULIGHT : name === 'joinQuiz' ? COLORS.VIOLETPUR : COLORS.ROSE,
            name === 'national' ?  '#1FD625' : name === 'international'  ? COLORS.BLEULIGHT : name === 'joinQuiz' ? COLORS.VIOLETPUR : COLORS.ROSE,
          ]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          className="flex-[1.3] rounded-b-3xl"
        >
          <ImageBackground
            source={require("../assets/bgQuiz.png")}
            imageStyle={{tintColor: 'grey', opacity: 0.2}}
            className="flex-[0.8]"
          >
            <View className="mt-14 pr-4 pl-4">
              <View className="flex-row items-center justify-between">

                <View>
                  <Text className="text-white text-lg font-[Bold]">
                    { (currentQuestionIndex+1) < 10 ? '0'+(currentQuestionIndex+1) : currentQuestionIndex+1}
                    <Text className="text-sm font-[Medium]"> / {allQuestion.length}</Text>
                  </Text>
                  <Text className="text-sm text-[#E8E8E8] font-[Medium]">Questions</Text>
                </View>

                <View className="flex-row items-center">
                  <View className="bg-[#E2A428] w-8 h-8 rounded-full items-center justify-center absolute right-[64px] z-10">
                    <Image source={require("../assets/history.png")} className="w-6 h-6" style={{tintColor: '#FFFFFF'}} />
                  </View>
                  <View className="p-1 bg-[#FFB31B] rounded-xl w-20 items-center justify-center">
                    <Text className="text-white text-sm font-[Medium]">
                      0{minutes} : {seconds < 10 ? '0' + seconds : seconds}
                    </Text>
                  </View>
                </View>

              </View>

              <View className="items-center justify-center h-[210px]">
                {/* musicString.some(ext => extension.indexOf(ext) !== -1) */}
                { allQuestion[currentQuestionIndex]?.question_type === "music" ? 
                  (
                    <View className="items-center justify-center bg-[#FFC919] w-[90%] h-[30%] rounded-2xl">

                      <View className="flex-row items-center justify-between">
                        <TouchableOpacity onPress={playSound} className="mr-2">
                          <FontAwesome5 name={isPlaying ? "pause" : "play"} size={20} color="white" />
                        </TouchableOpacity>

                        {/* taille */}
                        <View className="w-[65%] h-[30px] justify-center">
                          <View className="h-[3px] bg-slate-50 rounded"></View>
                          <Animated.View className="w-4 rounded-full bg-blue-400 aspect-square border border-blue-400 absolute" style={animatedIndicatorStyle}/>
                        </View>

                        {/* vitesse */}
                        <TouchableOpacity className="bg-[#FFB31B] w-[41px] h-[28px] rounded-3xl items-center justify-center ml-2">
                          <Text className="text-white text-sm font-[Medium]">1x</Text>
                        </TouchableOpacity>
                      </View>

                    </View>
                    // extension === videoString
                  ) :  allQuestion[currentQuestionIndex]?.question_type === "video"  ? (
                    <View className="items-center justify-center">
                      <TouchableOpacity className="rounded-2xl h-[190px]" onPress={() => setShowButton(!showButton)}>
                        <Video
                          ref={video}
                          className="flex-1 self-stretch w-[300px] h-full rounded-2xl"
                          style={{borderRadius: 16}}
                          //source={{ uri: question }}
                          source={allQuestion[currentQuestionIndex]?.question}
                          volume={0.5}
                          useNativeControls={false}
                          resizeMode={ResizeMode.CONTAIN}
                          isLooping={true}
                          onPlaybackStatusUpdate={status => setStatusVideo(() => status)}
                          
                        />
                      </TouchableOpacity>
                      <TouchableOpacity className="absolute"
                        onPress={() =>
                          [
                            statusVideo.isPlaying ? video.current.pauseAsync() : video.current.playAsync(),
                            setTimeout(() => {
                              setShowButton(!showButton);
                            }, 3000)
                            
                          ]
                        }
                        style={{display: showButton ? 'block' : 'none'}}
                      >
                        {statusVideo.isPlaying ? <Image source={require('../assets/pause.png')} /> : <Image source={require('../assets/play.png')} />}
                      </TouchableOpacity>
                    </View>
                  ) : allQuestion[currentQuestionIndex]?.question_type === "image" ? (
                    <View className="items-center justify-center">
                      {/* <Image source={{ uri: allQuestion[currentQuestionIndex]?.question }} className="w-[300px] h-[190px] rounded-2xl" /> */}
                      <Image source={allQuestion[currentQuestionIndex]?.question} className="w-[300px] h-[190px] rounded-2xl" />
                    </View>
                  ) : (
                    <Text className="text-white font-[Bold] text-xl text-center">
                      {allQuestion[currentQuestionIndex]?.question}
                    </Text>
                  )
                }

              </View>
            </View>
          </ImageBackground>
        </LinearGradient>

      <ScrollView contentContainerStyle={{paddingBottom: 50}} className="mt-3 pl-3 pr-3 flex-1">
      {allQuestion[currentQuestionIndex]?.options.map(option => (
          <TouchableOpacity
            disabled={isOptionsDisabled}
            onPress={() => validateAnswer(option)}
            key={option}
            className="w-full h-16 rounded-3xl items-center flex-row px-5 border mb-4"
            style={{
              backgroundColor:
                option == correctOption
                  ? COLORS.GREENANSWER
                  : option == currentOptionSelected
                  ? COLORS.ERRORANSWER
                  : COLORS.GREYWHITE,
                  borderColor:
                option == correctOption
                  ? COLORS.GREENLIGHT
                  : option == currentOptionSelected
                  ? 'red'
                  : COLORS.GREYWHITE,
            }}>
            <Text style={{color: 'black', left: 30}}>{option}</Text>
            {option == correctOption ? (
              <View
                className="w-8 h-8 rounded-2xl justify-center items-center absolute left-[10px]"
              >
                <Image
                  source={require('../assets/checkmark.png')}
                  style={{width: 20, height: 20, tintColor: COLORS.GREENLIGHT}}
                />
              </View>
            ) : option == currentOptionSelected ? (
              <View
                className="w-8 h-8 rounded-2xl justify-center items-center absolute left-[10px]">
                <Image
                  source={require('../assets/close.png')}
                  style={{width: 20, height: 20, tintColor: COLORS.RED}}
                />
              </View>
            ) : (
              <View
              className="w-6 h-6 rounded-[50px] bg-gray-100 border border-gray-300 absolute left-[10px]"></View>
            )}
          </TouchableOpacity>
        ))}
        {renderNextButton()}
      </ScrollView>
      {renderModal()}       
    </View>
  );
};

export default QuizzScreen;

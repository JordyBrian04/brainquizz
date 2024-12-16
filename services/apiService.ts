import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
// const BASE_URL = "http://16.170.45.148:8001"
const BASE_URL = "https://brainsquiz.com:8443/"

// get Id Client
// let init =null
// getIdClientWs()
// .then((res) => {
//   init= res
// })
// .catch((err) => {
//   console.log('errIdClient',err);
// })

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    console.log('token--------', token);
    if (token) {
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

export const SignIn = async (user : any) => {
    //console.log('user--------', user);
    return axiosInstance.post('/signin', user);
}

export const UserSignUp = async (userData : any) => {
    console.log('user--------', userData);
    return axiosInstance.post('/signup', userData);
}

export const EmailVerification = async (email : string) => {
    //console.log('user--------', user);
    return axiosInstance.post('/accounts/email/verification-request', email);
}

export const QuizGratuit = async () => {
  return axiosInstance.get("/user/quizzes/free");
}

export const QuizPayant = async () => {
  return axiosInstance.get("/user/quizzes/paid");
}

export const PhotoUpload = (image: any) => {
  const form:any = new FormData();

  form.append('file', {
    uri: image,
    type: 'image/png',
    name: 'profile-picture'
  })

  return axiosInstance.post("/files/profile-pictures", form,{
    headers:{
      'Content-Type': 'multipart/form-data'
    }
  })
}
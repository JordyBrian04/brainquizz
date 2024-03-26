import AsyncStorage from "@react-native-async-storage/async-storage";

// TOKEN

export const storeToken = async (course: any) => {
  try {
    await AsyncStorage.setItem("token", JSON.stringify(course));
  } catch (error) {
    console.log("[storeToken] error", error);
  }
};

export const getToken = async () => {
  try {
    let userData = await AsyncStorage.getItem("token");
    const data = JSON.parse(userData as string);
    return data;
  } catch (error) {}
};

export const removeToken = () => {
  try {
    AsyncStorage.removeItem("token");
  } catch (e) {}
};

// USER STORAGE

export const storeUser = async (course: any) => {
  try {
    await AsyncStorage.setItem("user", JSON.stringify(course));
  } catch (error) {
    console.log("[storeUser] error", error);
  }
};

export const getUser = async () => {
  try {
    let userData = await AsyncStorage.getItem("user");
    const data = JSON.parse(userData as string);
    return data;
  } catch (error) {
    console.log("[getUser] error", error);
  }
};


// ID CLIENT WS

export const storeIdClientWs = async (id: any) => {
  try {
    await AsyncStorage.setItem("clienId", JSON.stringify(id));
  } catch (error) {
    console.log("[storeToken] error", error);
  }
};

export const getIdClientWs = async () => {
  try {
    let userData = await AsyncStorage.getItem("clienId");
    const data = JSON.parse(userData as string);
    return data;
  } catch (error) {}
};

export const storeQuizzData = async (data: any) => {
  try {
    await AsyncStorage.setItem("quizzData", JSON.stringify(data));
  } catch (error) {
    console.log("[storeQuizzData] error", error);
  }
};

export const getQuizzData = async () => {
  try {
    let quizzData = await AsyncStorage.getItem("quizzData");
    const data = JSON.parse(quizzData as string);
    return data;
  } catch (error) {}
};

export const storeTheme = async (data: any) => {
  try {
    await AsyncStorage.setItem("theme", data);
  } catch (error) {
    console.log("[storeQuizzData] error", error);
  }
};

export const getTheme = async () => {
  try {
    let theme = await AsyncStorage.getItem("theme");
    const data = JSON.parse(theme as string);
    return data;
  } catch (error) {}
};

import * as secureStorage from "expo-secure-store";
import jwtDecode from "jwt-decode";

const storageKey = "accessToken";

const storeToken = async (authToken) => {
  try {
    await secureStorage.setItemAsync(storageKey, authToken);
  } catch (error) {
    console.log("Token Not Saved Successfully!!!");
  }
};

const getToken = async () => {
  try {
    return await secureStorage.getItemAsync(storageKey);
  } catch (error) {
    console.log("Could not Retrieve Token!!!");
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token)["user_id"] : null;
};

const removeToken = async () => {
  try {
    await secureStorage.deleteItemAsync(storageKey);
  } catch (error) {
    console.log("Could not Delete Token!!!");
  }
};

export default { getUser, getToken, storeToken, removeToken };

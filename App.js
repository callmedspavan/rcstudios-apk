import AboutScreen from "./App/Screens/AboutScreen";
import AlbumsScreen from "./App/Screens/AlbumsScreen";
import PortofolioScreen from "./App/Screens/PortofolioScreen";
import StreamScreen from "./App/Screens/StreamScreen";
import StreamViewScreen from "./App/Screens/StreamViewScreen";
import PhotoSelectionScreen from "./App/Screens/PhotoSelectionScreen";
import HomeScreen from "./App/Screens/HomeScreen";
import MobileNumberEnterScreen from "./App/Screens/MobileNumberEnterScreen";
import MobileOtpEnterScreen from "./App/Screens/MobileOtpEnterScreen";
import QuotationScreen from "./App/Screens/QuotationScreen";

import AuthNavigation from "./App/Navigation/AuthNavigation";
import AppNavigation from "./App/Navigation/AppNavigation";

import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from "react";

import jwtDecode from "jwt-decode";

import AuthContext from "./App/auth/context";
import authStorage from "./App/auth/storage";

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    restoreUser();
  }, []);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    // await authStorage.removeToken();
    if (!user) {
      return;
    } else {
      setUser(user);
    }
  };

  return (
    <PortofolioScreen />
    // <AuthContext.Provider value={{ user, setUser }}>
    //   <NavigationContainer>
    //     {user ? <AppNavigation /> : <AuthNavigation />}
    //   </NavigationContainer>
    // </AuthContext.Provider>
  );
}

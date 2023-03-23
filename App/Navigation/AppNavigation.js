import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import routeName from "../Config/navigationRouteNames";

import HomeScreen from "../Screens/HomeScreen";
import StreamScreen from "../Screens/StreamScreen";
import AlbumsScreen from "../Screens/AlbumsScreen";
import AboutScreen from "../Screens/AboutScreen";
import QuotationScreen from "../Screens/QuotationScreen";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import defaultStyles from "../Config/defaultStyles";

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name={routeName.HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={routeName.STREAM_SCREEN} component={StreamScreen} />
      <Tab.Screen
        name={routeName.QUOTATION_SCREEN}
        component={QuotationScreen}
      />
      <Tab.Screen name={routeName.ALBUMS_SCREEN} component={AlbumsScreen} />
      <Tab.Screen name={routeName.ABOUT_SCREEN} component={AboutScreen} />
    </Tab.Navigator>
  );
}

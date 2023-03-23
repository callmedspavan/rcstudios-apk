import { createStackNavigator } from "@react-navigation/stack";

import routeName from "../Config/navigationRouteNames";

import MobileNumberEnterScreen from "../Screens/MobileNumberEnterScreen";
import MobileOtpEnterScreen from "../Screens/MobileOtpEnterScreen";

export default function AuthNavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={routeName.MOBILE_NUMBER_ENTER_SCREEN}
        component={MobileNumberEnterScreen}
      />
      <Stack.Screen
        name={routeName.MOBILE_OTP_ENTER_SCREEN}
        component={MobileOtpEnterScreen}
      />
    </Stack.Navigator>
  );
}

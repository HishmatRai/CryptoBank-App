import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Select,
  SignUp,
  Login,
  SliderOne,
  SliderTwo,
  SliderThree,
  SliderFour,
  Home,
  Account,
  Card,
  Track,
  SelectPayment,
  Language,
  Profile,
  PassCode,
  Authentication,
  Notification,
  SystemStatus,
  WithDrawal,
  Trade,
  CustomizationSettings,
  PassCodeSetting
} from "./../Screens/index";
const Stack = createStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Select"
          component={Select}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SliderOne"
          component={SliderOne}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SliderTwo"
          component={SliderTwo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SliderThree"
          component={SliderThree}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SliderFour"
          component={SliderFour}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Card"
          component={Card}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Track"
          component={Track}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectPayment"
          component={SelectPayment}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Language"
          component={Language}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PassCode"
          component={PassCode}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Authentication"
          component={Authentication}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SystemStatus"
          component={SystemStatus}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WithDrawal"
          component={WithDrawal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Trade"
          component={Trade}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="CustomizationSettings"
          component={CustomizationSettings}
          options={{ headerShown: false }}
        />
           <Stack.Screen
          name="PassCodeSetting"
          component={PassCodeSetting}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

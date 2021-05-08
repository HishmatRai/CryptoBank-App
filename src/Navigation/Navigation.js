import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Select,SignUp,Login,SliderOne,SliderTwo,SliderThree,SliderFour,Home} from './../Screens/index';
const Stack = createStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Select" component={Select} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="SliderOne" component={SliderOne} options={{ headerShown: false }}/>
        <Stack.Screen name="SliderTwo" component={SliderTwo} options={{ headerShown: false }}/>
        <Stack.Screen name="SliderThree" component={SliderThree} options={{ headerShown: false }}/>
        <Stack.Screen name="SliderFour" component={SliderFour} options={{ headerShown: false }}/> */}
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
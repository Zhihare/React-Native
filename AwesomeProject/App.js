import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/pages/LoginPage";
import Register from "./src/pages/RegistrationPage";
import Home from "./src/pages/HomePage";
import Welcome from "./src/pages/WelcomePage";
// import './src/i18n';
const MainStack = createStackNavigator(); // вказує на групу навігаторів

export default () => {

  return (
    <NavigationContainer>
      <MainStack.Navigator>{/* Аналог Routes */}
        <MainStack.Screen name="Welcome" component={Welcome} />
        <MainStack.Screen name="Registration" component={Register} />{/* Аналог Route */}
        <MainStack.Screen name="Login" component={Login} />

        <MainStack.Screen name="Home" component={Home} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
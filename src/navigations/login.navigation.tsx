import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, CadastrarScreen, MapScreen } from "../screens";
import { LoginStackParamList } from "../types/Screen.types";
import TabNavigation from "./tab.navigation";


const Stack = createStackNavigator<LoginStackParamList>();

export default function LoginNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Cadastrar" component={CadastrarScreen} />
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}
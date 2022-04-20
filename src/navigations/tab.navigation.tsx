import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PerfilScreen } from "../screens";
import { Ionicons } from "@expo/vector-icons";
import colors from "../styles/colors";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: colors.purple,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveBackgroundColor: colors.purpleLight,
        tabBarInactiveTintColor: colors.white,
      }}
    >
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Mensagem"
        component={PerfilScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="chatbubbles" size={24} color={colors.white} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

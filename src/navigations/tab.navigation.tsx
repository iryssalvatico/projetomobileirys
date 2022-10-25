import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatScreen, PerfilScreen, MapScreen, SairScreen, QrCodeScreen, ArquivoScreen, CameraScreen, EnviarMensagemScreen, VideoAudioScreen, AcelerometroScreen, PedometroScreen } from "../screens";
import { Ionicons, Feather, AntDesign,  MaterialCommunityIcons, FontAwesome, Foundation } from "@expo/vector-icons";
import colors from "../styles/colors";
import ChatNavigation from "./chat.navigation";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: colors.purple,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveBackgroundColor: colors.purple,
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
        component={ChatScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="chatbubbles" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Mapa"
        component={MapScreen}
        options={{
          tabBarIcon: () => (
            <Feather name="map-pin" size={24} color="white" />
          ),
        }}
      />

      <Tab.Screen
        name="QrCode"
        component={QrCodeScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={24}
              color={colors.white}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: () => (
            <Feather
              name="camera"
              size={24}
              color={colors.white} />
          ),
        }}
      />

      <Tab.Screen
        name="Arquivos"
        component={ArquivoScreen}
        options={{
          tabBarIcon: () => (
            <AntDesign
              name="addfile"
              size={24}
              color={colors.white}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatNavigation}
        options={{
          tabBarIcon: () => (
            <Ionicons name="chatbubbles" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Sair"
        component={SairScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="exit" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="AudioVideo"
        component={VideoAudioScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="video" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Acelerometro"
        component={AcelerometroScreen}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="car" size={24} color={colors.white} />
          ),
        }}
      />
      <Tab.Screen
        name="Pedometro"
        component={PedometroScreen}
        options={{
          tabBarIcon: () => (
            <Foundation name="foot" size={24} color={colors.white} />
          ),
        }}
      />

    </Tab.Navigator>

  );
}


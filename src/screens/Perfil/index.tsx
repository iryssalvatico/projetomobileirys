import React, {useEffect, useRef, useState} from "react";
import { View, Text, Image, ImageBackground, TextInput } from "react-native";
import CardSocial from "../../components/CardSocial";
import styles from "./styles";
import Button from "../../components/Button";
import {LoginTypes} from "../../types/Screen.types"
import { FontAwesome5 } from "@expo/vector-icons";
import { ButtonComp, CardSocialComp, LoadingComp } from "../../components";
import { useAuth } from "../../hook/auth";
import * as Notifications from 'expo-notifications';
import {registerForPushNotificationsAsync} from "../../services/data/Push";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  })
});

export default function Perfil({navigation}: LoginTypes) {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user && user.profile_photo_url) {
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    async function fetchToken() {
      const token = await registerForPushNotificationsAsync()
      console.log(token)
    }
    fetchToken()
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/fundo.png")}
        style={styles.container}
      >
        <Image source={require("../../assets/fotoperfil.png")} />
        <Text style={styles.title}>Irys Salvatico</Text>
        <CardSocial>
          <>
            
            <TextInput placeholder="Texto genérico..." style={styles.inputdiv}/>
          </>
        </CardSocial>
        <CardSocial>
          <>
          
            <TextInput placeholder="Livro favorito:" style={styles.inputdiv}/>
          </>
        </CardSocial>
        <CardSocial>
          <>
            
            <TextInput placeholder="Autora Favorita:" style={styles.inputdiv}/>
          </>
        </CardSocial>
        <Button
          title="Salvar"
          type="purple"
          onPress={() => console.log("Salvar")}
        />
        <Button
          title="Alterar Senha"
          type="purple"
          onPress={() => console.log("Alterar Senha")}
        />
        <Button title="Sair" type="purple" onPress={() => console.log("Sair")} />
        
      </ImageBackground>
    </View>
  );
}
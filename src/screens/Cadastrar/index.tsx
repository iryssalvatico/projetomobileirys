import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  ImageBackground,
} from "react-native";
import { MaterialIcons, Entypo, Ionicons } from "@expo/vector-icons";
import { ButtonComp, LoadingComp } from "../../components";
import styles from "./styles";
import { useAuth } from "../../hook/auth";
import { IRegister } from "../../interfaces/User.interface";
import { LoginTypes } from "../../types/Screen.types";
import { AxiosError } from "axios";
import { IResponse } from "../../interfaces/Response.interface";

export default function Cadastrar({ navigation }: LoginTypes) {
  async function handleSignIn() {
    console.log("Cadastrar");
  }
  function handleLogin() {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/fundo.png")}
        style={styles.container}
      >
        <KeyboardAvoidingView>
          <Text style={styles.title}>Cadastre-se</Text>
          <View style={styles.formRow}>
            <Ionicons name="person" style={styles.icon} />
            <TextInput style={styles.input} placeholder="Nome" />
          </View>
          <View style={styles.formRow}>
            <MaterialIcons name="email" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.formRow}>
            <Entypo name="key" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>
          <ButtonComp title="Salvar" type="purple" onPress={handleSignIn} />
          <ButtonComp title="Voltar" type="green" onPress={handleLogin} />
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}
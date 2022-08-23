import React, {useEffect, useState} from "react";
import {
View,
TextInput,
ImageBackground,
FlatList,
SafeAreaView,
TouchableOpacity,
Text,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons" ;
import { CardComp, LoadingComp } from "../../components";
import styles from "./styles" ;
import { ChatTypes } from "../../types/Screen.types";
import { apiMensagem } from "../../services/data";
import { IMensagemState } from "../../interfaces/Mensagem.interface";

export default function Chat ({navigation}: ChatTypes) {
const [isLoading, setIsLoading] = useState (true);
const [mensagem, setMensagem] = useState <IMensagemState[]>([]);
    function handleChat () {
    navigation.navigate ("EnviarMensagem");
    }

    useEffect(() => {
    async function loadMensagem (){
    const response = await apiMensagem.index();
    setMensagem(response.data.data);
    setIsLoading (false);
    }
    navigation.addListener("focus", () => loadMensagem());
    }, [])
    const renderItem =({ item }) =>
    <CardComp data={item} />;
    return (
    <>
        {isLoading ? (
        <LoadingComp />
        ) : (
        <ImageBackground source={require("../../assets/fundo.png")} style={styles.container}>
            <SafeAreaView styles={styles.container}>
                <View style={styles.rowSearch}>
                    <FontAwesome5 name="search" style={styles.icon} />
                    <TextInput placeholder="Pesquisar chat" />
                </View>
                {mensagem.length > 0 && (
                <FlatList data={mensagem} renderItem={renderItem} keyExtractor={(item)=> item.id}
                    />
                    )}
                    <TouchableOpacity style={styles.button} onPress={handleChat}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
            </SafeAreaView>
        </ImageBackground>
        )}
    </>
    );
}
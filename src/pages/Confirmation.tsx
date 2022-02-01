import { useNavigation, useRoute } from "@react-navigation/core";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import colors from "../styles/colors";
import { Buttom } from "../components/Button";

interface Params {
 title: string;
 subTitle: string;
 buttonTitle: string;
 icon: 'smile' | 'heart' | 'hug';
 nextScreen: string;
}

const emojis = {
 smile: '😊',
 heart: '❤️',
 hug: '🤗'
}

export function Confirmation() {
 const route = useRoute();
 const navigation = useNavigation();

 const { title, subTitle, buttonTitle, icon, nextScreen } = route.params as Params;

 function handleMoveOn() {
  navigation.navigate(nextScreen);
 }

 return (
  <SafeAreaView style={styles.container}>
   <View style={styles.content}>
    <Text style={styles.emoji}>
     {emojis[icon]}
    </Text>
    <Text style={styles.titulo}>
     {title}
    </Text>
    <Text style={styles.subTitulo}>
    {subTitle}
    </Text>
    <View style={styles.footer}>
     <Buttom text={buttonTitle} onPress={handleMoveOn}></Buttom>
    </View>
   </View>
  </SafeAreaView>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-around',
 },
 content: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: 20
 },
 titulo: {
  marginTop: 50,
  fontSize: 30,
  fontWeight: 'bold',
  textAlign: 'center',
  lineHeight: 40,
  color: colors.heading
 },
 subTitulo: {
  fontSize: 20,
  paddingVertical: 10,
  textAlign: 'center',
  color: colors.heading
 },
 emoji: {
  fontSize: 96,
  alignSelf: 'center',
 },
 footer: {
  paddingHorizontal: 75,
  width: '100%',
  marginTop: 50,
 }
});
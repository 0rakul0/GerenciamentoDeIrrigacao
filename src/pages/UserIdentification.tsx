import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {KeyboardAvoidingView, View, Text, SafeAreaView, StyleSheet, TextInput, Platform, Keyboard, TouchableWithoutFeedback } from "react-native";
import colors from "../../styles/colors";
import { Buttom } from "../components/Button";

export function UserIdentification() {
const [isFocused, setIsFocused] = useState(false);
const [isFill, setIsFill] = useState(false);
const [name, setName] = useState<String>();
const navigation = useNavigation();
 
 function handleSubmit(){
  navigation.navigate('Confirmation');
}

function handleBlur(){
 setIsFocused(false);
 setIsFill(!!name);
}
function handleFocus(){
 setIsFocused(true);
}
function handleChangeText(value: String){
 setIsFill(!!value);
 setName(value)
}
 return (
  <SafeAreaView style={styles.container}>
   <KeyboardAvoidingView 
    style={styles.container} 
    behavior={Platform.OS=='ios'?'padding':'height'}
   >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
   <View style={styles.conteudo}>
    <View style={styles.form}>
     <Text style={styles.emoji}>
      {isFill ? '😊':'🤔'}
     </Text>
     <Text style={styles.texto}>
      Qual o seu nome?
     </Text>
     <TextInput 
      style={[styles.input, (isFocused || isFill) && {borderBottomColor: colors.green}]}
      placeholder="digite seu nome"
      onBlur={handleBlur}
      onFocus={handleFocus}
      onChangeText={handleChangeText}
      />
     <View style={styles.footer}>
     <Buttom text={"Confirmar"} onPress={handleSubmit}/>
     </View>
    </View>
   </View>
   </TouchableWithoutFeedback>
   </KeyboardAvoidingView>
  </SafeAreaView>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  width: '100%',
  alignContent: 'center',
  justifyContent: 'center',
 },
 conteudo: {
  flex: 1,
  width: '100%',
 },
 form: {
  flex: 1,
  paddingHorizontal:54,
  alignContent: 'center',
  justifyContent: 'center',
 },
 texto:{
  fontSize: 32,
  lineHeight: 40,
  color: colors.heading,
  alignSelf: 'center',
  marginTop: 40,
 },
 emoji: {
  fontSize: 80,
  alignSelf: 'center',
 },
 input:{
  borderBottomWidth: 1,
  borderBottomColor: colors.gray,
  color: colors.heading,
  width: '100%',
  fontSize: 18,
  marginTop: 50,
  padding: 10,
  textAlign: 'center',
  
 },
 footer:{
  paddingHorizontal: 20,
  width: '100%',
  marginTop:50,
 }
})
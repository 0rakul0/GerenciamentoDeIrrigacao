import React, { useState } from "react";
import { SafeAreaView, Text, Image, StyleSheet, View, TouchableOpacity, Dimensions, } from "react-native";
import colors from "../styles/colors";
import wateringImg from '../assets/watering.png';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/core";

export default function Wellcome() {
 const navigation = useNavigation();
 
 function handleStart(){
  navigation.navigate('UserIdentification');
}

 return (
  <SafeAreaView style={styles.container}>
   <View style={styles.embrulho}>
    <Text style={styles.title}>
     Gerencie{'\n'}suas planta de{'\n'} forma fácil
    </Text>
    <View style={styles.boxImg}>
     <Image source={wateringImg} style={styles.image} resizeMode="contain" />
    </View>
    <Text style={styles.subTitle}>
     Não esqueça mais de regar suas plantas. {'\n'}
     Nós cuidamos de lembrar você sempre que precisar.
    </Text>
    <View style={styles.boxImg}>
     <TouchableOpacity style={styles.buttom} activeOpacity={0.8} onPress={handleStart}>
      <Text>
       <Entypo name="chevron-right" style={styles.buttomIcon} color={colors.white} />
      </Text>
     </TouchableOpacity>
    </View>
   </View>
  </SafeAreaView>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
 },
 embrulho: {
  flex: 1,
  alignContent: 'center',
  justifyContent: 'space-around',
  padding: 40,
 },
 title: {
  fontSize: 32,
  lineHeight: 40,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 38,
  color: colors.heading
 },
 subTitle: {
  fontSize: 19,
  lineHeight: 24,
  textAlign: 'center',
  paddingHorizontal: 20,
  color: colors.heading
 },
 boxImg: {
  alignItems: 'center',
 },
 image: {
  height: Dimensions.get('window').width * 0.7,
 },
 buttom: {
  backgroundColor: colors.green,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 16,
  marginBottom: 20,
  width: 56,
  height: 56,
 },
 buttomIcon: {
  fontSize: 24,
  color: colors.white
 },
});
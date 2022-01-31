import React, { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import colors from "../styles/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import userImg from "../assets/profile.png"

export function Header() {
 const [userName, setUserName] = useState<String>();

 useEffect(() => {
  async function loadStorageUserName() {
   const user = await AsyncStorage.getItem('@plantmanager.user');
   setUserName(user || 'Alguém');
  }
  loadStorageUserName();
 }, []);

 return (
  <View style={styles.container}>
   <View>
    <Text style={styles.greeting}>Olá,</Text>
    <Text style={styles.userName}>{userName}</Text>
   </View>
   <Image source={userImg} style={styles.image} />
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
 },
 greeting: {
  fontSize: 30,
  color: colors.heading,
 },
 userName: {
  fontSize: 34,
  color: colors.heading,
  lineHeight: 40,
 },
 image: {
  width: 80,
  height: 80,
  borderRadius: 40,
 }
})
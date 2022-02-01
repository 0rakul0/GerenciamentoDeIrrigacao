import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, Platform, TouchableOpacity, FlatList } from "react-native";
import { Header } from "../components/Header";
import colors from "../styles/colors";
import waterdropImg from "../assets/waterdrop.png";
import { PlantProps, loadPlant } from "../libs/storage";
import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";
import { PlantCardSecondary } from "../components/PlantCardSecondary";

export function MyPlants() {
 const [plants, setPlants] = useState<PlantProps[]>([]);
 const [load, setLoad] = useState(true);
 const [nextWatered, setNextWatered] = useState<string>();	
 

 useEffect(() => {
   async function loadStorageDate() {
    const plantsStorage = await loadPlant();
    const nextTime = formatDistance(
     new Date(plantsStorage[0].dateTimeNotification).getTime(),
     new Date().getTime(),
     { locale: pt }
    )
    setNextWatered(
     `Não esqueça de regar a sua plantinha ${plantsStorage[0].name} à ${nextTime}`
    )
    setPlants(plantsStorage);
    setLoad(false);
   }
   loadStorageDate();
}, []);

 return (
  <View style={styles.container}>
   <Header/>
   <View style={styles.spotlight}>
    <Image source={waterdropImg} style={styles.spotlightImg} />
    <Text style={styles.spotlightText}>
     {nextWatered}
    </Text>
   </View>
   <View style={styles.plants}>
     <Text style={styles.plantsTitle}>
      Proximas regadas
     </Text>
      <FlatList
       data={plants}
       keyExtractor={item => String(item.id)}
       renderItem={({ item }) => (
        <PlantCardSecondary data={item}/>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flex:1}}
     />
    </View>
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: 30,
  paddingTop: 30,
  backgroundColor: colors.background,
 },
 spotlight: {
  backgroundColor: colors.blue_light,
  paddingHorizontal: 20,
  height: 100,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: 20,
  marginTop: 20,
 },
 spotlightImg: {
  width: 60,
  height: 60,
 },
 spotlightText: {
  flex: 1,
  fontSize: 17,
  paddingHorizontal: 20,
  color: colors.blue,
 },
 plants: {
  flex: 1,
  marginTop: 30,
  width:'100%',
  },
 plantsTitle: {
  paddingVertical: 20,
  fontSize: 25,
  color: colors.heading,
 }
});
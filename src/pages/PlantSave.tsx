import React,{ useEffect,  useState  } from "react";
import { Alert, StyleSheet, Text, View, Image, ScrollView, Platform, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/core";
import { SvgFromUri } from "react-native-svg";
import waterdropImg from "../assets/waterdrop.png";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";
import { loadPlant, PlantProps, savePlant } from "../libs/storage";
import colors from "../styles/colors";
import { format, isBefore } from "date-fns";
import { useNavigation } from "@react-navigation/core";
import { Buttom } from "../components/Button";

interface Params {
 plant: PlantProps;
}

export function PlantSave() {
 const route = useRoute();
 const navigation = useNavigation();
 const { plant } = route.params as Params;
 const [selectDateTime, setSelectDateTime] = useState(new Date());
 const [showDatePicker, setShowDatePicker] = useState(Platform.OS == 'ios');

 function handleChageDateTime(event: Event, dateTime: Date | undefined) {
  if (Platform.OS == 'android') {
   setShowDatePicker(oldState => !oldState)
}

if (dateTime && isBefore(dateTime, new Date())) {
   setSelectDateTime(new Date());

   return Alert.alert('Escolha uma hora no futuro!');
}

if (dateTime)
   setSelectDateTime(dateTime);
}

function handleOpenDatePickerOnAndroid(){
 setShowDatePicker(oldState => !oldState)
}


async function handleSave() {
 try{
  await savePlant({...plant, dateTimeNotification: selectDateTime});

  navigation.navigate('Confirmation', {
   title: 'Tudo Certo!',
   subTitle: 'fique tranquilo que vamos sempre lembrar você de sua plantinha com os muito cuidados',
   buttonTitle: 'Muito obrigado',
   icon: 'hug',
   nextScreen: 'MyPlants'
 });

 }catch{
  Alert.alert('Erro ao salvar planta');
 }
}

return (
 <View style={styles.container}>

  <View style={styles.platInfo}>
   <SvgFromUri
    width="100%"
    height={300}
    uri={plant.photo}
   />
   <Text style={styles.title}>
    {plant.name}
   </Text>
   <Text style={styles.subTitle}>
    {plant.about}
   </Text>
  </View>
  <View style={styles.controllers}>
   <View style={styles.dicas}>
    <Image source={waterdropImg} style={styles.img} />
    <Text style={styles.dicasText}>
     {plant.water_tips}
    </Text>
   </View>
   <Text style={styles.horariosText}>
   Ecolha o melhor horário para ser lembrado:
   </Text>
   {showDatePicker && (
    <DateTimePicker
    mode="time"
    is24Hour={true}
    display="spinner"
    value={selectDateTime}
    onChange={handleChageDateTime}
    />
    ) }
    {
     Platform.OS == 'android' && (
      <TouchableOpacity onPress={handleOpenDatePickerOnAndroid} style={styles.buttonDate}>
       <Text style={styles.dateText}>
        
       {`Mudar horario ${format(selectDateTime, ' HH:mm')}`}	
      </Text>
      </TouchableOpacity>
      )
    }
   <Buttom text="Cadastrar" onPress={handleSave} />
  </View>
 </View>
)
}
const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'space-between',
  backgroundColor: colors.shape,
 },
 platInfo: {
  flex: 1,
  paddingHorizontal: 30,
  paddingVertical: 50,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.shape,
 },
 controllers: {
  backgroundColor: colors.white,
  paddingBottom: 20,
  paddingHorizontal: 30,
 },
 title: {
  fontSize: 24,
  color: colors.heading,
  textAlign: 'center',
  marginBottom: 20,
 },
 subTitle: {
  textAlign: 'center',
  fontSize: 18,
  color: colors.heading,
  marginTop: 10,
 },
 dicas: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: colors.blue_light,
  padding: 20,
  borderRadius: 10,
  position: 'relative',
  bottom: 55,
 },
 dicasText: {
  flex: 1,
  fontSize: 18,
  color: colors.blue,
  marginLeft: 10,
  textAlign: 'justify',
 },
 horariosText: {
  fontSize: 16,
  textAlign: 'center',
  color: colors.heading,
  marginBottom: 20,
 },
 dateText: {
  fontSize: 24,
  color: colors.heading,
  textAlign: 'center',
 },
 buttonDate:{
  width: '100%',
  alignItems: 'center',
  paddingVertical: 40,
 },
 img: {
  width: 50,
  height: 50,
  marginRight: 10,
 },
});
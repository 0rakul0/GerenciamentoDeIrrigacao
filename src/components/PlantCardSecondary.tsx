import React from "react";
import { Text, StyleSheet, View, Animated } from "react-native";
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";
import { Swipeable } from "react-native-gesture-handler";
import colors from "../styles/colors";
import { SvgFromUri } from 'react-native-svg'
import { Feather } from "@expo/vector-icons";

interface PlantProps extends RectButtonProperties {
 data: {
  name: string;
  photo: string;
  hour: string;
 };
 handleRemove: () => void;
}

export function PlantCardSecondary({ data, handleRemove, ...rest }: PlantProps) {
 return (
  <Swipeable overshootRight={false} renderRightActions={
   () => (
    <Animated.View>
     <View>
      <RectButton
       style={styles.buttonRemove}
       onPress={handleRemove}
      >
       <Feather style={styles.icon} name="trash-2" size={24} color={colors.white} />
      </RectButton>
     </View>
    </Animated.View>
   )
  } >
   <RectButton style={styles.container} {...rest}>
    <SvgFromUri uri={data.photo} width={70} height={70} />
    <Text style={styles.title}>
     {data.name}
    </Text>
    <View style={styles.details} >
     <Text style={styles.timeLabel}>
      Regar em:
     </Text>
     <Text style={styles.time}>
      {data.hour}
     </Text>
    </View>
   </RectButton >
  </Swipeable>
 )
}

const styles = StyleSheet.create({
 container: {
  width: '100%',
  paddingVertical: 25,
  paddingHorizontal: 15,
  backgroundColor: colors.shape,
  borderRadius: 20,
  alignItems: 'center',
  flexDirection: 'row',
  marginVertical: 5,
 },
 title: {
  flex: 1,
  marginLeft: 10,
  fontSize: 25,
  fontWeight: 'bold',
  color: colors.heading,
 },
 details: {
  alignItems: 'flex-end',
 },
 timeLabel: {
  fontSize: 20,
  color: colors.body_dark,
 },
 time: {
  marginTop: 5,
  fontSize: 20,
  color: colors.body_dark,
 },
 buttonRemove: {
  width: 100,
  height: 110,
  backgroundColor: colors.red,
  marginTop: 10,
  borderRadius: 20,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  right: 20,
  paddingLeft: 10,
 },
 icon: {
  left: 5,
 }
})
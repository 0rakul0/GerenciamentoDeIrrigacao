import React from "react";
import { Text, StyleSheet } from "react-native";
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";
import colors from "../styles/colors";
import {SvgFromUri} from 'react-native-svg'

interface PlantProps extends RectButtonProperties {
 data:{
  name: string;
  photo: string;
 }
}

export function PlantCardPrimary({ data, ...rest }: PlantProps) {
 return (
  <RectButton style={styles.container} {...rest}>
    <SvgFromUri height={100} uri={data.photo}/>
   <Text style={styles.title}>
    {data.name}
   </Text>

  </RectButton>
  )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: colors.shape,
  maxWidth:'45%',
  borderRadius: 20,
  paddingVertical: 10,
  alignItems: 'center',
  margin: 10,
 },
 title: {
  color: colors.green_dark,
  fontSize: 20,
  marginVertical: 16,
 },
 imagem:{
  height: 100
 }
})
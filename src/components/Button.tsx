import React from "react";
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native";
import colors from "../styles/colors";

interface ButtonProps extends TouchableOpacityProps{
 text: String,
}

export function Button({ text, ...rest }: ButtonProps) {
 return (
  <TouchableOpacity style={styles.buttom} activeOpacity={0.8} {...rest}>
   <Text style={styles.buttomText}>
    {text}
   </Text>
  </TouchableOpacity>
 )
}

const styles = StyleSheet.create({
 buttom: {

  backgroundColor: colors.green,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 16,
  marginBottom: 20,
  height: 56,
 },
 buttomText: {
  fontSize: 24,
  color: colors.white
 },
});
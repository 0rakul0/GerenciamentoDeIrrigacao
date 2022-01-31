import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import colors from "../styles/colors";

interface EnvorimentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EnvorimentButton({ title, active=false, ...rest }: EnvorimentButtonProps) {
  return (
    <RectButton style={[styles.container, active && styles.containerActive]} {...rest}>
      <Text style={[styles.title, active && styles.titleActive]}>{title}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: colors.shape,
   width: 90,
   height: 40,
   borderRadius: 12,
   justifyContent: 'center',
   alignItems: 'center',
   marginHorizontal: 15,
  },
  containerActive: {
   backgroundColor: colors.green_light,
  },
  title: {
   fontSize: 17,
   color: colors.heading,
  },
  titleActive: {
   fontWeight: 'bold',
   color: colors.green_dark,
  }
})
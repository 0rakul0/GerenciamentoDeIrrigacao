import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";
import colors from "../styles/colors";
import { SvgFromUri } from 'react-native-svg'

interface PlantProps extends RectButtonProperties {
  data: {
    name: string;
    photo: string;
    hour: string;
  }
}

export function PlantCardSecondary({ data, ...rest }: PlantProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <SvgFromUri uri={data.photo} width={100} height={100}/>
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
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical:25,
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
    alignItems:'flex-end',
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
})
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../styles/colors";
import { PlantSelect } from "../pages/PlantSelect";
import { MaterialIcons } from "@expo/vector-icons";
import { MyPlants } from "../pages/MyPlants";
import { Platform } from "react-native";

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
 return (
  <AppTab.Navigator
   screenOptions={{
    tabBarActiveBackgroundColor: colors.background,
    tabBarInactiveBackgroundColor: colors.background,
    tabBarLabelPosition: 'beside-icon',
    header: () => null,
    tabBarStyle: {
     borderTopWidth: 1,
     borderTopColor: colors.green_light,
     height: 65
    },
   }}>
   <AppTab.Screen
    name="Nova Planta"
    component={PlantSelect}
    options={{
     tabBarIcon: (({ size, color }) => (
      <MaterialIcons
       name="add-circle-outline"
       size={size}
       color={color}
      />
     ))
    }}
   />
   <AppTab.Screen
    name="Minhas Plantas"
    component={MyPlants}
    options={{
     tabBarIcon: (({ size, color }) => (
      <MaterialIcons
       name="format-list-bulleted"
       size={size}
       color={color}
      />
     ))
    }}
   />
  </AppTab.Navigator>
 )
}

export default AuthRoutes;
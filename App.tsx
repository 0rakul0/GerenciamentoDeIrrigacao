import React, { useEffect } from "react";
import Routes from "./src/routes";
import * as Notifications from "expo-notifications";
import { PlantProps } from "./src/libs/storage";


export default function App() {
 useEffect(() => {
  const subscription = Notifications.addNotificationReceivedListener(
   async notification => {
    const data = notification.request.content.data.plant as PlantProps;
    console.log(data)
   }
  )
  return () => subscription.remove();

 }, [])

 return (
  <Routes />
 );
}
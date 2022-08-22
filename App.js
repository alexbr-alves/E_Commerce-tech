import React, { useCallback } from 'react';
import { useFonts } from 'expo-font';

import {SplashScreen} from 'expo-splash-screen'
import { Roboto_700Bold, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto';

import AppRotas from './src/rotas/appRotas'

export default function App() {
  let [fontsLoaded, error] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular
  })
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();    }
  }, [fontsLoaded])

    if(!fontsLoaded){
      return null
    }
  return (
    <>
    <AppRotas/>
    </>
  );
}


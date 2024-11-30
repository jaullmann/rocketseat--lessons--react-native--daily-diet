import { StatusBar } from "react-native";
import { Platform } from "react-native";

import { ThemeProvider } from "styled-components";
import theme from "./src/theme";

import { Routes } from "./src/routes";
import { Loading } from "@components/Loading";

import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <>
        <StatusBar 
          barStyle={Platform.OS === 'ios' ? "dark-content" : "light-content"}
          backgroundColor={theme.COLORS.GRAY_100}          
        />
        {fontsLoaded ? <Routes /> : <Loading />}
      </>      
    </ThemeProvider>    
  );
}

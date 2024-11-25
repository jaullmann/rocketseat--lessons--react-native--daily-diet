import { StatusBar } from "react-native";

import { ThemeProvider } from "styled-components";
import theme from "./src/theme";

import { Routes } from "./src/routes";

import { Loading } from "@components/Loading";

import { Feedback } from "@screens/Feedback";
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <>
        <StatusBar 
          barStyle="light-content"
          backgroundColor={theme.COLORS.GRAY_200}          
        />
        {fontsLoaded ? <Feedback /> : <Loading />}
      </>      
    </ThemeProvider>    
  );
}

import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/nunito";
import React from "react";
import Routes from "./src/routes";

export default function App() {
  const fontLoaded = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fontLoaded) {
    return null;
  }

  return <Routes />;
}

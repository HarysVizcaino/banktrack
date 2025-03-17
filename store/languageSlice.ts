import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import i18n from "@/locales/i18n";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface LanguageState {
  language: string;
}

const initialState: LanguageState = {
  language: i18n.language || "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
        state.language = action.payload;
        i18n.changeLanguage(action.payload);
        AsyncStorage.setItem("appLanguage", action.payload);
      },
      loadLanguage: (state, action: PayloadAction<string>) => {
        state.language = action.payload;
        i18n.changeLanguage(action.payload);
      },
  },
});

export const { setLanguage, loadLanguage } = languageSlice.actions;
export default languageSlice.reducer;
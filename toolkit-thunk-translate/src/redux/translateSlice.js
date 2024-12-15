import { createSlice } from "@reduxjs/toolkit";
import { getLanguages, translate } from "./action";

const translateSlice = createSlice({
  name: "translate",
  initialState: {
    loading: false,
    error: null,
    languages: [],

    /* translate section */

    sourceLang: { value: "tr", label: "Turkish" },
    targetLang: { value: "en", label: "English" },
    textToTranslate: "",
    translatedText: "",
  },
  reducers: {
    setSource: (state, action) => {
      state.sourceLang = action.payload;

      console.log("sourceLang  : ", state.sourceLang);
    },
    setTarget: (state, action) => {
      state.targetLang = action.payload;

      console.log("targetLang  : ", state.targetLang);
    },
    setTextToTranslate: (state, action) => {
      state.textToTranslate = action.payload;

      console.log("textToTranslate  : ", state.textToTranslate);
    },
    setTranslatedText: (state, action) => {
      state.translatedText = action.payload;

      console.log("translatedText  : ", state.translatedText);
    },

    changeLang: (state) => {
      const currentSource = state.sourceLang;
      const currentTarget = state.targetLang;

      const currentSourceText = state.textToTranslate;
      const currentTargetText = state.translatedText;

      state.sourceLang = currentTarget;
      state.targetLang = currentSource;

      state.textToTranslate = currentTargetText;
      state.translatedText = currentSourceText;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLanguages.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.languages = action.payload;
    });
    builder.addCase(getLanguages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getLanguages.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(translate.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.translatedText = action.payload;
    });
    builder.addCase(translate.pending, (state, action) => {
      state.loading = true;
      state.translatedText = "";
    });
  },
});

export const {
  setSource,
  setTarget,
  setTextToTranslate,
  setTranslatedText,
  changeLang,
} = translateSlice.actions;

export default translateSlice.reducer;

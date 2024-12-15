import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const getLanguages = createAsyncThunk(
  "languages/getLanguages",
  async () => {
    const res = await api.get("/getLanguages");

    return res.data.data.languages;
  }
);

export const translate = createAsyncThunk(
  "languages/translate",
  async (arg, { getState }) => {
    const { translateReducer } = getState();

    const params = new URLSearchParams();
    params.set("source_language", translateReducer.sourceLang.value);
    params.set("target_language", translateReducer.targetLang.value);
    params.set("text", translateReducer.textToTranslate);

    const res = await api.post("/translate", params);

    console.log(res.data.data.translatedText);

    return res.data.data.translatedText;
  }
);

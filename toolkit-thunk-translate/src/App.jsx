import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { getLanguages, translate } from "./redux/action";
import {
  setSource,
  setTarget,
  setTextToTranslate,
  setTranslatedText,
  changeLang,
} from "./redux/translateSlice";
const App = () => {
  const dispatch = useDispatch();

  const { languages, sourceLang, targetLang, textToTranslate, translatedText } =
    useSelector((store) => store.translateReducer);
  const formatted = useMemo(
    () =>
      languages.map((item) => ({
        value: item.code,
        label: item.name,
      })),
    [languages]
  );

  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  return (
    <main>
      <h1>ÇEVİRİ + </h1>
      <div className="translate-wrapper">
        <div className="translate-header">
          <Select
            value={sourceLang}
            options={formatted}
            className="select"
            onChange={(value) => {
              if (value.value === targetLang.value)
                return dispatch(changeLang());

              dispatch(setSource(value));
            }}
          />
          <button
            onClick={() => {
              dispatch(changeLang());
            }}
          >
            Değiş
          </button>
          <Select
            value={targetLang}
            options={formatted}
            className="select"
            onChange={(value) => {
              if (targetLang.value === value.value) return;
              if (sourceLang.value === value.value)
                return dispatch(changeLang());
              dispatch(setTarget(value));
              dispatch(translate());
            }}
          />
        </div>
        <div className="translate-body">
          <textarea
            value={textToTranslate}
            className="white"
            onChange={(e) => {
              dispatch(setTextToTranslate(e.target.value));
            }}
          />
          <textarea
            disabled
            value={translatedText}
            onChange={(e) => {
              dispatch(setTranslatedText(e.target.value));
            }}
          />
        </div>

        <button
          onClick={() => {
            dispatch(translate());
          }}
        >
          Çevir
        </button>
      </div>
    </main>
  );
};

export default App;

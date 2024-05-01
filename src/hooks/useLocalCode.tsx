import { useState } from "react";
import {
  LanguageName,
  LocalStoragePrefix,
  sampleCodeMap,
} from "@/types/languages";

export const useLocalCode = () => {
  const getKeyName = (language: LanguageName) =>
    `${LocalStoragePrefix}${language}`;

  const getLocalStorageCode = (language: LanguageName) => {
    try {
      let storedCode = "";
      if (typeof window !== "undefined") {
        storedCode = localStorage.getItem(getKeyName(language));
      }
      return { code: storedCode || "", exists: storedCode !== null };
    } catch (error) {
      console.error("Error accessing localStorage:", error);
      return { code: "", exists: false };
    }
  };

  const getCode = (language: LanguageName) => {
    const { code, exists } = getLocalStorageCode(language);
    return exists ? code : sampleCodeMap.get(language);
  };

  const saveCodeToLocalStorage = (language: LanguageName, code: string) => {
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem(getKeyName(language), code);
      }
    } catch (error) {
      console.error("Error saving code to localStorage:", error);
    }
  };

  const clearLocalStorageCode = (language: LanguageName) => {
    try {
      if (typeof window !== "undefined") {
        localStorage.removeItem(getKeyName(language));
      }
    } catch (error) {
      console.error("Error clearing localStorage code:", error);
    }
  };

  return { getCode, saveCodeToLocalStorage, clearLocalStorageCode };
};

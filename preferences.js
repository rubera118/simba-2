(() => {
  document.documentElement.classList.add("prefs-loading");

  const readStoredValue = (key, fallback) => {
    try {
      const rawValue = window.localStorage.getItem(key);
      return rawValue ? JSON.parse(rawValue) : fallback;
    } catch {
      return fallback;
    }
  };

  const theme = readStoredValue("simba-theme", "light");
  const language = readStoredValue("simba-language", "en");
  const isDarkTheme = theme === "dark";

  document.documentElement.lang = language;
  document.documentElement.classList.toggle("dark", isDarkTheme);

  const syncBodyTheme = () => {
    document.body?.classList.toggle("dark", isDarkTheme);
  };

  window.markPreferencesReady = () => {
    document.documentElement.classList.remove("prefs-loading");
  };

  if (document.body) {
    syncBodyTheme();
  } else {
    document.addEventListener("DOMContentLoaded", syncBodyTheme, { once: true });
  }
})();

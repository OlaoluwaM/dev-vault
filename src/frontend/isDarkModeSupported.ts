export default function isDarkModeSupported(): boolean {
  const NO_DARK_MODE_SUPPORT = 'not all';
  const browserSupportsDarkMode =
    window.matchMedia('(prefers-color-scheme)').media !== NO_DARK_MODE_SUPPORT;

  return browserSupportsDarkMode;
}

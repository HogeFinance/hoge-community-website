export const getCookieByName = (name) => {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));

  return match ? match[2] : "";
};

export const getLanguage = () => getCookieByName("lang") || "en-US";

export const getLocale = () => getCookieByName("locale") || "en-US";


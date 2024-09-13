export const isValidUrl = (url: string) => {
  return url.startsWith("http://") || url.startsWith("https://");
};

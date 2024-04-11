export function transformUrl(url: string) {
  const urlReplace = url.replaceAll("%20", " ");
  return urlReplace;
}

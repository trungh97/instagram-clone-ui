export type ImageURLs<T extends readonly string[]> = {
  [K in T[number]]: string;
};

import env from "@beam-australia/react-env";

export const ENV = Object.freeze({
  NAME: env("NAME"),
  BFF_URL: env("BFF_URL"),
});

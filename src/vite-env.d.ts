/// <reference types="vite/client" />
declare namespace NodeJS {
  interface ProcessEnv {
    //types of envs
    NODE_ENV: "development" | "production" | "test";
    PUBLIC_URL: string;
    VITE_REACT_RAPID_API_EXERCISES: string;
  }
}

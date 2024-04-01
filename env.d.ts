import type { CookieJar } from 'tough-cookie';

declare namespace NodeJS {
  export interface ProcessEnv {
    EMAIL: string;
    PASSWORD: string;
  }
}

declare module 'axios' {
  interface AxiosRequestConfig {
    jar?: CookieJar;
  }
}

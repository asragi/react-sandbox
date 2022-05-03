import { developmentConfig } from "./development";
import { Config } from "./types";

const env = process.env.NODE_ENV;
console.log('The value of NODE_ENV is:', env);

export const config: Config = developmentConfig;

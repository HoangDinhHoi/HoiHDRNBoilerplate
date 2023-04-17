import Config from 'react-native-config';

export interface IConfig {
  BASE_URL: string | undefined;
}

const config: IConfig = {
  BASE_URL: Config.BASE_URL,
};

export default config;

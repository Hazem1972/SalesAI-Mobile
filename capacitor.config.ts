import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.salesai.app',
  appName: 'SalesAI',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    url: 'http://192.168.10.50:5000',
    cleartext: true
  }
};

export default config;

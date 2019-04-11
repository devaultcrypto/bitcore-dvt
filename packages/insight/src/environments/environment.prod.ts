import { LoggerConfig, NgxLoggerLevel } from 'ngx-logger';
import { DVT, BTC, Chain, tDVT, tBTC } from '../app/types/chains';

const loggingSettings: LoggerConfig = {
  serverLoggingUrl: '/api/logs/insight',
  level: NgxLoggerLevel.DEBUG,
  serverLogLevel: NgxLoggerLevel.ERROR
};

const initialChain: Chain = DVT;

const expectedChains: Chain[] = [DVT, tDVT, BTC, tBTC];

export const environment = {
  apiPrefix: 'http://localhost:3000',
  ratesApi: 'https://bitpay.com/api/rates/dvt',
  production: true,
  debugRouting: false,
  loggingSettings,
  initialDisplayValueCode: initialChain.code,
  initialChain,
  expectedChains,
  pollingRateMilliseconds: 60 * 1000
};

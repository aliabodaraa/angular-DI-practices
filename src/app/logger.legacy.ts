import { Logger } from './logger';

export const LegacyLogger: Logger = {
  prefix: 'legacy root',
  log(mssg: string) {
    console.log(`${this.prefix} : (Legacy) ${mssg}`);
  },
};

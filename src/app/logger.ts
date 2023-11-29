export interface Logger {
  prefix: string;
  log: (mssg: string) => void;
}

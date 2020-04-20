import {IConfigInterface} from './IConfig.interface';

export interface IEnvInterface {
    development(): IConfigInterface;

    production(): IConfigInterface;

    test(): IConfigInterface;
}

import { IConfigInterface } from './interfaces/IConfig.interface';
import { IEnvInterface } from './interfaces/IEnv.interface';

class Env implements IEnvInterface {
    public development(): IConfigInterface {
        return {
            server: {
                port: process.env.SERVER_PORT || 3000,
            },
            databases: {
                mongodb: {
                    type: 'mongodb',
                    url: process.env.MONGODB_URL || 'mongodb+srv://root:1234@cluster0-ilpdw.mongodb.net/test?retryWrites=true&w=majority',
                    useUnifiedTopology: true,
                    useNewUrlParser: true,
                    autoReconnect: true,
                    reconnectTries: Number.MAX_VALUE,
                    reconnectInterval: process.env.MONGODB_RECONNECT_INTERVAL || 1000,
                    database: process.env.MONGODB_DATABASE || 'lesson9',
                    entities: ['dist/**/*.entity{.ts,.js}', 'src/**/*.entity{.ts,.js}'],
                    synchronize: true,
                }
            }
        }
    }

    public production(): IConfigInterface {
        return {
            server: {
                port: process.env.SERVER_PORT || 3000,
            },
            databases: {
                mongodb: {
                    type: 'mongodb',
                    url: process.env.MONGODB_URL || 'mongodb+srv://root:1234@cluster0-ilpdw.mongodb.net/test?retryWrites=true&w=majority',
                    useUnifiedTopology: true,
                    useNewUrlParser: true,
                    autoReconnect: true,
                    reconnectTries: Number.MAX_VALUE,
                    reconnectInterval: process.env.MONGODB_RECONNECT_INTERVAL || 1000,
                    database: process.env.MONGODB_DATABASE || 'lesson9',
                    entities: [],
                    synchronize: true,
                }
            }
        }
    }

    public test(): IConfigInterface {
        return {
            server: {
                port: process.env.SERVER_PORT || 3000,
            },
            databases: {
                mongodb: {
                    type: 'mongodb',
                    url: process.env.MONGODB_URL || 'mongodb+srv://root:1234@cluster0-ilpdw.mongodb.net/test?retryWrites=true&w=majority',
                    useUnifiedTopology: true,
                    useNewUrlParser: true,
                    autoReconnect: true,
                    reconnectTries: Number.MAX_VALUE,
                    reconnectInterval: process.env.MONGODB_RECONNECT_INTERVAL || 1000,
                    database: process.env.MONGODB_DATABASE || 'lesson9',
                    entities: [],
                    synchronize: true,
                }
            }
        }
    }
}

export const env = new Env()[process.env.NODE_ENV || 'development']();

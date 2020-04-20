export interface IConfigInterface {
    server: {
        port: number|boolean|string;
    },
    databases: {
        mongodb: object;
    }
}

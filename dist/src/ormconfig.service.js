"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const dotenv = require("dotenv");
dotenv.config();
class ConfigService {
    constructor(env) {
        this.env = env;
    }
    getTypeOrmConfig() {
        return {
            type: 'mysql',
            host: this.env.DB_HOST,
            port: Number(this.env.DB_PORT),
            username: this.env.DB_USERNAME,
            password: this.env.DB_PASSWORD,
            database: this.env.DB_NAME,
            logging: false,
            entities: [(0, path_1.join)(__dirname, '**', '**', '**', '*.entity.{ts,js}')],
            migrationsTableName: 'migration',
            migrations: [(0, path_1.join)(__dirname, '..', 'migrations', '*.ts')],
            cli: {
                migrationsDir: './mysql/migrations',
            },
            synchronize: true,
        };
    }
}
const configService = new ConfigService(process.env);
exports.default = configService;
//# sourceMappingURL=ormconfig.service.js.map
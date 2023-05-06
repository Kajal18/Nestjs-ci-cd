import { TypeOrmModuleOptions } from '@nestjs/typeorm';
declare class ConfigService {
    private env;
    constructor(env: {
        [k: string]: string | undefined;
    });
    getTypeOrmConfig(): TypeOrmModuleOptions;
}
declare const configService: ConfigService;
export default configService;

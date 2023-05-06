"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const users_module_1 = require("./domains/users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth/auth.module");
const nest_winston_1 = require("nest-winston");
const cache_module_1 = require("./cache/cache.module");
const winston = require("winston");
const log_config_1 = require("./log.config");
const ormconfig_service_1 = require("./ormconfig.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(ormconfig_service_1.default.getTypeOrmConfig()),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            nest_winston_1.WinstonModule.forRoot({
                transports: [
                    new winston.transports.File(log_config_1.default.infoFile),
                    new winston.transports.File(log_config_1.default.errorFile),
                    new winston.transports.Console(),
                ],
                exitOnError: false,
            }),
            cache_module_1.RedisCacheModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
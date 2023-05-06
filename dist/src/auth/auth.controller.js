"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("./auth.service");
const local_auth_guard_1 = require("./local-auth.guard");
const login_user_dto_1 = require("./dto/login-user.dto");
const jwt_auth_guard_1 = require("./jwt-auth.guard");
const users_dto_1 = require("../domains/users/dto/users.dto");
const response_token_dto_1 = require("./dto/response-token.dto");
const unauthorized_dto_1 = require("./dto/unauthorized.dto");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
let AuthController = class AuthController {
    constructor(authService, logger) {
        this.authService = authService;
        this.logger = logger;
    }
    async login(req) {
        const data = await this.authService.login(req.user);
        this.logger.info('get access token', { data: data });
        return data;
    }
    async getMe(req) {
        const user = await req.user;
        this.logger.info('get user info', { data: user });
        return user;
    }
};
__decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, swagger_1.ApiUnauthorizedResponse)({ type: unauthorized_dto_1.UnauthorizedDTO }),
    (0, swagger_1.ApiOkResponse)({ type: response_token_dto_1.ResponseTokenDTO }),
    (0, swagger_1.ApiBody)({ type: login_user_dto_1.LoginUsersDTO }),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, swagger_1.ApiTags)('profile'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiUnauthorizedResponse)({ type: unauthorized_dto_1.UnauthorizedDTO }),
    (0, swagger_1.ApiOkResponse)({ type: users_dto_1.UsersDTO }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('me'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getMe", null);
AuthController = __decorate([
    (0, common_1.Controller)(),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        winston_1.Logger])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map
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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const users_service_1 = require("./users.service");
const users_dto_1 = require("./dto/users.dto");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async showAllUsers() {
        return this.usersService.showAll();
    }
    async createUsers(data) {
        return this.usersService.create(data);
    }
    async readUser(id) {
        const user = await this.usersService.getById(id);
        if (!user) {
            throw new common_1.NotFoundException();
        }
        return user;
    }
    async uppdateUser(id, data) {
        return await this.usersService.update(id, data);
    }
    async deleteUser(id) {
        await this.usersService.destroy(id);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'User deleted successfully',
        };
    }
};
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: [users_dto_1.UsersDTO] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "showAllUsers", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ type: users_dto_1.UsersDTO }),
    (0, swagger_1.ApiBadRequestResponse)(),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUsersDTO]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUsers", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: users_dto_1.UsersDTO }),
    (0, swagger_1.ApiNotFoundResponse)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "readUser", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: users_dto_1.UsersDTO }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_user_dto_1.UpdateUsersDTO]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "uppdateUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)('user'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map
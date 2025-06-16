"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./interfaces/controllers/user.controller");
const typeorm_1 = require("@nestjs/typeorm");
const user_service_impl_1 = require("./application/services/service-impl/user.service-impl");
const user_repository_impl_1 = require("./infrastructure/repositories/repository-impl.ts/user.repository-impl");
const user_entity_1 = require("./infrastructure/persistence/user.entity");
const cqrs_1 = require("@nestjs/cqrs");
const user_handlers_1 = require("./application/user.handlers");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity]), cqrs_1.CqrsModule],
        controllers: [user_controller_1.UserController],
        providers: [
            {
                provide: 'UserRepository',
                useClass: user_repository_impl_1.UserRepositoryImpl,
            },
            {
                provide: 'UserService',
                useClass: user_service_impl_1.UserServiceImpl,
            },
            ...user_handlers_1.CommandHandlers,
            ...user_handlers_1.QueryHandlers
        ],
        exports: [typeorm_1.TypeOrmModule],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map
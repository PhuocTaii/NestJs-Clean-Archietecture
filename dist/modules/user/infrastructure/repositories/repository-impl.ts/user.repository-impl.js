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
exports.UserRepositoryImpl = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../../persistence/user.entity");
const typeorm_2 = require("typeorm");
let UserRepositoryImpl = class UserRepositoryImpl {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async save(user) {
        const entity = this.userRepository.create(user);
        const saved = await this.userRepository.save(entity);
        return new user_entity_1.UserEntity(saved.name, saved.email, saved.password);
    }
    async findAll(page, limit) {
        const [users, total] = await this.userRepository.findAndCount({
            skip: page * limit,
            take: limit
        });
        return {
            data: users.map((user) => new user_entity_1.UserEntity(user.name, user.email, user.password)),
            total
        };
    }
};
exports.UserRepositoryImpl = UserRepositoryImpl;
exports.UserRepositoryImpl = UserRepositoryImpl = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserRepositoryImpl);
//# sourceMappingURL=user.repository-impl.js.map
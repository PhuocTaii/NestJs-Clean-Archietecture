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
exports.UserServiceImpl = void 0;
const user_entity_1 = require("../../../domain/entities/user.entity");
const common_1 = require("@nestjs/common");
let UserServiceImpl = class UserServiceImpl {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(name, email, password) {
        const user = new user_entity_1.User(name, email, password);
        return this.userRepository.save(user);
    }
    async findAll(page, limit) {
        return this.userRepository.findAll(page, limit);
    }
};
exports.UserServiceImpl = UserServiceImpl;
exports.UserServiceImpl = UserServiceImpl = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('UserRepository')),
    __metadata("design:paramtypes", [Object])
], UserServiceImpl);
//# sourceMappingURL=user.service-impl.js.map
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
exports.FindAllUsersHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const find_all_users_query_1 = require("../find-all-users.query");
const common_1 = require("@nestjs/common");
const pagination_response_dto_1 = require("../../../../../shared/pagination/dto/pagination-response.dto");
let FindAllUsersHandler = class FindAllUsersHandler {
    constructor(userService) {
        this.userService = userService;
    }
    async execute(command) {
        const { page, limit } = command;
        const { data, total } = await this.userService.findAll(page, limit);
        return new pagination_response_dto_1.PaginationResponseDto(data, total, page, limit);
    }
};
exports.FindAllUsersHandler = FindAllUsersHandler;
exports.FindAllUsersHandler = FindAllUsersHandler = __decorate([
    (0, cqrs_1.QueryHandler)(find_all_users_query_1.FindAllUsersQuery),
    __param(0, (0, common_1.Inject)('UserService')),
    __metadata("design:paramtypes", [Object])
], FindAllUsersHandler);
//# sourceMappingURL=find-all-users.handler.js.map
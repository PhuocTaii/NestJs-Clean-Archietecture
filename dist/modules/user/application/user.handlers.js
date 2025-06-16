"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryHandlers = exports.CommandHandlers = void 0;
const find_all_users_handler_1 = require("./queries/handlers/find-all-users.handler");
const create_user_handler_1 = require("./commands/handlers/create-user.handler");
exports.CommandHandlers = [create_user_handler_1.CreateUserHandler];
exports.QueryHandlers = [find_all_users_handler_1.FindAllUsersHandler];
//# sourceMappingURL=user.handlers.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserCommand = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_command_1 = require("./create-user.command");
class UpdateUserCommand extends (0, mapped_types_1.PartialType)(create_user_command_1.CreateUserCommand) {
}
exports.UpdateUserCommand = UpdateUserCommand;
//# sourceMappingURL=update-user.command.js.map
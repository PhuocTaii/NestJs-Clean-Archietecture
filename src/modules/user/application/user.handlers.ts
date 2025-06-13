import e from "express";
import { FindAllUsersHandler } from "./queries/handlers/find-all-users.handler";
import { CreateUserHandler } from "./commands/handlers/create-user.handler";

export const CommandHandlers = [CreateUserHandler];
export const QueryHandlers = [FindAllUsersHandler];
// more handlers can be added here as needed
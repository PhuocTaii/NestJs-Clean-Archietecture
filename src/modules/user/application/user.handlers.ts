import e from "express";
import { CreateUserHandler } from "./commands/handlers/create-user.handler";
import { FindUserByIdQueryHandler } from "./queries/handlers/find-user-by-id.handler";

export const CommandHandlers = [CreateUserHandler];
export const QueryHandlers = [FindUserByIdQueryHandler];
// more handlers can be added here as needed
import { HttpStatus } from "@nestjs/common";

export class SuccessResponse<T> {
    constructor(
        public message: string,
        public statusCode: HttpStatus,
        public data: T 
    ) {}
}
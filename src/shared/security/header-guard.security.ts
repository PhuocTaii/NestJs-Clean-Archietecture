import { CanActivate, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { CustomException } from "../exceptions/custom.exception";

@Injectable()
export class HeaderGuard implements CanActivate {
    constructor(private readonly configService: ConfigService) {}

    canActivate(context: any): boolean {
        const request = context.switchToHttp().getRequest();
        return this.validateRequest(request);
    }

    validateRequest(request: any): boolean {
        const expectedToken = this.configService.get<string>('HEADER_AUTH_TOKEN');
        const token = request.headers['x-test-token'];

        if (!token || token !== expectedToken) {
            throw CustomException.forbidden('Không có quyền truy cập');
        }

        return true;
    }

}
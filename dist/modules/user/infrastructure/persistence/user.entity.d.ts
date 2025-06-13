import { BaseEntity } from 'src/shared/base/entity.base';
export declare class UserEntity extends BaseEntity {
    name: string;
    email: string;
    password: string;
    constructor(name: string, email: string, password: string);
}

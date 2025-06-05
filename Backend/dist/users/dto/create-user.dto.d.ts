import { Role } from 'src/common/enums/role.enum';
export declare class CreateUserDto {
    name: string;
    email: string;
    address: string;
    password: string;
    role: Role;
}

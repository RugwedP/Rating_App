import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private userRepo;
    private jwtService;
    constructor(userRepo: Repository<User>, jwtService: JwtService);
    validateUser(loginDto: LoginDto): Promise<{
        id: number;
        name: string;
        email: string;
        address: string;
        role: import("../common/enums/role.enum").Role;
    }>;
    login(user: any): Promise<{
        access_token: string;
        id: any;
        role: any;
    }>;
}

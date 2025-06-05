import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    findAll(filter: any): Promise<import("./entities/user.entity").User[]>;
    updatePassword(id: string, dto: UpdatePasswordDto): Promise<import("./entities/user.entity").User>;
}

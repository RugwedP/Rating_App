import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
export declare class UsersService {
    private repo;
    constructor(repo: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(filter?: Partial<User>): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    updatePassword(id: number, dto: UpdatePasswordDto): Promise<User>;
}

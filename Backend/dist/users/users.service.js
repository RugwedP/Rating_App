"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const user_entity_1 = require("./entities/user.entity");
let UsersService = class UsersService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(createUserDto) {
        const passwordHash = await bcrypt.hash(createUserDto.password, 10);
        const user = this.repo.create({ ...createUserDto, password: passwordHash });
        return this.repo.save(user);
    }
    async findAll(filter) {
        return this.repo.find({ where: filter });
    }
    async findOne(id) {
        const user = await this.repo.findOne({ where: { id } });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        return user;
    }
    async update(id, updateUserDto) {
        await this.repo.update(id, updateUserDto);
        return this.findOne(id);
    }
    async updatePassword(id, dto) {
        const user = await this.findOne(id);
        user.password = await bcrypt.hash(dto.newPassword, 10);
        return this.repo.save(user);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map
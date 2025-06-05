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
exports.StoresService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const store_entity_1 = require("./entities/store.entity");
const user_entity_1 = require("../users/entities/user.entity");
let StoresService = class StoresService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(createStoreDto) {
        const { userId, ...storeData } = createStoreDto;
        const owner = await this.userRepo.findOne({ where: { id: userId } });
        if (!owner) {
            throw new Error('User not found');
        }
        const store = this.repo.create({ ...storeData, owner });
        return this.repo.save(store);
    }
    async findAll(filter) {
        const query = this.repo
            .createQueryBuilder('store')
            .leftJoin('store.ratings', 'rating')
            .select([
            'store.id AS id',
            'store.name AS name',
            'store.email AS email',
            'store.address AS address',
            'COALESCE(AVG(rating.rating), 0) AS averageRating',
        ])
            .groupBy('store.id');
        return await query.getRawMany();
    }
    findOne(id) {
        return this.repo.findOne({ where: { id }, relations: ['ratings'] });
    }
};
exports.StoresService = StoresService;
__decorate([
    (0, typeorm_1.InjectRepository)(user_entity_1.User),
    __metadata("design:type", typeorm_2.Repository)
], StoresService.prototype, "userRepo", void 0);
exports.StoresService = StoresService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(store_entity_1.Store)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StoresService);
//# sourceMappingURL=stores.service.js.map
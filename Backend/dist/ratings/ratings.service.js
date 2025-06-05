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
exports.RatingsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const rating_entity_1 = require("./entities/rating.entity");
let RatingsService = class RatingsService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(dto) {
        const rating = this.repo.create({
            rating: dto.rating,
            user: { id: dto.userId },
            store: { id: dto.storeId },
        });
        return this.repo.save(rating);
    }
    async update(id, dto) {
        const rating = await this.repo.findOne({ where: { id } });
        if (!rating)
            throw new common_1.NotFoundException('Rating not found');
        rating.rating = dto.rating;
        return this.repo.save(rating);
    }
    async findByUserAndStore(userId, storeId) {
        return this.repo.findOne({ where: { user: { id: userId }, store: { id: storeId } } });
    }
    async findByStore(storeId) {
        return this.repo.find({ where: { store: { id: storeId } } });
    }
    async getAverageRating(storeId) {
        const result = await this.repo
            .createQueryBuilder('rating')
            .select('AVG(rating.rating)', 'avg')
            .where('rating.storeId = :storeId', { storeId })
            .getRawOne();
        return parseFloat(result.avg) || 0;
    }
    async findByUser(userId) {
        return this.repo.find({
            where: { user: { id: userId } },
            relations: ['store'],
        });
    }
    async updateByUserAndStore(userId, storeId, rating) {
        const existingRating = await this.repo.findOne({
            where: {
                user: { id: userId },
                store: { id: storeId },
            },
        });
        if (!existingRating) {
            throw new common_1.NotFoundException('Rating not found for this user and store');
        }
        existingRating.rating = rating;
        return await this.repo.save(existingRating);
    }
};
exports.RatingsService = RatingsService;
exports.RatingsService = RatingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rating_entity_1.Rating)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RatingsService);
//# sourceMappingURL=ratings.service.js.map
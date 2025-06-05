import { Repository } from 'typeorm';
import { Rating } from './entities/rating.entity';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
export declare class RatingsService {
    private repo;
    constructor(repo: Repository<Rating>);
    create(dto: CreateRatingDto): Promise<Rating>;
    update(id: number, dto: UpdateRatingDto): Promise<Rating>;
    findByUserAndStore(userId: number, storeId: number): Promise<Rating>;
    findByStore(storeId: number): Promise<Rating[]>;
    getAverageRating(storeId: number): Promise<number>;
    findByUser(userId: number): Promise<Rating[]>;
    updateByUserAndStore(userId: number, storeId: number, rating: number): Promise<Rating>;
}

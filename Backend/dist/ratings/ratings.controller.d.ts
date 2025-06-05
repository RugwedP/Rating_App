import { RatingsService } from './ratings.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
export declare class RatingsController {
    private readonly ratingsService;
    constructor(ratingsService: RatingsService);
    create(dto: CreateRatingDto): Promise<import("./entities/rating.entity").Rating>;
    update(id: string, dto: UpdateRatingDto): Promise<import("./entities/rating.entity").Rating>;
    findByUserAndStore(userId: string, storeId: string): Promise<import("./entities/rating.entity").Rating>;
    findByStore(storeId: string): Promise<import("./entities/rating.entity").Rating[]>;
    getAverage(storeId: string): Promise<number>;
    getRatingsByUser(userId: string): Promise<import("./entities/rating.entity").Rating[]>;
    updateByUserAndStore(body: {
        userId: number;
        storeId: number;
        rating: number;
    }): Promise<import("./entities/rating.entity").Rating>;
}

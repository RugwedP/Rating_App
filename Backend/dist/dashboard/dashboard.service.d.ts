import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { Store } from '../stores/entities/store.entity';
import { Rating } from '../ratings/entities/rating.entity';
export declare class DashboardService {
    private userRepo;
    private storeRepo;
    private ratingRepo;
    constructor(userRepo: Repository<User>, storeRepo: Repository<Store>, ratingRepo: Repository<Rating>);
    getStats(): Promise<{
        totalUsers: number;
        totalStores: number;
        totalRatings: number;
    }>;
}

import { Rating } from '../../ratings/entities/rating.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Store {
    id: number;
    name: string;
    email: string;
    address: string;
    owner: User;
    ratings: Rating[];
}

import { Repository } from 'typeorm';
import { Store } from './entities/store.entity';
import { CreateStoreDto } from './dto/create-store.dto';
import { FilterStoreDto } from './dto/filter-store.dto';
export declare class StoresService {
    private repo;
    constructor(repo: Repository<Store>);
    private userRepo;
    create(createStoreDto: CreateStoreDto): Promise<Store>;
    findAll(filter: FilterStoreDto): Promise<any[]>;
    findOne(id: number): Promise<Store>;
}

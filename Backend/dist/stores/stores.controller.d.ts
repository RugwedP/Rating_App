import { StoresService } from './stores.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { FilterStoreDto } from './dto/filter-store.dto';
export declare class StoresController {
    private readonly storesService;
    constructor(storesService: StoresService);
    create(createStoreDto: CreateStoreDto): Promise<import("./entities/store.entity").Store>;
    findAll(filter: FilterStoreDto): Promise<any[]>;
    findOne(id: string): Promise<import("./entities/store.entity").Store>;
}

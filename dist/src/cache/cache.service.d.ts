import { Cache } from 'cache-manager';
export declare class RedisCacheService {
    private readonly cache;
    constructor(cache: Cache);
    get(key: any): Promise<string>;
    set(key: any, value: any): Promise<void>;
    delete(key: any): Promise<any>;
}

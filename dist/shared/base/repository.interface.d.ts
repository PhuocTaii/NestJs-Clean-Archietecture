export interface IRepository<T, id = String> {
    findById(id: id): Promise<T | null>;
    findAll(): Promise<T[]>;
    save(entity: T): Promise<void>;
    remove(id: id): Promise<void>;
}

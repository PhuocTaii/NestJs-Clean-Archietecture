/**
 * This file is part of the Shared Base Repository Interface.
 * It defines a generic interface for repositories that handle CRUD operations.
 * The interface is designed to be implemented by specific repository classes for different entities.
 */

export interface IRepository<T, id = String> {
  findById(id: id): Promise<T | null>;

  findAll(): Promise<T[]>;

  save(entity: T): Promise<void>;

  remove(id: id): Promise<void>;
}

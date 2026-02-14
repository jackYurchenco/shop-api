import { Product } from "./product.entity";

export interface ProductRepository {
  save(product: Product): Promise<void>;
  findAll(): Promise<Array<Product>>;
  findById(id: number): Promise<Product>;
}
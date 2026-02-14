import { ProductRepository } from "../../domain/product.repository";
import { Product } from "../../domain/product.entity";

export class GetProductByIdUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(id: number): Promise<Product | null> {
    return this.productRepository.findById(id);
  }
}
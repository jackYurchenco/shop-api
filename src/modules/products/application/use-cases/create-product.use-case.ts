import { ProductRepository } from "../../domain/product.repository";
import { Product } from "../../domain/product.entity";

export class CreateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(product: { id: number; name: string; price: number; description: string; }): Promise<void> {
    const newProduct: Product = Product.create(product);

    await this.productRepository.save(newProduct);
  }
}
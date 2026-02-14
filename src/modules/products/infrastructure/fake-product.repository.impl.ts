import { ProductRepository } from "../domain/product.repository";
import { Product } from "../domain/product.entity";

export class FakeProductRepository implements ProductRepository {
  private _products: Array<Product> = [
    Product.create({ id: 1, name: 'Apple', description: 'Red Apple', price: 10 }),
    Product.create({ id: 2, name: 'Banana', description: 'Yellow Banana', price: 5 }),
  ];

  async save(product: Product): Promise<void> {
    const index = this._products.findIndex(p => p.id === product.id);

    if  (index !== -1) {
      this._products[index] = product;
    } else {
      this._products.push(product);
    }
  }

  async findAll(): Promise<Array<Product>> {
    return [...this._products];
  }

  async findById(id: number): Promise<Product | undefined> {
    return this._products.find((product) => product.id === id);
  }
}
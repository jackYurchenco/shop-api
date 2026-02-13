import { Injectable } from '@nestjs/common';
import { Product } from "./models";

@Injectable()
export class ProductsService {
    private products: Array<Product> = [
        { id: 1, name: 'Product 1', price: 1, description: 'Product 1 description' },
        { id: 2, name: 'Product 2', price: 2, description: 'Product 2 description' },
        { id: 3, name: 'Product 3', price: 3, description: 'Product 3 description' },
    ];

    getProducts(): Array<Product> {
        return this.products;
    }

    getProductById(id: number): Product | undefined {
        return this.products.find(product => product.id === id);
    }
}

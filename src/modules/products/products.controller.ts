import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from "./products.service";
import { Product } from "./models";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    getProducts(): Array<Product> {
        return this.productsService.getProducts();
    }

    @Get(':id')
    getProductById(@Param('id') id: number): Product | undefined {
        return this.productsService.getProductById(id);
    }
}

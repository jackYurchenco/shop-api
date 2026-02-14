export class Product {
  private constructor(
    public readonly id: number,
    private _name: string,
    private _price: number,
    private _description: string,
  ) {}

  static create(params: { id: number; name: string; price: number; description: string; }): Product {
    if(!params.name || params.name.trim().length < 3) {
      throw new Error('Product name must be at least 3 characters');
    }

    if(params.price <= 0){
      throw new Error('Product price must be greater than 0');
    }

    return new Product(
      params.id,
      params.name,
      params.price,
      params.description
    );
  }

  changePrice(newPrice: number) {
    if(!newPrice || newPrice <= 0) {
      throw new Error('Product price must be greater than 0');
    }
    this._price = newPrice;
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  get description(): string {
    return this._description;
  }
}
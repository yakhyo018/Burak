import ProductModel from "../schema/Product.model";

class ProductService {
  private readonly ProductModel;

  constructor() {
    this.ProductModel = ProductModel;
  }
}

export default ProductService;

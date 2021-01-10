import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Product, ProductDocument } from "../../common/schemas/product.schema";
import { Model } from "mongoose";
import { CreateProduct } from "./dto/create-product.dto";

@Injectable()
export class ProductsService {

  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {
  }


  async getAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async getById(id: string): Promise<Product> {
    return this.productModel.findById(id);
  }

  async createProduct(productToCreate: CreateProduct): Promise<Product> {
    const newProduct =  await new this.productModel(productToCreate);
    return newProduct.save();
  }
}

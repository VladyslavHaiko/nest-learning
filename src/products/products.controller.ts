import { Body, Controller, Get, Head, Header, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { CreateProduct } from "./dto/create-product.dto";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {

  constructor(private readonly ProductsService: ProductsService){}

  @Get()
  getAll(): Promise<CreateProduct[]> {
    return this.ProductsService.getAll();
  }

  @Get(":id")
  getOne(@Param('id') id: string) {
    return this.ProductsService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  async newProduct(@Body() product: CreateProduct): Promise<CreateProduct> {
    try {
      return await this.ProductsService.createProduct(product);
    }catch (e) {
      console.log(e);
    }
  }

}

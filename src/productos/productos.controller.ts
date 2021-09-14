import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Request,
  Req,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDTO } from 'src/dto/create-producto.dto';
import { Producto } from 'src/interfaces/producto.interface';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  async create(@Body() productDto: CreateProductoDTO) {
    const newProduct = this.productosService.create(productDto);
    return newProduct;
  }

  @Get()
  async findAll(): Promise<Producto[]> {
    return this.productosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Producto> {
    return this.productosService.findOne(id);
  }

  @Put(':id')
  updateOne(@Param('id') id: string, @Body() updateProductDto: CreateProductoDTO) {
    return this.productosService.updateOne(id, updateProductDto);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.productosService.deleteOne(id);
  }
}

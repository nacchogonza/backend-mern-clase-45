import { Injectable } from '@nestjs/common';
import { Producto } from '../interfaces/producto.interface';
import { CreateProductoDTO } from 'src/dto/create-producto.dto';

@Injectable()
export class ProductosService {
  private productos: Producto[] = [];
  create(producto: CreateProductoDTO) {
    const newId = this.productos.length + 1;
    
    const createProductDTO: Producto = {
      id: Number(newId),
      title: producto.title,
      thumbnail: producto.thumbnail,
      price: producto.price
    }

    this.productos.push(createProductDTO);
    return createProductDTO
  }

  findAll(): Producto[] {
    return this.productos;
  }

  findOne(id: string): Producto {
    return this.productos.find(product => product.id == Number(id))
  }

  updateOne(id: string, producto: CreateProductoDTO): Producto {
    const productToUpdate = this.productos.find(product => product.id == Number(id))

    if (productToUpdate) {
      productToUpdate.price = producto.price;
      productToUpdate.title = producto.title;
      productToUpdate.thumbnail = producto.thumbnail;
    }

    return productToUpdate
  }

  deleteOne(id: string): Producto {
    const productToDelete = this.productos.find(product => product.id == Number(id))

    if (productToDelete) {
      const newProductsArray: Producto[] = this.productos.filter(product => product.id != Number(id));
      this.productos = newProductsArray;
    }

    return productToDelete
  }
}

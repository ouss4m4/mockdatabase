import { Request } from 'express';
import { Product } from '../../entities';
import { ProductsDB } from '../../dbAccess/productsdb';
import { checkIfProductIsValid } from '../../utils';
export class ProductCases {
  constructor(private dbAccess: ProductsDB) {}

  public getProducts = async (req: Request): Promise<Product[]> => {
    try {
      const dbData = await this.dbAccess.findAll();
      const products: Product[] = dbData.map((raw: any) => new Product(raw)); /*  */
      return products;
    } catch (error) {
      throw new Error(error);
    }
  };

  public addProduct = async (req: Request): Promise<string> => {
    try {
      const product = new Product(req.body);
      if (checkIfProductIsValid(product)) {
        return await this.dbAccess.addProduct({ ...product });
      } else {
        throw Error('invalid product data');
      }
    } catch (error) {
      throw new Error(error);
    }
  };
}

// usecase imports entity, and expose function using it

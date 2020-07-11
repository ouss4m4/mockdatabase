import { Request, Response } from 'express';
import { productUseCase } from '../use-cases/product';
/* import { checkIfProductIsValid } from '../utils/validators'; */

export class ProductsController {
  public async getProducts(req: Request, res: Response) {
    try {
      const result = await productUseCase.getProducts(req);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  public async postProduct(req: Request, res: Response) {
    try {
      const result = await productUseCase.addProduct(req);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

import { Application, Request, Response } from 'express';
import { ProductsController } from '../controllers/products.controllers';

class ProductsRoutes {
  public productsController = new ProductsController();
  public routes(app: Application): void {
    app
      .route('/products')
      .get((req: Request, res: Response) => this.productsController.getProducts(req, res))
      .post((req: Request, res: Response) => this.productsController.postProduct(req, res));
  }
}

export const productsRoute = new ProductsRoutes();

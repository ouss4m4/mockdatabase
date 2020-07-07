import { Application, Request, Response } from 'express';
import { firestore } from 'firebase-admin';
import { ProductsController } from '../controllers/products.controllers';

export class ProductsRoutes {
  public productsController = new ProductsController();
  public routes(app: Application, db: firestore.Firestore): void {
    app
      .route('/products')
      .get(async (req: Request, res: Response) => this.productsController.getUsers(req, res, db));
  }
}

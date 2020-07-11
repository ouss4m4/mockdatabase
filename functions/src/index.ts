import { https } from 'firebase-functions';
import { firestore, initializeApp } from 'firebase-admin';
import express, { Application, Request, Response, NextFunction } from 'express';
import { urlencoded } from 'body-parser';
import { ProductsRoutes } from './routes/products.route';
import { checkToken } from './middlewares/checktoken';

class App {
  public app: Application;
  public db: firestore.Firestore;
  public userCollection = 'users';
  public productsRoutes = new ProductsRoutes();
  constructor() {
    initializeApp();
    this.app = express();
    this.db = firestore();
    this.config();
    this.app.use(checkToken);
    this.productsRoutes.routes(this.app, this.db);
  }
  private config(): void {
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH,DELETE');
      next();
    });
    this.app.use(urlencoded({ extended: false }));
    this.app.use((req, res, next) => {
      express.json()(req, res, (err): any => {
        if (err) {
          console.error(err);
          return res.sendStatus(400);
        }
        next();
      });
    });
    console.log('aegaeh');

    console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);
  }
}

const main = new App().app;

export const mockdatabase = https.onRequest(main);

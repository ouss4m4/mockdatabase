import { https } from 'firebase-functions';
import express, { Application, Request, Response, NextFunction } from 'express';
import { urlencoded } from 'body-parser';
import { productsRoute } from './routes/products.route';
import { checkToken } from './middlewares/checktoken';

class App {
  public app: Application;
  constructor() {
    this.app = express();
    this.config();
    this.app.use(checkToken);
    productsRoute.routes(this.app);
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
  }
}

const main = new App().app;

export const mockdatabase = https.onRequest(main);

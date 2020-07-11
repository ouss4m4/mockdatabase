import { Request, Response } from 'express';
import { firestore } from 'firebase-admin';
import { PRODUCTS_COLLECTION } from '../utils/consts';
import { IProductDetail } from '../utils/models';
import { checkIfProductIsValid } from '../utils/validators';

export class ProductsController {
  public async getProducts(req: Request, res: Response, db: firestore.Firestore) {
    try {
      const productsQuerySnapShot = await db.collection(PRODUCTS_COLLECTION).get();
      const products: any[] = [];
      productsQuerySnapShot.forEach((doc) => {
        products.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      res.status(200).json(products);
    } catch (error) {
      console.log('ew', error);
      res.status(500).send(error);
    }
  }

  public async postProduct(req: Request, res: Response, db: firestore.Firestore) {
    try {
      const product: IProductDetail = {
        ItemName: req.body['ItemName'],
        ItemCode: req.body['ItemCode'],
        ForeignName: req.body['ForeignName'],
        Manufacturer: req.body['Manufacturer'],
        ManufacturerName: req.body['ManufacturerName'],
        DiscountPercent: req.body['DiscountPercent'],
        Quantity: req.body['Quantity'],
        UnitPrice: req.body['UnitPrice'],
        VatGroup: req.body['VatGroup'],
        WarehouseCode: req.body['WarehouseCode'],
      };
      if (checkIfProductIsValid(product)) {
        const newDoc = await db.collection(PRODUCTS_COLLECTION).add(product);
        res.status(201).json({ success: true, message: `Created a new user: ${newDoc.id}` });
      } else {
        res.status(400).send({ success: false, message: `invalid product data` });
      }
    } catch (error) {
      console.log('ew', error);
      res.status(500).send(error);
    }
  }
}

import { firestore } from 'firebase-admin';
import { PRODUCTS_COLLECTION } from '../utils/consts';
import { Product } from '../entities';

export class ProductsDB {
  constructor(private db: firestore.Firestore) {}

  public findAll = async (): Promise<any[]> => {
    const productsQuerySnapShot = await this.db
      .collection(PRODUCTS_COLLECTION)
      .orderBy('ItemCode')
      .get();
    const products: any[] = [];
    productsQuerySnapShot.forEach((doc: any) => {
      const resp: object = doc.data();
      products.push(
        Object.assign(
          {
            id: doc.id,
          },
          resp,
        ),
      );
    });
    return products;
  };

  public addProduct = async (product: Product): Promise<string> => {
    const newDoc = await this.db.collection(PRODUCTS_COLLECTION).add(product);
    return newDoc.id;
  };
}

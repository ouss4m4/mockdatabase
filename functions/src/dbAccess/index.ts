import { db } from './firestore';
import { ProductsDB } from './productsdb';

export const productsDB = new ProductsDB(db);

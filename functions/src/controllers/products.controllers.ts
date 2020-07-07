import { Request, Response } from "express";
import { firestore } from "firebase-admin";
import { USERS_COLLECTION } from "../utils/consts";

export class ProductsController {
  public async getUsers(req: Request, res: Response, db: firestore.Firestore) {
    try {
      const userQuerySnapshot = await db.collection(USERS_COLLECTION).get();
      const users: any[] = [];
      userQuerySnapshot.forEach((doc) => {
        users.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      res.status(200).json(users);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

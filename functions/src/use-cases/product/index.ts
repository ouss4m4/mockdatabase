import { ProductCases } from './product.usecases';
import { productsDB } from '../../dbAccess';

export const productUseCase = new ProductCases(productsDB);

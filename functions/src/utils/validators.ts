import { IProductDetail } from './models';

export const checkIfProductIsValid = (product: IProductDetail): boolean => {
  if (product.ItemCode.trim().length !== 6) {
    return false;
  }
  if (product.ItemName.trim().length < 4) {
    return false;
  }
  if (!product.Manufacturer.trim().length) {
    return false;
  }
  if (!product.ManufacturerName.trim().length) {
    return false;
  }
  if (product.Quantity <= 0) {
    return false;
  }
  if (product.UnitPrice <= 0) {
    return false;
  }

  if (['0', '1'].indexOf(product.VatGroup) === -1) {
    return false;
  }
  if (['M0', 'M1', 'M2'].indexOf(product.WarehouseCode) === -1) {
    return false;
  }
  if (product.DiscountPercent && !product.DiscountPercent.trim().length) {
    return false;
  }
  return true;
};

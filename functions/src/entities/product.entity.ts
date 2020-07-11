export class Product {
  ItemCode: string;
  ItemName: string;
  ForeignName: string;
  Manufacturer: string;
  ManufacturerName: string;
  Quantity: number;
  UnitPrice: number;
  VatGroup: string;
  WarehouseCode: string;
  DiscountPercent: string;

  constructor(data: any) {
    this.ItemCode = data['ItemCode'];
    this.ItemName = data['ItemName'];
    this.ForeignName = data['ForeignName'];
    this.Manufacturer = data['Manufacturer'];
    this.ManufacturerName = data['ManufacturerName'];
    this.Quantity = data['Quantity'];
    this.UnitPrice = data['UnitPrice'];
    this.VatGroup = data['VatGroup'];
    this.WarehouseCode = data['WarehouseCode'];
    this.DiscountPercent = data['DiscountPercent'];
  }
}

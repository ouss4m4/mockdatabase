export interface IPartnerMinHeader {
  CardCode: string;
  CardName: string;
}

export interface IPartnerHeader extends IPartnerMinHeader {
  Phone1: string;
  Phone2: string;
  Fax: string;
  Cellular: string;
}

export interface IPartnerDetails extends IPartnerHeader {
  CreditLimit: number;
  City: string;
  EmailAddress: string;
  MailAddress: string;
  FederalTaxID: string;
  Address: string;
  CurrentAccountBalance: number;
}

export interface IProductMinHeader {
  ItemCode: string;
  ItemName: string;
}
export interface IProductDetail extends IProductMinHeader {
  ForeignName: string;
  Manufacturer: string;
  ManufacturerName: string;
  Quantity: number;
  UnitPrice: number;
  VatGroup: string;
  WarehouseCode: string;
  DiscountPercent: string;
}

export class MenuItem{
  Id: string;
  Name: string;
  Price: number;
  Category: 'LOCAL_DISH' | 'SOBEBRA_DRINK' | 'DESSERT';
  IsVatExempt: boolean;
  Selected: boolean;
  Quantity: number;
}
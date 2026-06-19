export interface MenuItem{
  id: string;
  name: string;
  price: number;
  category: 'LOCAL_DISH' | 'SOBEBRA_DRINK' | 'DESSERT';
  isVatExempt: boolean;
  selected: boolean;
  quantity: number;
}
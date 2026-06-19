import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuItem } from '../../core/api-models';

@Component({
  selector: 'app-menu-modal',
  imports: [CommonModule,FormsModule],
  templateUrl: './menu-modal.html',
  styleUrl: './menu-modal.scss',
})
export class MenuModal implements OnInit{

// Session parameters
  isOpen: boolean = true;
  tableName: string = 'Table #04 (Terrasse)';
  username: string = 'christian_k_pk';

 // Available Menu Items Matrix
  menuItems: MenuItem[] = [
    { id: 'SKU-ATA-01', name: 'Atassi Complet (Poisson)', price: 2500, category: 'LOCAL_DISH', isVatExempt: true, selected: false, quantity: 0 },
    { id: 'SKU-IGN-02', name: 'Igname Pilée (Mouton)', price: 3000, category: 'LOCAL_DISH', isVatExempt: true, selected: false, quantity: 0 },
    { id: 'SKU-AMI-03', name: 'Pâte Rouge (Amiwo Poulet)', price: 3500, category: 'LOCAL_DISH', isVatExempt: true, selected: false, quantity: 0 },
    
    { id: 'SKU-DOP-02', name: 'Doppel Munich', price: 1000, category: 'SOBEBRA_DRINK', isVatExempt: false, selected: false, quantity: 0 },
    { id: 'SKU-GUI-05', name: 'Guinness (Small)', price: 1000, category: 'SOBEBRA_DRINK', isVatExempt: false, selected: false, quantity: 0 },
    { id: 'SKU-YOU-06', name: 'Youki Pamplemousse', price: 600, category: 'SOBEBRA_DRINK', isVatExempt: false, selected: false, quantity: 0 },
    
    { id: 'SKU-WAG-07', name: 'Wagasi Frit', price: 1500, category: 'DESSERT', isVatExempt: false, selected: false, quantity: 0 },
    { id: 'SKU-BIS-09', name: 'Verre de Jus de Bissap', price: 500, category: 'DESSERT', isVatExempt: false, selected: false, quantity: 0 }
  ];

  ngOnInit(): void { }

  
  // Triggers when a checkbox state toggles
  onItemSelect(item: MenuItem): void {
    if (item.selected) {
      item.quantity = 1; // State-lock boundary baseline
    } else {
      item.quantity = 0;
    }
  }

  
   // Handle quantity changes
  adjustQuantity(item: MenuItem, change: number): void {
    if (!item.selected) return;
    const nextQty = item.quantity + change;
    if (nextQty >= 1) {
      item.quantity = nextQty;
    } else {
      item.quantity = 0;
      item.selected = false; // Deselect if counter reaches zero
    }
  }

  
  // Filter items by category grouping
  getItemsByCategory(category: string): MenuItem[] {
    return this.menuItems.filter(item => item.category === category);
  }

  // Live calculation properties
  get grossTotal(): number {
    return this.menuItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

   get calculatedVat(): number {
    // 18% VAT applied strictly to non-exempt items in Benin
    const taxableTotal = this.menuItems
      .filter(item => !item.isVatExempt)
      .reduce((acc, item) => acc + (item.price * item.quantity), 0);
    
    // Reverse-calculate VAT component contained within the internal price structure
    return Math.round(taxableTotal - (taxableTotal / 1.18));
  }

  
  // Dismiss modal view
  closeModal(): void {
    this.isOpen = false;
  }

  
  // Package layout properties to send data payload onto your e-MeCEF server API
  submitOrder(): void {
    const activeBasket = this.menuItems.filter(item => item.quantity > 0);
    
    if (activeBasket.length === 0) {
      alert('Veuillez sélectionner au moins un article.');
      return;
    }

    const payload = {
      order_metadata: {
        table_identifier: this.tableName,
        waiter_username: this.username,
        timestamp: new Date().toISOString()
      },
      basket_items: activeBasket.map(item => ({
        item_id: item.id,
        name: item.name,
        quantity: item.quantity,
        unit_price_fcfa: item.price,
        is_vat_exempt: item.isVatExempt
      })),
       financial_summary: {
        gross_subtotal_fcfa: this.grossTotal,
        calculated_vat_18_fcfa: this.calculatedVat,
        final_net_payable_fcfa: this.grossTotal
      }
    };

     console.log('e-MeCEF Outbound Payload Generated:', JSON.stringify(payload, null, 2));
    alert('Commande envoyée en cuisine ! Payload e-MeCEF synchronisé.');
    this.closeModal();
  }

}

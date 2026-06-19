import { Component, inject, OnInit } from '@angular/core';
import { NgbModal, NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { MenuModal } from '../../../modals';
import { AuthHeaderDisplayComponent } from '../../../app-layout/components';

@Component({
  selector: 'app-menu',
  imports: [AuthHeaderDisplayComponent,],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})

export class Menu implements OnInit {

  headerActionText: string = 'Menu + ';
  isOpen: boolean = true;
  
  private readonly modalService = inject(NgbModal);

  ngOnInit(): void {
    
  }

   createMenu() {
    this.modalService.open(MenuModal);
    }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-header',
  imports: [],
  templateUrl: './modal-header.html',
  styleUrl: './modal-header.scss',
})
export class ModalHeader implements OnInit{
  @Input() title: string = '';

  @Output() onCloseClick = new EventEmitter();
  description: string;

  ngOnInit(): void {
  }

  closeModal() {
    this.onCloseClick.emit();
  }
}

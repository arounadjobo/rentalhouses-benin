import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-auth-header-display',
  standalone: true,
  imports: [],
  templateUrl: './auth-header-display.component.html',
  styleUrl: './auth-header-display.component.scss'
})
export class AuthHeaderDisplayComponent implements OnInit {
  @Input() headerActionText: string = "Menu";
  @Input() showActionHeader: boolean = true;

  @Output() onActionBtnClick: EventEmitter<any> = new EventEmitter();


  ngOnInit() {
  }

  headerActionClick() {
    this.onActionBtnClick.emit();
  }

}

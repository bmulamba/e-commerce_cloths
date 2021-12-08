import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor() { }
  @Input() typeColor : string;
  @Output() onClose = new EventEmitter<any>();

  ngOnInit(): void {
  }

  onclose() {
    this.onClose.emit();
  }

}

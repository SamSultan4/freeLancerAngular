import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // @Output() public sidenavToggle = new EventEmitter();
   loadDate:Date = new Date();
  constructor() { 

  }

  ngOnInit(): void {
  }
  
 }

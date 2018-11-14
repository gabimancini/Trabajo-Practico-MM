import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
@Input() showLinks  = true;
@Input() image = "../../../assets/img/intro-banner.jpg";  
@Input() height:string= "80vh;";
  constructor() {
  
   }

  ngOnInit() {
  }

}

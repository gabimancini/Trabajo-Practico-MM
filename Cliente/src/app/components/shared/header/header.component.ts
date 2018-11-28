import { Component, OnInit, Input } from '@angular/core';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() showLinks = true;
  @Input() image = '../../../assets/img/intro-banner.jpg';
  @Input() introHeight = '80vh';

  constructor(public viewPortScroller: ViewportScroller) {}

  ngOnInit() {}
  goToAnchor(anchor: string) {
    this.viewPortScroller.scrollToAnchor(anchor);
  }
}

import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {  SwiperComponent } from "swiper/angular";

import SwiperCore, { Autoplay, Pagination } from "swiper";

SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay]);
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None,  
})
export class AboutComponent implements OnInit {
  // Fmapprovalpath: "/assets/FM Approval-42HTLS-Clean.pdf";
  @ViewChild("outsideElement", {static: true}) outsideElement : ElementRef;
  @ViewChild('modalView', {static: true}) modalView$ : ElementRef;
  constructor() { }

  ngOnInit() {
  }
openModalfm(){
  this.modalView$.nativeElement.classList.add('visible');
}

openmodalpdf(){
  window.location.href="https://drive.google.com/file/d/1MGd3ePV0DHY70k21j5vc5Wlr3_WP7LnA/view?usp=sharing";
}
@HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const outsideElement = this.outsideElement.nativeElement.contains(targetElement);
    if (outsideElement) {
      this.modalView$.nativeElement.classList.remove('visible');
      
    } 
  }
}

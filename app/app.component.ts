import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular 4';
  prevIndex = 0;
  nextIndex = 0;
  arrayList = [
    2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
    2013, 2014, 2015,
  ];
  newArray = [];

  ngOnInit() {
    let arrayLength = this.arrayList.length;
    for (let i = 0; i < arrayLength; i + 8) {
      if (this.newArray) this.newArray.push(this.arrayList.slice(i));
    }
  }
  onPrevIndexClick() {
    this.prevIndex = this.prevIndex + 1;
    if (this.nextIndex > 0) {
      this.nextIndex = this.nextIndex - 1;
    }
  }

  onNextIndexClick() {
    this.nextIndex = this.nextIndex + 1;
    if (this.prevIndex > 0) {
      this.prevIndex = this.prevIndex - 1;
    }
  }
}

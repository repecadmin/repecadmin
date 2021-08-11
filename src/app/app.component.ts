import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isValue: number = 0;
  title = 'aotInfotech';
  isDisable = false;
  constructor(private route:Router){}

  ngOnInit() {
    this.route.navigate(['']);

  }

  toggle0() { this.isValue = 0; }
  toggle1() { this.isValue = 1; }
  toggle2() { this.isValue = 2; }
  toggle3() { this.isValue = 3; }
  toggle4() { this.isValue = 4; }

}

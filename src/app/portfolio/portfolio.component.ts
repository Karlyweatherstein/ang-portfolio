import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bestFurrends:string = "assets/portfolio-img/best-furrends-mockup.jpg"
  horiseon:string = "assets/portfolio-img/horiseon.jpg"
  passwordMockup:string = "assets/portfolio-img/password-mockup.png"
  runBuddy:string = "assets/portfolio-img/run-buddy.jpg"
  showMeHow:string = "assets/portfolio-img/showMeHow-mockup.jpg"
  weatherDashboard:string = "assets/portfolio-img/weather-dashboard.jpg"



}

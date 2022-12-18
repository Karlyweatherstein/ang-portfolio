import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  email:string = "assets/img/email-icon.png"
  github:string = "assets/img/github-icon.png"
  linkedin:string = "assets/img/linkedin-icon.png"

}
